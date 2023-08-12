import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export const navbar = [
    { text: '主页', link: '/'},
    {
        text: '我的',
        children: [
            { text: 'github', link: 'https://github.com/code-lucky' },
            {text: '稀土掘金',link: 'https://juejin.cn/user/62036934154445',},
        ],
    },
    { text: '留言板', link: '/1',},
]
  

export default defineUserConfig({
    title: 'LuckyCode Blogs',
    theme: recoTheme({
        series: {
            '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
        },
        navbar
    })
})