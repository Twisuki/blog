import {sidebar} from "vuepress-theme-hope";

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
					children: "structure"
				},
				{
					text: "学习",
					icon: "pen-to-square",
					prefix: "study/",
					collapsible: true,
					children: "structure"
				},
				{
					text: "生活",
					icon: "hugeicons:bow-tie",
					prefix: "life/",
					collapsible: true,
					children: "structure"
				},
				{
					text: "其他",
					icon: "fa6-brands:markdown",
					prefix: "other/",
					collapsible: true,
					children: "structure"
				}
			],
		},
		{
			text: "工具 kites",
			icon: "gears",
			prefix: "kits/src/",
			children: "structure",
		},
		{
			text: "项目 projects",
			icon: "star",
			collapsible: true,
			expanded: true,
			children: [
				{
					text: "弦月档案",
					icon: "link",
					link: "https://twis.uk/yisibite",
				},
				{
					text: "线代笔记",
					icon: "link",
					link: "https://twis.uk/Notes-on-Linear-Algebra"
				}
			],
		}
	],
});
