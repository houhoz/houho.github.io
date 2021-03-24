/*
 * @Author: your name
 * @Date: 2021-03-24 12:59:57
 * @LastEditTime: 2021-03-24 13:31:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myblog/docs/.vuepress/config.js
 */
module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base: '/',
  dest: 'dist',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'Foo',
        link: '/foo/',
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      '/bar/README.md',
    ],
  },
}