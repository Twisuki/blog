import type { Plugin } from "vuepress"
import type { App } from "vuepress/core"
import { writeFileSync } from "node:fs"
import { path } from "vuepress/utils"
import data from "../friends.js"

export const friends: Plugin = {
  name: "vuepress-plugin-twis-friends",

  onGenerated(app: App): void {
    const output = path.join(app.dir.dest(), "friends.json")
    writeFileSync(output, JSON.stringify(data, null, 2))
  },
}
