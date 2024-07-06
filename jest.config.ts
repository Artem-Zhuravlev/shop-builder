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
    '^@shared/(.*)$': '<rootDir>/app/components/shared/$1',
    '^@features/(.*)$': '<rootDir>/app/components/features/$1',
    '^@widgets/(.*)$': '<rootDir>/app/components/widgets/$1',
    '^@entities/(.*)$': '<rootDir>/app/components/entities/$1',
    '^@lib/(.*)$': '<rootDir>/app/lib/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@settings/(.*)$': '<rootDir>/settings/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!(react-slick)/)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

export default createJestConfig(config);
