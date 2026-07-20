import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SiteHeader, { createNavigationItems } from "./SiteHeader";

const translate = (id: string) => id;

describe("SiteHeader", () => {
  it("preserves every public navigation target", () => {
    const items = createNavigationItems(translate) ?? [];
    const keys = items.flatMap((item) => {
      if (!item || "type" in item) return [];
      if ("children" in item && item.children) {
        return item.children.flatMap((child) =>
          child && "key" in child ? [child.key] : [],
        );
      }
      return "key" in item ? [item.key] : [];
    });

    expect(keys).toEqual([
      "/protect/archive",
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
});
