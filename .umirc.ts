import { defineConfig } from "@umijs/max";

export default defineConfig({
  hash: true,
  antd: {},
  theme: {
    "@primary-color": "#89c24b",
  },
  locale: {
    default: "zh-CN",
    antd: true,
    baseNavigator: true,
    baseSeparator: "-",
    title: true,
  },
  codeSplitting: {
    jsStrategy: "granularChunks",
  },
  routePrefetch: {
    defaultPrefetch: "intent",
    defaultPrefetchTimeout: 80,
  },
  esbuildMinifyIIFE: true,
  favicons: ["/favicon.ico"],
  routes: [
    {
      path: "/",
      component: "@/layouts/basicLayout",
      routes: [
        { path: "/", component: "@/pages/index/index" },
        {
          path: "/protect/archive",
          component: "@/pages/protect/archive/index",
        },
        {
          path: "/protect/knowledge",
          component: "@/pages/protect/knowledge/index",
        },
        {
          path: "/programs/overview",
          component: "@/pages/programs/overview/index",
        },
        {
          path: "/programs/investigation",
          component: "@/pages/programs/investigation/index",
        },
        {
          path: "/programs/community",
          component: "@/pages/programs/community/index",
        },
        {
          path: "/programs/public",
          component: "@/pages/programs/public/index",
        },
        {
          path: "/stories/canteen",
          component: "@/pages/stories/canteen/index",
        },
        {
          path: "/stories/community",
          component: "@/pages/stories/community/index",
        },
        { path: "/us/overview", component: "@/pages/us/overview/index" },
        { path: "/us/will", component: "@/pages/us/will/index" },
        { path: "/us/council", component: "@/pages/us/council/index" },
        { path: "/us/report", component: "@/pages/report/index" },
        { path: "/us/timeline", component: "@/pages/us/timeline/index" },
        { path: "/us/partner", component: "@/pages/us/partner/index" },
        { path: "/us/contact", component: "@/pages/us/contact/index" },
        { path: "/support/month", component: "@/pages/support/donate/index" },
        { path: "/gibbon-archives1.html", redirect: "/protect/archive?id=0" },
        { path: "/gibbon-archives2.html", redirect: "/protect/archive?id=1" },
        { path: "/gibbon-archives3.html", redirect: "/protect/archive?id=2" },
        { path: "/gibbon-archives4.html", redirect: "/protect/archive?id=3" },
        { path: "/gibbon-archives5.html", redirect: "/protect/archive?id=4" },
        { path: "/gibbon-archives6.html", redirect: "/protect/archive?id=5" },
      ],
    },
  ],
});
