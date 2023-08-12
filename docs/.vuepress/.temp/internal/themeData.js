export const themeData = JSON.parse("{\"series\":{\"/vuepress-theme-reco/\":[\"introduce\",\"usage\"]},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"我的\",\"children\":[{\"text\":\"github\",\"link\":\"https://github.com/code-lucky\"},{\"text\":\"稀土掘金\",\"link\":\"https://juejin.cn/user/62036934154445\"}]},{\"text\":\"留言板\",\"link\":\"/1\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
