/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Guia de Pastas e Processos',
  tagline: 'Guia de Pastas e Processos da Haze Shift',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_haze_favicon.png',
  organizationName: 'haze-shift', // Usually your GitHub org/user name.
  projectName: 'guia', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Guia de Pastas e Processos',
      logo: {
        alt: 'Guia de Pastas e Processos',
        src: 'img/logo.png',
      },
      items: [
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
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://hazeshift.com.br',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/hazeshift/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://hazeshift.com.br/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/haze-shift',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with ❤️ by Haze Shift Team.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
