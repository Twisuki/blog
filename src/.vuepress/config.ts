import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "zh-CN",
	title: "Twisuki",
	description: "TwisBlog, Twisuki乱七八糟的Blog",

	theme,

	// 和 PWA 一起启用
	// shouldPrefetch: false,
});
