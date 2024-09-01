import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-styling-webpack',
			options: {
				rules: [
					{
						test: /\.(css|s[ac]ss)$/i,
						use: [
							'style-loader',
							'css-loader',
							{
								loader: 'sass-loader',
								options: {
									sassOptions: {
										implementation: require.resolve('sass'),
									},
								},
							},
						],
					},
				],
			},
		},
		'@chromatic-com/storybook',
	],

	framework: {
		name: '@storybook/nextjs',
		options: { builder: {} },
	},
	docs: {},

	webpackFinal: async (config) => {
		if (config?.resolve) {
			const alias = {
				'@/': path.resolve(__dirname, '../src'),
				'@interfaces': path.resolve(__dirname, '../interfaces'),
				'/fonts': path.resolve(__dirname, '../public/fonts'),
				'next/image': path.resolve(__dirname, './mocks/Image.tsx'),
			};

			config.resolve.alias = { ...config.resolve.alias, ...alias };
		}

		// Enable caching for faster rebuilds
		if (config?.cache) {
			config.cache = {
				type: 'filesystem',
				buildDependencies: {
					config: [__filename],
				},
			};
		}

		return config;
	},

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
};

export default config;
