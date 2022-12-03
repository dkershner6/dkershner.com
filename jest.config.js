module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: 'tsconfig.jest.json'
        }]
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
};
