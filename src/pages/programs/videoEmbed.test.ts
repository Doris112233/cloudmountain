import { getBilibiliEmbedUrl } from "./videoEmbed";
import { describe, expect, it } from "vitest";

describe("getBilibiliEmbedUrl", () => {
  it("converts a Bilibili page URL to the embedded player", () => {
    expect(
      getBilibiliEmbedUrl("https://www.bilibili.com/video/BV1Zq4y1B7cH"),
    ).toBe(
      "https://player.bilibili.com/player.html?bvid=BV1Zq4y1B7cH&high_quality=1&autoplay=0",
    );
  });

  it("returns a non-Bilibili URL unchanged", () => {
    const url = "https://example.com/video";
    expect(getBilibiliEmbedUrl(url)).toBe(url);
  });
});
