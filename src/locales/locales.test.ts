import { describe, expect, it } from "vitest";
import enUS from "./en-US";
import zhCN from "./zh-CN";

describe("locales", () => {
  it("keeps Chinese and English message keys symmetrical", () => {
    expect(Object.keys(enUS).sort()).toEqual(Object.keys(zhCN).sort());
  });

  it("includes navigation and loading messages", () => {
    expect(zhCN["menu.home"]).toBeTruthy();
    expect(enUS["menu.home"]).toBeTruthy();
    expect(zhCN["loading.tip"]).toBeTruthy();
    expect(enUS["loading.tip"]).toBeTruthy();
  });
});
