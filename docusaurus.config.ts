import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

const darkCodeTheme = themes.dracula;
const lightCodeTheme = themes.github;

const SITE_TITLE = "Derek Kershner";
const SITE_TAGLINE =
    "Founding Software Leader | Cloud Infrastructure Architect | Full-Stack Engineer | DevOps | AI";
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

const OPEN_SOURCE_CDK_CONSTRUCTS_ITEMS = [
    {
        to: "https://constructs.dev/packages/cdk-versioned-stack-manager",
        label: "CDK Versioned Stack Manager",
    },
    {
        to: "https://constructs.dev/packages/cdk-nextjs-export-s3-dynamic-routing",
        label: "CDK NextJS Export S3 Dynamic Routing",
    },
    {
        to: "https://constructs.dev/packages/cdk-cloudfront-associate-alias",
        label: "CDK CloudFront Associate Alias",
    },
    {
        to: "https://constructs.dev/packages/cdk-ssm-secure-iam-access-key",
        label: "CDK SSM Secure IAM Access Key",
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

const RECIPES_ITEMS = [
    {
        label: "All Recipes",
        to: "/recipes",
    },
    {
        label: "By Category / Tag",
        to: "/recipes/tags",
    },
];

const config = {
    title: SITE_TITLE,
    tagline: SITE_TAGLINE,
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
            {
                blog: {
                    blogTitle: "Kershner Recipes",
                    blogDescription:
                        "Kershner Family Recipes, almost always keto",
                    blogSidebarCount: 10,
                    blogSidebarTitle: "Recent Recipes",
                    routeBasePath: "recipes",
                    path: "./recipes",
                    showReadingTime: true,
                    editUrl: "https://github.com/dkershner6/dkershner.com",
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
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "light",
            respectPrefersColorScheme: true,
        },
        image: "img/pot.png",
        navbar: {
            title: SITE_TITLE,
            logo: {
                alt: SITE_TITLE,
                src: "img/pot.png",
            },
            items: [
                {
                    label: "Software Resources & Tips",
                    position: "left",
                    items: RESOURCES_ITEMS,
                },
                {
                    label: "CDK Constructs OSS",
                    position: "left",
                    items: OPEN_SOURCE_CDK_CONSTRUCTS_ITEMS,
                },
                {
                    label: "Github Actions OSS",
                    position: "left",
                    items: OPEN_SOURCE_GITHUB_ACTIONS_ITEMS,
                },
                {
                    label: "Node/React OSS",
                    position: "left",
                    items: NODE_REACT_OPEN_SOURCE_ITEMS,
                },
                {
                    label: "(Food) Recipes",
                    position: "left",
                    items: RECIPES_ITEMS,
                },
                {
                    href: "https://www.linkedin.com/in/derek-kershner-54b3392",
                    "aria-label": "My LinkedIn",
                    className: "navbar__icon navbar__linkedin",
                    position: "right",
                    html: '<i class="fa fa-linkedin"></i>',
                },
                {
                    href: "https://github.com/dkershner6",
                    "aria-label": "My GitHub",
                    className: "navbar__icon navbar__github",
                    position: "right",
                    html: '<i class="fa fa-github"></i>',
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Content / Links",
                    items: [
                        {
                            label: "Software Resources & Tips",
                            to: BASE_RESOURCES_PATH,
                        },
                        {
                            label: "All Recipes",
                            to: "/recipes",
                        },
                        {
                            label: "My GitHub",
                            to: "https://github.com/dkershner6",
                        },
                        {
                            label: "My LinkedIn",
                            to: "https://www.linkedin.com/in/derek-kershner-54b3392",
                        },
                    ],
                },
                {
                    title: "CDK Constructs OSS",
                    items: OPEN_SOURCE_CDK_CONSTRUCTS_ITEMS,
                },
                {
                    title: "Github Actions OSS",
                    items: OPEN_SOURCE_GITHUB_ACTIONS_ITEMS,
                },
                {
                    title: "Node/React OSS",
                    items: NODE_REACT_OPEN_SOURCE_ITEMS,
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Kershner Endeavors LLC. All rights reserved.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        [
            "@cmfcmf/docusaurus-search-local",
            {
                indexBlog: false,
                indexDocs: true,
            },
        ],
    ],
} satisfies Config;

export default config;
