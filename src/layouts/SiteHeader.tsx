import { useState } from "react";
import { Button, Drawer, Grid, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../public/logo.png";

interface SiteHeaderProps {
  locale: string;
  translate: (id: string) => string;
  onNavigate: (path: string) => void;
  onToggleLocale: () => void;
}

export const createNavigationItems = (
  translate: SiteHeaderProps["translate"],
): MenuProps["items"] => [
  {
    key: "protect",
    label: translate("menu.protect"),
    children: [
      { key: "/protect/archive", label: translate("menu.protect.archive") },
      {
        key: "/protect/knowledge",
        label: translate("menu.protect.knowledge"),
      },
    ],
  },
  {
    key: "programs",
    label: translate("menu.programs"),
    children: [
      {
        key: "/programs/overview",
        label: translate("menu.programs.overview"),
      },
      {
        key: "/programs/investigation",
        label: translate("menu.programs.investigation"),
      },
      {
        key: "/programs/community",
        label: translate("menu.programs.community"),
      },
      { key: "/programs/public", label: translate("menu.programs.public") },
    ],
  },
  { key: "/us/overview", label: translate("menu.us.overview") },
  {
    key: "support",
    label: translate("menu.support"),
    children: [
      { key: "/support/month", label: translate("menu.support.month") },
    ],
  },
];

const SiteHeader = ({
  locale,
  translate,
  onNavigate,
  onToggleLocale,
}: SiteHeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = Grid.useBreakpoint();
  const isDesktop = screens.md;
  const items = createNavigationItems(translate);

  const navigate: MenuProps["onClick"] = ({ key }) => {
    onNavigate(key);
    setDrawerOpen(false);
  };

  return (
    <Layout.Header className="site-header">
      <button
        type="button"
        className="site-logo-button"
        onClick={() => onNavigate("/")}
        aria-label={translate("menu.home")}
      >
        <img src={logo} alt={translate("menu.title")} />
      </button>
      {isDesktop ? (
        <Menu
          className="site-menu"
          mode="horizontal"
          items={items}
          onClick={navigate}
        />
      ) : (
        <Button
          aria-label="打开导航菜单"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
        />
      )}
      <Button type="dashed" onClick={onToggleLocale}>
        {locale === "zh-CN" ? "EN" : "中"}
      </Button>
      <Drawer
        title={translate("menu.title")}
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Menu mode="inline" items={items} onClick={navigate} />
      </Drawer>
    </Layout.Header>
  );
};

export default SiteHeader;
