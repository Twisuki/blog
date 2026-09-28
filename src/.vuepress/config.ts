import { defineUserConfig } from "vuepress"
import { blogs } from "./blogs.js"
import { llms } from "./llms.js"
import theme from "./theme.js"

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Twisuki",
  description: "TwisBlog, Twisuki乱七八糟的Blog",

  theme,

  plugins: [
    llms,
    blogs,
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
})
