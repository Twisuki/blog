import type { Plugin } from "vuepress"
import type { App, Page } from "vuepress/core"
import { writeFileSync } from "node:fs"
import { getPageExcerpt } from "@vuepress/helper"
import { od } from "@xtwis/ohday"
import { path } from "vuepress/utils"

function isBlog(page: Page): boolean {
  if (page.path === "/" || page.path.includes("/archive/"))
    return false
  return Boolean(page.frontmatter?.date) && Boolean(page.frontmatter?.article !== false)
}

function getSortOrder(a: Page, b: Page): -1 | 1 {
  return od(a.frontmatter.date).ge(b.frontmatter.date) ? -1 : 1
}

function getTags(page: Page): string[] {
  const categories = (page.frontmatter.category as string[] | undefined) ?? []
  const tags = (page.frontmatter.tag as string[] | undefined) ?? []
  return Array.from(new Set([...categories, ...tags]))
}

function getExcerpt(app: App, page: Page): string[] {
  const html = getPageExcerpt(app, page, {})
  return html
    .replace(/<[^>]+>/g, "")
    .split(/\n{2,}/)
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 0)
}

export const blogs: Plugin = {
  name: "vuepress-plugin-twis-blogs",

  onGenerated(app: App): void {
    const blogs = app.pages
      .filter(isBlog)
      .sort(getSortOrder)
      .map(page => ({
        title: page.frontmatter.title,
        path: page.path,
        date: od(page.frontmatter.date).s,
        excerpt: getExcerpt(app, page),
        tags: getTags(page),
      }))

    const output = path.join(app.dir.dest(), "blogs.json")
    writeFileSync(output, JSON.stringify(blogs, null, 2))
  },
}
