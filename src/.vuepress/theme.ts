import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
	{
		hostname: "https://twisuki.github.io",

		author: {
			name: "Twisuki",
			url: "https://twisuki.github.io",
		},

		logo: "avatar.png",

		repo: "Twisuki/Twisuki.github.io",

		docsDir: "src",

		// 导航栏
		navbar,

		// 侧边栏
		sidebar,

		sidebarSorter: ["readme", "order", "date", "filename"],

		// 页脚
		footer: "Twisuki, 苏阳 ♡",
		displayFooter: true,

		// 博客相关
		blog: {
			description: "一只喜欢到处贴贴的小猫娘",
			intro: "/intro.html",
			medias: {
				BiliBili: "https://space.bilibili.com",
				Email: "mailto:suyang233@hotmail.com",
				GitHub: "https://github.com/Twisuki",
				Gmail: "mailto:twisuki@gmail.com",
				Steam: "https://steamcommunity.com/profiles/76561199387291268/",
				Twitter: "https://x.com/suyang_233",
				"163Music": "https://y.music.163.com/m/user?id=6428013647",
			},
		},

		// 加密配置
		encrypt: {
			config: {
				"/demo/encrypt.html": {
					hint: "Password: 1234",
					password: "1234",
				},
			},
		},

		pageInfo: [
			"Author",
			"Date",
			"Word",
			"ReadingTime",
			"Tag",
		],

		// toc: false,

		darkmode: "toggle",

		// 多语言配置
		metaLocales: {
			editLink: "Pull Requset 大欢迎(?) ♡",
		},

		// 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
		// hotReload: true,

		// 此处开启了很多功能用于演示，你应仅保留用到的功能。
		markdown: {
			align: true,
			attrs: true,
			codeTabs: true,
			component: true,
			demo: true,
			figure: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			mark: true,
			plantuml: true,
			spoiler: true,
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({tag}) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: {type: "tip"},
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			tasklist: true,
			vPre: true,

			// 取消注释它们如果你需要 TeX 支持
			math: {
				// 启用前安装 katex
				type: "katex",
				output: "html"
				// 或者安装 mathjax-full
				// type: "mathjax",
			},

			// 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
			// revealjs: {
			//   plugins: ["highlight", "math", "search", "notes", "zoom"],
			// },

			// 在启用之前安装 chart.js
			// chartjs: true,

			// insert component easily

			// 在启用之前安装 echarts
			// echarts: true,

			// 在启用之前安装 flowchart.ts
			// flowchart: true,

			// 在启用之前安装 mermaid
			// mermaid: true,

			// playground: {
			//   presets: ["ts", "vue"],
			// },

			// 在启用之前安装 @vue/repl
			// vuePlayground: true,

			// 在启用之前安装 sandpack-vue3
			// sandpack: true,
		},

		// 在这里配置主题提供的插件
		plugins: {
			blog: true,

			// 启用之前需安装 @waline/client
			// 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
			// comment: {
			//   provider: "Waline",
			//   serverURL: "https://waline-comment.vuejs.press",
			// },

			components: {
				components: ["Badge", "VPCard", "Share"],
			},

			icon: {
				prefix: "fa6-solid:",
			},

			docsearch: {
				appId: "GXV92NZXHL",
				apiKey: "38c1152c28dfcb04d64d5f3cfbfc1808",
				indexName: "twis",
			},

			// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
			// pwa: {
			//   favicon: "/favicon.ico",
			//   cacheHTML: true,
			//   cacheImage: true,
			//   appendBase: true,
			//   apple: {
			//     icon: "/assets/icon/apple-icon-152.png",
			//     statusBarColor: "black",
			//   },
			//   msTile: {
			//     image: "/assets/icon/ms-icon-144.png",
			//     color: "#ffffff",
			//   },
			//   manifest: {
			//     icons: [
			//       {
			//         src: "/assets/icon/chrome-mask-512.png",
			//         sizes: "512x512",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-mask-192.png",
			//         sizes: "192x192",
			//         purpose: "maskable",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-512.png",
			//         sizes: "512x512",
			//         type: "image/png",
			//       },
			//       {
			//         src: "/assets/icon/chrome-192.png",
			//         sizes: "192x192",
			//         type: "image/png",
			//       },
			//     ],
			//     shortcuts: [
			//       {
			//         name: "Demo",
			//         short_name: "Demo",
			//         url: "/demo/",
			//         icons: [
			//           {
			//             src: "/assets/icon/guide-maskable.png",
			//             sizes: "192x192",
			//             purpose: "maskable",
			//             type: "image/png",
			//           },
			//         ],
			//       },
			//     ],
			//   },
			// },
		},
	},
	{
		custom: true,
	},
);
