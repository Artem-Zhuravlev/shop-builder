import type { StorybookConfig } from '@storybook/react-webpack5/dist';
import path from 'path';

const config: StorybookConfig = {
	stories: [
		'../app/components/shared/**/*.stories.@(js|jsx|ts|tsx)',
		'../app/components/widgets/**/*.stories.@(js|jsx|ts|tsx)',
		'../app/components/features/**/*.stories.@(js|jsx|ts|tsx)',
		'../app/components/entities/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		if (config && config.resolve) {
			config.resolve.fallback = {
				zlib: false,
				fs: false,
				stream: false,
				path: require.resolve('path-browserify'),
			};

			config.resolve.alias = {
				'@shared': path.resolve(__dirname, '../app/components/shared'),
				'@features': path.resolve(__dirname, '../app/components/features'),
				'@widgets': path.resolve(__dirname, '../app/components/widgets'),
				'@entities': path.resolve(__dirname, '../app/components/entities'),
				'@lib': path.resolve(__dirname, '../app/lib'),
				'@utils': path.resolve(__dirname, '../utils'),
				'@constants': path.resolve(__dirname, '../constants'),
				'@styles': path.resolve(__dirname, '../styles'),
				'@settings': path.resolve(__dirname, '../settings'),
			};
		} else {
			console.error("Property 'resolve' is missing in the config object.");
		}

		if (config.mode === 'production') {
			config?.module?.rules?.push({
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			});

			config.optimization = {
				minimize: true,
			};

			config.optimization.splitChunks = {
				chunks: 'all',
			};

			config.cache = {
				type: 'filesystem',
				buildDependencies: {
					config: [__filename],
				},
			};
		}

		return config;
	},
};
export default config;
