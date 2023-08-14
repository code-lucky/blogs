// 在.vuepress文件下的config.js配置以下内容

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

// 头部列表模块归类
export const navbar = [
    { text: '主页', link: '/'},
    {
        text: '我的',
        children: [
            { text: 'github', icon:'icon如需配置请看下面链接，如不需要请去掉此字段', link: 'https://github.com/code-lucky' },
            {text: '稀土掘金',link: 'https://juejin.cn/user/62036934154445',},
        ],
    },
    { text: '留言板', link: '/',},
]
  

export default defineUserConfig({
    title: 'LuckyCode Blog', // 头部左侧title
    theme: recoTheme({
        series: {   // 设置是左侧边栏（sideBar） 还是系列（series）
            '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
        },
        navbar, // 顶部或者左侧导航栏
        author: 'LuckyCode',    // 作者名字
        authorAvatar: '/avatar.jpg'     // 作者头像(静态文件路径 /docs/.vuepress/public)
    })
})