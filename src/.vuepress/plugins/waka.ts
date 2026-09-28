import type { Plugin } from "vuepress"
import type { App } from "vuepress/core"
import { writeFileSync } from "node:fs"
import { path } from "vuepress/utils"

const TIME_WEEK = /<!--WAKA_ORIGIN_TIME_WEEK:(\d+(?:\.\d+)?)-->/
const TIME_ALL = /<!--WAKA_ORIGIN_TIME_ALL:(\d+(?:\.\d+)?)-->/
const LINES_WEEK = /<!--WAKA_ORIGIN_LINES_WEEK:(\d+)-->/
const LINES_ALL = /<!--WAKA_ORIGIN_LINES_ALL:(\d+)-->/
const UPDATE_TIME = /Last Updated on (.*?) UTC/

function matchContent(content: string, regex: RegExp): string | null {
  const raw = content.match(regex)?.[1]
  if (raw === undefined) {
    return null
  }
  return raw
}

function parseNumber(content: string, regex: RegExp): number | null {
  const raw = matchContent(content, regex)
  const value = Number(raw)
  if (!Number.isFinite(value)) {
    return null
  }

  return value
}

export const waka: Plugin = {
  name: "vuepress-plugin-twis-waka",

  onGenerated(app: App): void {
    const intro = app.pages.find(page => page.path === "/intro.html")

    if (!intro)
      return

    const content = intro.content
    const data = {
      all: {
        time: parseNumber(content, TIME_ALL),
        lines: parseNumber(content, LINES_ALL),
      },
      week: {
        time: parseNumber(content, TIME_WEEK),
        lines: parseNumber(content, LINES_WEEK),
      },
      updated: matchContent(content, UPDATE_TIME),
    }

    const output = path.join(app.dir.dest(), "waka.json")
    writeFileSync(output, JSON.stringify(data, null, 2))
  },
}
