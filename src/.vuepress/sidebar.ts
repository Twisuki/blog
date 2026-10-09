import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    {
      text: "笔记 notes",
      icon: "book",
      prefix: "notes/",
      children: [
        {
          text: "开发",
          icon: "gear",
          prefix: "dev/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "学习",
          icon: "pen-to-square",
          prefix: "study/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "生活",
          icon: "hugeicons:bow-tie",
          prefix: "life/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "其他",
          icon: "fa6-brands:markdown",
          prefix: "other/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "kits/src/",
    {
      text: "项目 projects",
      icon: "star",
      collapsible: true,
      expanded: true,
      children: [
        {
          text: "个人主站",
          icon: "link",
          link: "https://www.twis.uk",
        },
      ],
    },
  ],
  "/notes/other/slime-tech/": [
    {
      text: "笔记 Notes",
      icon: "book",
      link: "/notes/",
    },
    {
      text: "绿萌教程 Slime Tech",
      icon: "lucide:book-open",
      collapsible: true,
      children: "structure",
    },
  ],
})
