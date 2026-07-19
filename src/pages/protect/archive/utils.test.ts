import archiveData from "../../../data/archive";
import reportStructure from "../../../data/reportStructure";
import timelineStructure from "../../../data/timelineStructure";
import { archiveAudioUrls, normalizeArchiveId } from "./utils";
import { describe, expect, it } from "vitest";

describe("normalizeArchiveId", () => {
  it.each([
    ["0", 0],
    ["3", 3],
    ["6", 6],
  ])("accepts archive id %s", (value, expected) => {
    expect(normalizeArchiveId(value, archiveData.length)).toBe(expected);
  });

  it.each([undefined, null, "", "-1", "7", "1.2", "gibbon"])(
    "falls back to the first archive for %s",
    (value) => {
      expect(normalizeArchiveId(value, archiveData.length)).toBe(0);
    },
  );
});

describe("content data integrity", () => {
  it("keeps one audio URL and valid images for every archive", () => {
    expect(archiveAudioUrls).toHaveLength(archiveData.length);
    archiveData.forEach((item, index) => {
      expect(item.key).toBe(index);
      expect(item.name).toBeTruthy();
      expect(item.images.length).toBeGreaterThan(0);
      item.images.forEach((image) => expect(image).toMatch(/^https:\/\//));
    });
  });

  it("keeps report downloads complete and unique", () => {
    const downloads = reportStructure.map((item) => item.down);
    reportStructure.forEach((item) => {
      expect(item.src).toMatch(/^https:\/\//);
      expect(item.href).toMatch(/^https:\/\//);
      expect(item.down).toBeTruthy();
    });
    expect(new Set(downloads).size).toBe(downloads.length);
  });

  it("keeps timeline translation keys unique", () => {
    const keys = timelineStructure.map((item) => item.key);
    expect(new Set(keys).size).toBe(keys.length);
    timelineStructure.forEach((item) => {
      expect(item.time).toBeTruthy();
      expect(item.key).toMatch(/^timeline\./);
    });
  });
});
