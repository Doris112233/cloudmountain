# 云山保护官网

[cloudmountain.cn](https://cloudmountain.cn/) 是云山保护（Cloud Mountain Conservation）的双语官方网站。本项目是基于 Umi Max 4、React 18 和 Ant Design 5 的客户端渲染静态站点；内容保存在 TypeScript 和 locale 文件中，图片、音频与报告主要托管于腾讯云 COS。

## 环境要求

- Node.js 20
- npm 10 或更高版本

依赖版本由 `package-lock.json` 固定。首次安装或 CI 环境请使用：

```bash
npm ci
```

## 常用命令

```bash
npm start          # 启动本地开发服务器
npm run lint       # ESLint 源码检查
npm run typecheck  # TypeScript 严格检查
npm test           # 使用 Vitest 运行单元与组件测试
npm run build      # 生成 dist/ 生产文件
npm run check      # 依次运行 lint、类型检查、测试和生产构建
```

## 项目结构

```text
.umirc.ts       Umi Max 配置、国际化和页面路由
src/layouts/    全局导航、页脚、语言切换和悬浮入口
src/pages/      首页、保护项目、故事、机构信息和捐赠页面
src/components/ 共用 Loading 与视觉组件
src/data/       档案、报告、时间线和媒体资源索引
src/locales/    Umi Max 约定加载的中英文 message 汇总入口
src/test/       Vitest/jsdom 全局测试环境
```

中英文文案仍按页面维护在各自的 `locales/` 目录，并由 `src/locales/messages.ts` 汇总至 `zh-CN.ts` 与 `en-US.ts`。新增或调整 message id 时必须同步维护两种语言；测试会检查 key 对称性。

全局导航使用 Ant Design 5 的 `Layout`、`Menu` 和 `Drawer`，品牌主色由 `ConfigProvider` token 管理。页面内部暂时保留 MUI、Less、Swiper 与 anime.js；不要在局部页面重新引入 Pro Layout 或依赖旧版 Ant Design API。

## 外部资源

媒体资源主要从以下 COS 前缀加载：

```text
https://static-1314371099.cos.ap-beijing.myqcloud.com/
```

部署前需确认该域名下的图片、MP3、PDF 和报告封面仍可公开访问。Bilibili 视频、公益捐赠页和社交媒体链接同样属于外部依赖。

## 发布检查

提交发布版本前运行 `npm run check`，并手动检查中英文切换、长臂猿档案音频、项目视频、报告预览与下载、捐赠轮播以及移动端布局。

## 自动部署

push 或 merge 到 `main` 后，GitHub Actions 会在 Node.js 20 环境执行完整质量检查和构建，再将 `dist/` 原子部署到腾讯云 Nginx 服务器。服务器不需要 Node.js 或项目 npm 依赖；发布失败时会自动恢复上一版本。

首次启用需要创建服务器 `deploy` 用户、调整 Nginx root，并配置 GitHub Production Environment。完整初始化、Secrets、发布和回滚步骤见 [腾讯云自动部署文档](docs/deployment.md)。
