import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'jingwei',
    logo: '/public/favicon.jpeg',
    footer: '<a href="https://beian.miit.gov.cn/">闽ICP备2022004009号-1</a>',
    socialLinks: {
      github: 'https://github.com/ZheyangXu/jingwei'
    }
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
    { id: 'Fr', name: 'Fr'},
  ],
});
