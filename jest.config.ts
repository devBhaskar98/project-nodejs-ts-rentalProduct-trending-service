import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    detectOpenHandles: true,
    maxWorkers: 1,
    moduleNameMapper: {
        '^@trendingService/controllers$': ['<rootDir>/src/controllers/index.ts'],
        '^@trendingService/middleware$': ['<rootDir>/src/middleware/index.ts'],
        '^@trendingService/repository$': ['<rootDir>/src/repositories/index.ts']
    }
};

export default config;
