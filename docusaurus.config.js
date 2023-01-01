// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Kershner Endeavors",
    tagline: "Software Consulting",
    url: "https://dkershner.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "dkershner6", // Usually your GitHub org/user name.
    projectName: "dkershner.com", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/resources",
                    sidebarPath: require.resolve("./sidebars.js"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Kershner Endeavors",
                logo: {
                    alt: "Kershner Endeavors",
                    src: "img/logo.png",
                },
                items: [
                    { to: "/", label: "Services", position: "left" },
                    {
                        to: "/docs",
                        label: "Software Resources & Tips",
                        position: "left",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "More",
                        items: [
                            {
                                label: "Software Resources & Tips",
                                to: "/docs",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/dkershner6",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Kershner Endeavors LLC. All rights reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    plugins: [
        [
            "@cmfcmf/docusaurus-search-local",
            {
                indexBlog: false,
                indexDocs: true,
            },
        ],
    ],
};

module.exports = config;
