---
home: true
modules: # 指定首页展示模块
  - Banner
  - Blog
  - MdContent
banner: # banner 模块的配置
  heroText: LuckyCode
  tagline: ''
  heroImage: ''
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /public/bg.svg
  bgImageStyle:
    height: 450px
bannerBrand: # bannerBrand 模块的配置
  title: vuepress-reco
  description: 一款简洁的 vuepress 博客 & 文档 主题。
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/theme/introduce', type: 'plain' }
  socialLinks: # 社交地址
    - { icon: 'BrandGithub', link: 'https://github.com/recoluan' }
blog: # blog 模块的配置
  socialLinks: # 社交地址
    - { icon: 'BrandGithub', link: 'https://github.com/recoluan' }
---
