import antfu from "@antfu/eslint-config"

export default antfu(
  {
    type: "lib",
    typescript: true,
    stylistic: {
      quotes: "double",
    },
    ignores: [
      "src/.vuepress/.cache",
      "src/.vuepress/.temp",
      "src/.vuepress/dist",
      "**/*.md",
      "**/*.md/**",
    ],
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/no-unused-vars": ["error", { ignorePattern: "^_" }],
    },
  },
  {
    files: ["**/*.md", "**/*.md/**"],
    rules: {
      "eol-last": "error",
    },
  },
)
