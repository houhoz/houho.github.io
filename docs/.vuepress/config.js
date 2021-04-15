/*
 * @Author: your name
 * @Date: 2021-03-24 12:59:57
 * @LastEditTime: 2021-04-15 17:19:45
 * @LastEditors: houyazhao
 * @Description: In User Settings Edit
 * @FilePath: /houhoz.github.io/docs/.vuepress/config.js
 */
module.exports = {
  lang: "zh-CN",
  title: "houhoz",
  description: "houhoz的备忘录",
  themeConfig: {
    logo: "http://houho.site/images/header.jpeg",
    lastUpdated: 'Last Updated', 
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "前端面试",
        link: "/interview/1.html" 
        // children: [
        //   { text: "HTML", link: "/html/" },
        //   { text: "CSS", link: "/css/" },
        //   { text: "JavaScript", link: "/javascript/" },
        // ],
      },
      { text: "关于我", link: "/about/index.html" },
    ],
    sidebar: {
      // '/html/': [
      //   'index.html',
      //   'test.html',
      // ],
      '/interview/': [
        '1.html',
        '2.html',
      ],
    }
  },
};
