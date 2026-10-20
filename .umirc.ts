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
  favicons: ["/favicon.ico?v=20260721"],
  routes: [
    {
      path: "/",
      component: "@/layouts/basicLayout",
      routes: [
        { path: "/", component: "@/pages/index/index" },
        {
          path: "/protect/china",
          component: "@/pages/protect/china/index",
        },
        {
          path: "/protect/archive",
          component: "@/pages/protect/archive/index",
        },
        {
          path: "/protect/archive/:species",
          component: "@/pages/protect/archive/species",
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
        { path: "/us", redirect: "/us/overview" },
        { path: "/us/overview", component: "@/pages/us/overview/index" },
        { path: "/us/:section", component: "@/pages/us/section" },
        { path: "/support/month", component: "@/pages/support/donate/index" },
        {
          path: "/gibbon-archives1.html",
          redirect: "/protect/archive/hoolock-tianxing",
        },
        {
          path: "/gibbon-archives2.html",
          redirect: "/protect/archive/nomascus-hainanus",
        },
        {
          path: "/gibbon-archives3.html",
          redirect: "/protect/archive/nomascus-nasutus",
        },
        {
          path: "/gibbon-archives4.html",
          redirect: "/protect/archive/nomascus-concolor",
        },
        {
          path: "/gibbon-archives5.html",
          redirect: "/protect/archive/nomascus-leucogenys",
        },
        {
          path: "/gibbon-archives6.html",
          redirect: "/protect/archive/hylobates-lar",
        },
      ],
    },
  ],
});
