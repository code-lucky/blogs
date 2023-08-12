export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"Banner\",\"Blog\",\"MdContent\"],\"banner\":{\"heroText\":\"LuckyCode\",\"tagline\":\"用于记录日常记录日常开发发现的问题及记录新知识的学习\",\"heroImage\":\"\",\"heroImageStyle\":{\"maxWidth\":\"200px\",\"margin\":\"0 auto 2rem\"},\"bgImage\":\"/bg.svg\",\"bgImageStyle\":{\"height\":\"70vh\"}},\"blog\":{\"socialLinks\":[{\"icon\":\"BrandGithub\",\"link\":\"https://github.com/recoluan\"}]}},\"headers\":[],\"git\":{\"createdTime\":1691851733000,\"updatedTime\":1691858108000,\"contributors\":[{\"name\":\"code-lucky\",\"email\":\"2924249993@qq.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
