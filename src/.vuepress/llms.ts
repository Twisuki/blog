import { llmsPlugin } from "@vuepress/plugin-llms"

export const llms = llmsPlugin({
  llmsTxt: true,
  llmsFullTxt: false,
  llmsPageTxt: true,
  stripHTML: true,
})
