import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "zh-CN",
	title: "Twisuki",
	description: "Twisuki的个人主页",

	theme,

	// 和 PWA 一起启用
	// shouldPrefetch: false,
	head: [
		[
			"link",
			{
				href: "https://unpkg.com/",
				rel: "preconnect",
				crossorigin: "",
			},
		],
		[
			"link",
			{
				href: "https://unpkg.com/@agxcoy/hytangmeiren-vp-hope@latest/style.css",
				rel: "stylesheet",
			},
		],
	],
});
