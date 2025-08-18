import React, { createContext, useState } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, useIntl, history, setLocale, SelectLang, getLocale } from 'umi';
import logo from '../public/logo.png';
import { Button } from 'antd';
import { WeiboOutlined, WechatOutlined, MailOutlined } from '@ant-design/icons';
import BasicAnchor from './anchor';
import './basicLayout.less';
import data from '@/data';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoadingProvider } from '@/components/LoadingContext';
import GlobalLoading from '@/components/GlobalLoading';
import NavigationLoadingHandler from '@/components/NavigationLoadingHandler';

const BasicLayout: React.FC = props => {
  const intl = useIntl();
  const [pathname, setPathname] = useState('/');

  const changeLocales = () => {
    const locales = getLocale();
    if (locales === 'zh-CN') {
      setLocale('en-US');
    }
    if (locales === 'en-US') {
      setLocale('zh-CN');
    }
  };

  const localesBtn = () => {
    switch (getLocale()) {
      case 'zh-CN':
        return 'EN';
      case 'en-US':
        return '中';
    }
  };

  const routesProps = {
    route: {
      path: '/',
      routes: [
        {
          path: '/protect',
          name: intl.formatMessage({ id: 'menu.protect' }),
          routes: [
            {
              path: '/protect/archive', //关于长臂猿
              name: intl.formatMessage({ id: 'menu.protect.archive' }),
            },
            {
              path: '/protect/knowledge', //中国长臂猿
              name: intl.formatMessage({ id: 'menu.protect.knowledge' }),
            },
          ],
        },
        {
          path: '/programs',
          name: intl.formatMessage({ id: 'menu.programs' }),
          routes: [
            {
              path: '/programs/overview',
              name: intl.formatMessage({ id: 'menu.programs.overview' }),
            },
            {
              path: '/programs/investigation',
              name: intl.formatMessage({ id: 'menu.programs.investigation' }),
            },
            {
              path: '/programs/community',
              name: intl.formatMessage({ id: 'menu.programs.community' }),
            },
            {
              path: '/programs/public',
              name: intl.formatMessage({ id: 'menu.programs.public' }),
            },
          ],
        },
        {
          path: '/us/overview',
          name: intl.formatMessage({ id: 'menu.us.overview' }),
        },
        {
          path: '/support',
          name: intl.formatMessage({ id: 'menu.support' }),
          routes: [
            {
              path: '/support/month',
              name: intl.formatMessage({ id: 'menu.support.month' }),
            },
          ],
        },
      ],
    },
  };

  const socialMedia = [
    {
      key: 'bilibili',
      icon: data.s1,
      url: 'https://b23.tv/bVXLkrZ',
    },
    {
      key: 'xhs',
      icon: data.s2,
      url:
        'https://www.xiaohongshu.com/user/profile/60cc71a4000000002002426f?xsec_token=YBYweue-FokO75WBpRSTWm69O6Mc1iIAItOFgBYxyF6Lc%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=60cc71a4000000002002426f&apptime=1749802513&share_id=76717db7e87f4f21839353f1e413726e&share_channel=copy_lin',
    },
    {
      key: 'wechat',
      icon: data.s3,
      url: 'https://mp.weixin.qq.com/s/tcVLbmmw3iV0eVbP9A0KGw',
    },
    {
      key: 'weibo',
      icon: data.s4,
      url: 'https://weibo.com/u/5823202811',
    },
  ];
  return (
    <LoadingProvider>
      <NavigationLoadingHandler />
      <ProLayout
        {...props}
        {...routesProps}
        layout="topmenu"
        navTheme="light"
        fixedHeader={true}
        title="云山保护"
        logo={logo}
        onMenuHeaderClick={() => history.push('/')}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <Link
            to={item.path || '/'}
            onClick={() => {
              setPathname(item.path || '/');
            }}
          >
            {dom}
          </Link>
        )}
        menuHeaderRender={(logo, title) => (
          <Link
            to="/"
            onClick={() => {
              setPathname('/');
            }}
          >
            <div className="logo-container">{logo}</div>
          </Link>
        )}
        rightContentRender={() => (
          <Button
            onClick={changeLocales}
            type="dashed"
            style={{ marginRight: '1rem' }}
          >
            {localesBtn()}
          </Button>
        )}
        footerRender={() => {
          return (
            <div className="section-footer">
              <div className="footer_left">
                <div className="follow">
                  <h4>{intl.formatMessage({ id: 'footer.follow' })}</h4>
                </div>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {socialMedia.map(item => (
                    <Grid item key={item.key}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="social-icon"
                          src={item.icon}
                          alt={item.key}
                        />
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </div>

              <div className="footer_right">
                <div className="contact">
                  <h4 style={{ textAlign: 'center' }}>
                    {intl.formatMessage({ id: 'footer.contact' })}
                  </h4>
                  <p>{intl.formatMessage({ id: 'footer.address' })}</p>
                  <p>{intl.formatMessage({ id: 'footer.tel' })}</p>
                  <p>{intl.formatMessage({ id: 'footer.site' })}</p>
                  <p>{intl.formatMessage({ id: 'footer.email' })}</p>
                </div>
              </div>
            </div>
          );
        }}
      >
        {props.children}
        <BasicAnchor></BasicAnchor>
      </ProLayout>
      <GlobalLoading />
    </LoadingProvider>
  );
};

export default BasicLayout;
