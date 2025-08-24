import {navbar} from "vuepress-theme-hope";

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
				text: "弦月档案",
				icon: "link",
				link: "https://hxy.twis.uk",
			},
			{
				text: "线代笔记",
				icon: "link",
				link: "https://page.twis.uk/Notes-on-Linear-Algebra",
			},
		]
	}
]);
