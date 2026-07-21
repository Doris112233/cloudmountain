# 腾讯云自动部署

本项目由 GitHub Actions 使用 Node.js 20 构建。腾讯云服务器只托管构建完成的 `dist/`，不需要安装 Node.js 或项目 npm 依赖。

## 1. 确认当前 Nginx 配置

先通过 SSH 登录服务器，执行只读检查：

```bash
sudo nginx -T | grep -n -A 20 -B 5 'server_name cloudmountain.cn'
```

记录当前站点的 `root`、HTTPS 配置文件位置和运行 Nginx 的系统用户。后续只修改 `root`，不要删除证书、域名或其他站点配置。

## 2. 创建部署用户和目录

以下命令在服务器执行。`/path/to/current/site` 必须替换为上一步查到的当前网站目录，确认其中存在 `index.html` 后才能复制。

OpenCloudOS 服务器使用以下命令；`/path/to/current/site` 必须替换为当前 Nginx root：

```bash
id deploy 2>/dev/null || sudo useradd --create-home --shell /bin/bash deploy
sudo passwd -l deploy
sudo install -d -o deploy -g deploy -m 755 /www/wwwroot/cloudmountain-deploy/releases/bootstrap
sudo rsync -a /path/to/current/site/ /www/wwwroot/cloudmountain-deploy/releases/bootstrap/
sudo chown -R deploy:deploy /www/wwwroot/cloudmountain-deploy
sudo -u deploy ln -s /www/wwwroot/cloudmountain-deploy/releases/bootstrap /www/wwwroot/cloudmountain-deploy/current
```

确认 `/www/wwwroot/cloudmountain-deploy/current/index.html` 存在。不要在没有确认当前网站目录的情况下运行复制命令。

## 3. 创建专用 SSH 密钥

在自己的电脑上生成独立密钥，不要复用个人或 root 密钥：

```bash
ssh-keygen -t ed25519 -C 'github-actions-cloudmountain' -f ~/.ssh/cloudmountain-github-deploy
```

先从自己的电脑把公钥上传到服务器（`ADMIN_USER` 是当前可执行 sudo 的登录用户）：

```bash
scp ~/.ssh/cloudmountain-github-deploy.pub ADMIN_USER@SERVER_IP:/tmp/cloudmountain-deploy.pub
```

然后 SSH 登录服务器并安装公钥：

```bash
sudo install -d -o deploy -g deploy -m 700 /home/deploy/.ssh
sudo sh -c 'cat /tmp/cloudmountain-deploy.pub >> /home/deploy/.ssh/authorized_keys'
sudo chown deploy:deploy /home/deploy/.ssh/authorized_keys
sudo chmod 600 /home/deploy/.ssh/authorized_keys
rm /tmp/cloudmountain-deploy.pub
```

验证新密钥可以登录且不能 sudo：

```bash
ssh -i ~/.ssh/cloudmountain-github-deploy deploy@SERVER_IP
```

## 4. 更新 Nginx root

将 `cloudmountain.cn` 对应 server block 的站点目录改为：

```nginx
root /www/wwwroot/cloudmountain-deploy/current;
index index.html;

location / {
    try_files $uri $uri/ /index.html;
}
```

检查并重新加载配置：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

如果 Nginx 以受限用户运行，确保它对 `/var/www/cloudmountain` 的父目录具有读取和进入权限。

## 5. 配置 GitHub Production Environment

在仓库的 **Settings → Environments** 创建 `production`，无需设置 required reviewers。添加以下 Environment secrets：

| 名称              | 内容                                                |
| ----------------- | --------------------------------------------------- |
| `SERVER_HOST`     | 腾讯云服务器公网 IP 或 SSH 域名                     |
| `SERVER_PORT`     | SSH 端口，通常为 `22`                               |
| `SERVER_USER`     | `deploy`                                            |
| `SSH_PRIVATE_KEY` | `~/.ssh/cloudmountain-github-deploy` 私钥的完整内容 |
| `SSH_KNOWN_HOSTS` | 核对指纹后的服务器 known_hosts 记录                 |

添加 Environment variables：

| 名称             | 内容                                |
| ---------------- | ----------------------------------- |
| `DEPLOY_PATH`    | `/www/wwwroot/cloudmountain-deploy` |
| `PRODUCTION_URL` | `https://cloudmountain.cn`          |

获取 known_hosts 前，应先从腾讯云控制台或已可信连接核对服务器 SSH 指纹，然后执行：

```bash
ssh-keyscan -p 22 SERVER_IP
```

将与已核对指纹一致的完整输出保存为 `SSH_KNOWN_HOSTS`。不要在 workflow 中动态运行 `ssh-keyscan` 并直接信任结果。

## 6. 发布与回滚

push 或 merge 到 `main` 后，Actions 会执行 `npm ci`、`npm run check`，成功后上传新 release 并原子切换 `current`。线上检查失败会自动恢复原版本，最近至少保留五个 release。

可以在 **Actions → Deploy production → Run workflow** 手动重发当前 main。

手动回滚时先列出版本：

```bash
ls -lt /www/wwwroot/cloudmountain-deploy/releases
readlink -f /www/wwwroot/cloudmountain-deploy/current
```

确认目标版本包含 `index.html`，再原子切换：

```bash
target=/www/wwwroot/cloudmountain-deploy/releases/RELEASE_ID
test -s "$target/index.html"
ln -s "$target" /www/wwwroot/cloudmountain-deploy/current.rollback
mv -Tf /www/wwwroot/cloudmountain-deploy/current.rollback /www/wwwroot/cloudmountain-deploy/current
```

软链接切换不需要 reload Nginx。

## 安全注意事项

- 腾讯云防火墙只开放 HTTP、HTTPS 和实际使用的 SSH 端口。
- `deploy` 用户不得拥有 sudo 权限，也不得写入 Nginx 配置或证书目录。
- 私钥不得提交到 Git；本地验证完成后应安全保存或删除。
- 密钥泄露时删除 `/home/deploy/.ssh/authorized_keys` 中对应公钥，生成新密钥并更新 GitHub Secret。
