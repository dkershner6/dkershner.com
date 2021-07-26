const generateSitemap = require('./scripts/generateSitemap');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    target: 'serverless',
    webpack: (config, { isServer }) => {
        if (isServer) {
            generateSitemap();
        }
        return config;
    }
});
