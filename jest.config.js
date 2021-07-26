module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testPathIgnorePatterns: ['./.next/', './node_modules/', './aws'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: [
        'node_modules',
        'resume',
        '/r/',
        'Resume',
        'cms',
        'classes',
        'pages',
        '.next',
        '@types',
        'lib/server'
    ],
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    }
};
