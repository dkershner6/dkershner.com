// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

const SITE_TITLE = "Kershner Endeavors";
const BASE_RESOURCES_PATH = "/resources";

const RESOURCES_ITEMS = [
    {
        to: BASE_RESOURCES_PATH,
        label: "Overview",
        activeBaseRegex: `${BASE_RESOURCES_PATH}/?$`,
    },
    {
        to: `${BASE_RESOURCES_PATH}/learning`,
        label: "Software Learning Resources",
    },
    {
        to: `${BASE_RESOURCES_PATH}/tags`,
        label: "All Tags",
    },
];

const OPEN_SOURCE_GITHUB_ACTIONS_ITEMS = [
    {
        to: "https://github.com/marketplace/actions/aws-ssm-parameter-store-getparameters-action",
        label: "AWS SSM Parameter Store GetParameters Action",
    },
    {
        to: "https://github.com/marketplace/actions/get-pull-request",
        label: "Get Pull Request Action",
    },
    {
        to: "https://github.com/marketplace/actions/gitignore-parser",
        label: "Gitignore Parser Action",
    },
    {
        to: "https://github.com/marketplace/actions/jest-coverage-commenter",
        label: "Jest Coverage Commenter Action",
    },
    {
        to: "https://github.com/marketplace/actions/node-npm-workspace-detector-action",
        label: "Node NPM Workspace Detector Action",
    },
    {
        to: "https://github.com/marketplace/actions/post-api-call-action",
        label: "Post API Call Action",
    },
    {
        to: "https://github.com/marketplace/actions/comment-reaction",
        label: "Issue/Pull Request Comment Reaction Action",
    },
    {
        to: "https://github.com/marketplace/actions/switch-case-action",
        label: "Switch Case Action",
    },
    {
        to: "https://github.com/marketplace/actions/use-npm-token",
        label: "Use NPM Token Action",
    },
    {
        to: "https://github.com/marketplace/actions/vercel-set-environment-variables",
        label: "Vercel Set Environment Variables Action",
    },
];

const NODE_REACT_OPEN_SOURCE_ITEMS = [
    {
        to: "https://github.com/dkershner6/amplify-authenticator-react-custom",
        label: "Amplify Authenticator React Custom",
    },
    {
        to: "https://github.com/dkershner6/fetch-from-script-tag",
        label: "Fetch From Script Tag",
    },
    {
        to: "https://github.com/dkershner6/react-hooks-firebase-auth",
        label: "React Hooks Firebase Auth",
    },
    {
        to: "https://github.com/dkershner6/sequential-async-foreach",
        label: "Sequential Async ForEach",
    },
    {
        to: "https://github.com/dkershner6/shopify-application-proxy-verification",
        label: "Shopify Application Proxy Verification",
    },
    {
        to: "https://github.com/dkershner6/unstated-next-subscribe",
        label: "Unstated Next Subscribe",
    },
    {
        to: "https://github.com/dkershner6/use-immer-produce",
        label: "Use Immer Produce",
    },
    {
        to: "https://github.com/dkershner6/use-map-as-state",
        label: "Use Map As State",
    },
    {
        to: "https://github.com/dkershner6/use-set-as-state",
        label: "Use Set As State",
    },
    {
        to: "https://github.com/dkershner6/verify-shopify-webhook",
        label: "Verify Shopify Webhook",
    },
];

const BASE_RECIPES_PATH = "/recipes";

const RECIPES_ITEMS = [
    {
        to: BASE_RECIPES_PATH,
        label: "Recipes",
    },
    {
        to: `${BASE_RECIPES_PATH}/tags`,
        label: "Categories / Tags",
    },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: SITE_TITLE,
    tagline: "Software Consulting",
    url: "https://dkershner.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    headTags: [
        {
            tagName: "meta",
            attributes: {
                property: "og:image",
                content: "https://dkershner.com/img/geometric.webp",
            },
        },
    ],

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
                blog: {
                    blogTitle: "Derek Kershner's Recipes",
                    blogDescription: "Derek Kershner's Recipes, generally Keto",
                    blogSidebarCount: 20,
                    routeBasePath: "/recipes",
                    path: "./recipes",
                    showReadingTime: true,
                },
                docs: {
                    routeBasePath: BASE_RESOURCES_PATH.slice(1),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                gtag: {
                    trackingID: "G-FP2E2SXJMK",
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: SITE_TITLE,
                logo: {
                    alt: SITE_TITLE,
                    src: "img/logo.png",
                },
                items: [
                    {
                        label: "Services",
                        to: "/",
                        activeBaseRegex: "/$",
                    },
                    {
                        label: "Software Resources & Tips",
                        position: "left",
                        items: RESOURCES_ITEMS,
                    },
                    {
                        label: "Open Source Github Actions",
                        position: "left",
                        items: OPEN_SOURCE_GITHUB_ACTIONS_ITEMS,
                    },
                    {
                        label: "Open Source Node/React",
                        position: "left",
                        items: NODE_REACT_OPEN_SOURCE_ITEMS,
                    },
                    {
                        label: "Recipes (Like, Food)",
                        position: "left",
                        items: RECIPES_ITEMS,
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Services",
                        items: [
                            {
                                label: "Services",
                                to: "/",
                                activeBaseRegex: "/$",
                            },
                        ],
                    },
                    {
                        title: "Software Resources & Tips",
                        items: RESOURCES_ITEMS,
                    },
                    {
                        title: "Open Source Github Actions",
                        items: OPEN_SOURCE_GITHUB_ACTIONS_ITEMS,
                    },
                    {
                        title: "Open Source Node/React",
                        items: NODE_REACT_OPEN_SOURCE_ITEMS,
                    },
                    {
                        title: "Recipes (Like, Food)",
                        items: RECIPES_ITEMS,
                    },
                    {
                        title: "More",
                        items: [
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

// eslint-disable-next-line no-undef
module.exports = config;
