import { useEffect } from "react";
import { ConfigProvider, Layout } from "antd";
import MuiGrid from "@mui/material/Grid";
import {
  Outlet,
  getLocale,
  history,
  setLocale,
  useIntl,
  useLocation,
} from "@umijs/max";
import BasicAnchor from "./anchor";
import SiteHeader from "./SiteHeader";
import "./basicLayout.less";
import data from "@/data";
import ProgressiveBackground from "@/components/ProgressiveBackground";
import ProgressiveImage from "@/components/ProgressiveImage";
import MotionDocument from "@/components/motion/MotionDocument";

const { Content, Footer } = Layout;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const socialMedia = [
  { key: "bilibili", icon: data.s1, url: "https://b23.tv/bVXLkrZ" },
  {
    key: "xhs",
    icon: data.s2,
    url: "https://www.xiaohongshu.com/user/profile/60cc71a4000000002002426f?xsec_token=YBYweue-FokO75WBpRSTWm69O6Mc1iIAItOFgBYxyF6Lc%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=60cc71a4000000002002426f&apptime=1749802513&share_id=76717db7e87f4f21839353f1e413726e&share_channel=copy_lin",
  },
  {
    key: "wechat",
    icon: data.s3,
    url: "https://mp.weixin.qq.com/s/tcVLbmmw3iV0eVbP9A0KGw",
  },
  { key: "weibo", icon: data.s4, url: "https://weibo.com/u/5823202811" },
];

const BasicLayout = () => {
  const intl = useIntl();
  const locale = getLocale();
  const location = useLocation();

  const toggleLocale = () => {
    setLocale(locale === "zh-CN" ? "en-US" : "zh-CN");
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#89c24b" } }}>
      <ScrollToTop />
      <Layout className="site-layout">
        <SiteHeader
          locale={locale}
          currentPath={location.pathname}
          translate={(id) => intl.formatMessage({ id })}
          onNavigate={(path) => history.push(path)}
          onToggleLocale={toggleLocale}
        />
        <Content key={location.pathname} className="site-content route-reveal">
          <MotionDocument routeKey={`${location.pathname}${location.search}`} />
          <Outlet />
        </Content>
        <BasicAnchor />
        <Footer className="site-footer-wrapper">
          <ProgressiveBackground
            className="section-footer"
            src={data.background}
          >
            <div className="footer_left">
              <div className="follow">
                <h4>{intl.formatMessage({ id: "footer.follow" })}</h4>
              </div>
              <MuiGrid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                {socialMedia.map((item) => (
                  <MuiGrid item key={item.key}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ProgressiveImage
                        wrapperClassName="social-progressive-media"
                        className="social-icon"
                        src={item.icon}
                        alt={item.key}
                      />
                    </a>
                  </MuiGrid>
                ))}
              </MuiGrid>
            </div>
            <div className="footer_right">
              <div className="contact">
                <h4>{intl.formatMessage({ id: "footer.contact" })}</h4>
                <p>{intl.formatMessage({ id: "footer.address" })}</p>
                <p>{intl.formatMessage({ id: "footer.tel" })}</p>
                <p>{intl.formatMessage({ id: "footer.site" })}</p>
                <p>{intl.formatMessage({ id: "footer.email" })}</p>
              </div>
            </div>
          </ProgressiveBackground>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default BasicLayout;
