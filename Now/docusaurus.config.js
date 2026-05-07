// @ts-check// type annotations allow type checking and IDEs autocompletion

const {themes} = require("prism-react-renderer")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prasanta Mohanty",
  tagline: "AI • Engineering Leadership • Platforms • Data •  API Middleware",
  favicon: "img/favicon.ico",

  // Your GitHub Pages URL (user site) + project baseUrl (/Now/)
  url: "https://prasantmohanty.github.io",
  baseUrl: "/Now/",

  // GitHub Pages deployment config
  organizationName: "prasantmohanty",
  projectName: "Now",

  // Useful when publishing as a project site under /Now/
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Internationalization (keep simple)
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Presets: classic gives blog + docs + theme
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        //docs: false, // we’ll use standalone pages (like Isaac) instead of docs sidebar
	docs:{
	 routeBasePath: "docs",
	 sidebarPath: require.resolve("./sidebars.js"),
	},
        blog: {
          routeBasePath: "blog",
          showReadingTime: true,
          blogTitle: "Blog",
          blogDescription: "Notes on AI, engineering leadership, and platform building.",
          postsPerPage: 10,

          // Blog feeds (RSS/Atom/JSON) - similar capability to Isaac’s "Blog Feeds"
          feedOptions: {
            type: "all", // generates rss.xml, atom.xml, and json feeds
            title: "Prasanta Mohanty — Blog",
            description: "Blog feed: AI, platforms, security, and engineering leadership.",
            copyright: `Copyright © ${new Date().getFullYear()} Prasanta Mohanty.`,
          },

          // Edit URL for blog posts
          editUrl: "https://github.com/prasantmohanty/Now/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Metadata for SEO
      metadata: [
        { name: "keywords", content: "AI, Engineering Leadership, Platform Engineering, Security, VOIS" },
      ],

      navbar: {
        title: "Prasanta Mohanty",
        logo: {
          alt: "Prasanta Mohanty",
          src: "img/logo.svg",
        },
        items: [
          { to: "/", label: "Home", position: "left" },

          // Isaac-like top-level sections (implemented as pages)
          { to: "/talks", label: "Talks", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/consulting", label: "Consulting", position: "left" },

          // Social links (right side)
          {
            href: "https://github.com/prasantmohanty",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/prasanta2008/",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://medium.com/@prasanta.mohanty",
            label: "Medium",
            position: "right",
          },
        ],
      },

      footer: {
        style: "light",     
        copyright: `Copyright © ${new Date().getFullYear()} Prasanta Mohanty.`,
      },

      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ["bash", "yaml", "java", "python"],
      },

      // Optional: better UX
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;

