import { defineUserConfig } from "vuepress"
import { blogs } from "./plugins/blogs.js"
import { friends } from "./plugins/friends.js"
import { llms } from "./plugins/llms.js"
import { waka } from "./plugins/waka.js"
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
    waka,
    friends,
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
})
