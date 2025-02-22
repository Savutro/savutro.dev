import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Savutro',
  tagline: 'Always seeking for personal growth on my journey to become a better version of myself.',
  favicon: 'img/favicon.ico',
  url: 'https://savutro.dev',
  baseUrl: '/',
  organizationName: 'savutro',
  projectName: 'savutro.dev',
  customFields: {
    domain: 'savutro.dev'
  },
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      de: {
        htmlLang: 'de-CH',
      }
    }
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          //routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "infoBanner",
      content: "Website under construction!",
      backgroundColor: "turquoise",
      textColor: "black",
      isCloseable: false,
    },
    navbar: {
      title: 'savutro.dev',

      hideOnScroll: false,
      logo: {
        alt: 'logo',
        src: 'img/turtle.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'intro',
          label: 'Intro',
        },
        {
          type: 'docSidebar',
          sidebarId: 'devSidebar',
          position: 'left',
          label: 'Dev-Environment',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'learningsSidebar',
          position: 'left',
          label: 'Learnings',
        },
        { to: "/showcasePage", label: "Showcase", position: "right" },
        { to: "/cv", label: "CV", position: "right" },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/savutro',
          position: 'right',
          html: '<i class="fab fa-github fa-xl"></i>'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Legal notice / Impressum',
              to: '/docs/intro',
            },
            {
              label: 'Sources',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Follow me here',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://google.com',
            },
            {
              label: 'Discord',
              href: 'https://google.com',
            },
            {
              label: 'Twitter',
              href: 'https://google.com',
            },
          ],
        },
        {
          title: 'Check this out!',
          items: [
            {
              label: 'eza',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} savutro.dev, Built by Fabian Afonso with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    scripts: [
      {
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        defer: true,
        "data-cf-beacon": `{"token": "${process.env.CF_ANALYTICS_BEACON}"}`,
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
