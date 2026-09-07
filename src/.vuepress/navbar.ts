import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  "intro",
  "/notes/",
  "/kits/src/",
  "friend",
  {
    text: "项目 projects",
    icon: "star",
    children: [
      {
        text: "个人主站",
        icon: "link",
        link: "https://www.twis.uk",
      },
    ],
  },
])
