import homeEn from "../pages/index/locales/en-US";
import homeZh from "../pages/index/locales/zh-CN";
import canteenEn from "../pages/stories/canteen/locales/en-US";
import canteenZh from "../pages/stories/canteen/locales/zh-CN";
import communityEn from "../pages/stories/community/locales/en-US";
import communityZh from "../pages/stories/community/locales/zh-CN";
import timelineEn from "../pages/us/timeline/locales/en-US";
import timelineZh from "../pages/us/timeline/locales/zh-CN";

type Messages = Record<string, string>;

const rawEn: Messages = {
  ...homeEn,
  ...canteenEn,
  ...communityEn,
  ...timelineEn,
};

const rawZh: Messages = {
  ...homeZh,
  ...canteenZh,
  ...communityZh,
  ...timelineZh,
};

const allKeys = new Set([...Object.keys(rawEn), ...Object.keys(rawZh)]);

const normalize = (messages: Messages): Messages =>
  Object.fromEntries(
    [...allKeys].map((key) => [key, messages[key] ?? key]),
  );

export const enUS = normalize(rawEn);
export const zhCN = normalize(rawZh);
