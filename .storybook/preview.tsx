import React from 'react';
import type { Preview } from '@storybook/react';
import { Providers } from '../app/lib/providers';
import { NextIntlClientProvider } from 'next-intl';
import en from '../messages/en';
import '../styles/globals.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<Providers>
				<NextIntlClientProvider
					locale='en'
					messages={en}>
					<Story />
				</NextIntlClientProvider>
			</Providers>
		),
	],
};

export default preview;
