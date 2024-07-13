import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '福建省 Minecraft 高校联盟',
  tagline: '闽高联	',
  favicon: 'img/favicon.ico',

  // 设置你的网站的生产 URL
  url: 'https://your-docusaurus-site.example.com',
  // 设置你的网站的 /<baseUrl>/ 路径名
  // 对于 GitHub 页面部署，通常是 '/<projectName>/'
  baseUrl: '/',

  // GitHub 页面部署配置
  // 如果你不使用 GitHub 页面，可以不需要这些配置
  organizationName: 'facebook', // 通常是你的 GitHub 组织/用户名
  projectName: 'docusaurus', // 通常是你的仓库名称

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使你不使用国际化，你也可以使用这个字段来设置有用的元数据，比如 html lang。
  // 例如，如果你的网站是中文的，你可能想将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将此更改为你的仓库
          // 删除此项以移除“编辑此页面”链接
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // 请将此更改为你的仓库
          // 删除此项以移除“编辑此页面”链接
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 替换为你的项目的社交卡片
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MUA 闽高联',
      logo: {
        alt: '我的网站标志',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '教程',
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} 我的项目，保留所有权利。由 Docusaurus 构建。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
