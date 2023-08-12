export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"Banner\",\"Blog\",\"MdContent\"],\"banner\":{\"heroText\":\"LuckyCode\",\"tagline\":\"\",\"heroImage\":\"\",\"heroImageStyle\":{\"maxWidth\":\"200px\",\"margin\":\"0 auto 2rem\"},\"bgImage\":\"/public/bg.svg\",\"bgImageStyle\":{\"height\":\"450px\"}},\"bannerBrand\":{\"title\":\"vuepress-reco\",\"description\":\"一款简洁的 vuepress 博客 & 文档 主题。\",\"tagline\":\"vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。\",\"buttons\":[{\"text\":\"Guide\",\"link\":\"/docs/guide/introduce\"},{\"text\":\"Default Style\",\"link\":\"/docs/theme/introduce\",\"type\":\"plain\"}],\"socialLinks\":[{\"icon\":\"BrandGithub\",\"link\":\"https://github.com/recoluan\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"BrandGithub\",\"link\":\"https://github.com/recoluan\"}]}},\"headers\":[],\"git\":{\"createdTime\":1691851733000,\"updatedTime\":1691851733000,\"contributors\":[{\"name\":\"code-lucky\",\"email\":\"2924249993@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
