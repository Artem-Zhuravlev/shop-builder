import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	preset: 'ts-jest',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json',
		},
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	transformIgnorePatterns: ['/node_modules/(?!(react-slick)/)'],
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};

export default createJestConfig(config);
