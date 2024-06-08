import { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],

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

    framework: '@storybook/nextjs',

    docs: {},

    webpackFinal: async (config) => {
		if (config && config.resolve) {
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

			config.resolve.alias['next/image'] = path.resolve(
				__dirname,
				'./mocks/Image.tsx'
			);
		}

		return config;
	},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};
export default config;
