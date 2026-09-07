<script lang="ts" setup>
import BlogHero from "@theme-hope/components/blog/BlogHero.js"
import InfoPanel from "@theme-hope/components/blog/InfoPanel.js"
import ProjectPanel from "@theme-hope/components/blog/ProjectPanel.js"
import Layout from "@theme-hope/layouts/base/Layout.js"
import { DropTransition } from "vuepress-theme-hope/client"
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js"
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js"
import { Content as MarkdownContent } from "vuepress/client"

import friends from "../friends"
</script>

<template>
  <Layout>
    <div class="vp-page vp-blog">
      <BlogHero>
        <template #heroInfo="{ _tagline, _isFullScreen, text }">
          <HitokotoBlogHero v-if="text" :text="text" />
        </template>
        <template #heroBg>
          <BingHeroBackground />
        </template>
      </BlogHero>
      <div class="blog-page-wrapper">
        <main id="main-content" class="vp-blog-main friends round-avatar">
          <DropTransition appear :delay="0.16">
            <div class="theme-hope-content">
              <ProjectPanel :items="friends" />
            </div>
          </DropTransition>
          <DropTransition appear :delay="0.28">
            <MarkdownContent />
          </DropTransition>
        </main>

        <DropTransition appear :delay="0.4">
          <InfoPanel />
        </DropTransition>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
main.friends.round-avatar {
  .vp-project-card {
    img.vp-project-icon {
      border-radius: 9999px;
      height: 2em;
    }
    width: calc(50% - 40px);

    @media (max-width: 959px) {
      width: 100%
    }
  }
}
</style>
