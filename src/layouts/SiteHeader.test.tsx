import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SiteHeader, {
  createNavigationItems,
  resolveSelectedKey,
} from "./SiteHeader";

const translate = (id: string) => id;

describe("SiteHeader", () => {
  it("preserves every public navigation target", () => {
    const collect = (
      list: ReturnType<typeof createNavigationItems>,
    ): string[] =>
      (list ?? []).flatMap((item) => {
        if (!item || "type" in item) return [];
        if ("children" in item && item.children) return collect(item.children);
        return typeof item.key === "string" ? [item.key] : [];
      });
    const keys = collect(createNavigationItems(translate));

    expect(keys).toEqual([
      "/protect/china",
      "/protect/archive",
      "/protect/archive/hoolock-tianxing",
      "/protect/archive/nomascus-hainanus",
      "/protect/archive/nomascus-nasutus",
      "/protect/archive/nomascus-concolor",
      "/protect/archive/nomascus-leucogenys",
      "/protect/archive/hylobates-lar",
      "/protect/archive/hoolock-hoolock",
      "/protect/knowledge",
      "/programs/overview",
      "/programs/investigation",
      "/programs/community",
      "/programs/public",
      "/us/overview",
      "/support/month",
    ]);
  });

  it("supports home navigation, language switching, and the mobile drawer", () => {
    const onNavigate = vi.fn();
    const onToggleLocale = vi.fn();
    render(
      <SiteHeader
        locale="zh-CN"
        currentPath="/programs/overview"
        translate={translate}
        onNavigate={onNavigate}
        onToggleLocale={onToggleLocale}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "menu.home" }));
    expect(onNavigate).toHaveBeenCalledWith("/");

    fireEvent.click(screen.getByRole("button", { name: "EN" }));
    expect(onToggleLocale).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByRole("button", { name: "打开导航菜单" }));
    expect(screen.getByText("menu.title")).toBeInTheDocument();
  });

  it("selects the closest menu entry for the current path", () => {
    const items = createNavigationItems(translate);
    expect(resolveSelectedKey(items, "/protect/archive")).toBe(
      "/protect/archive",
    );
    expect(resolveSelectedKey(items, "/protect/archive/hoolock-tianxing")).toBe(
      "/protect/archive/hoolock-tianxing",
    );
    expect(resolveSelectedKey(items, "/programs/overview/detail")).toBe(
      "/programs/overview",
    );
    expect(resolveSelectedKey(items, "/us/timeline")).toBe("/us/timeline");
  });
});
