export default {
	preset: 'ts-jest',
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
		'^@lib/(.*)$': '<rootDir>/app/lib/$1',
		'^@utils/(.*)$': '<rootDir>/utils/$1',
		'^@constants/(.*)$': '<rootDir>/constants/$1',
		'^@styles/(.*)$': '<rootDir>/styles/$1',
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};
