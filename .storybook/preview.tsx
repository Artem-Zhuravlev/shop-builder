import React, { useState } from 'react';
import type { Preview } from '@storybook/react';
import { Providers } from '../src/lib/providers';
import { NextIntlClientProvider } from 'next-intl';
import en from '../src/messages/en';
import ua from '../src/messages/ua'; // Assuming you have messages for French
import '../src/styles/globals.scss';

// Language switcher component
const LanguageSwitcher = ({ onChange }) => {
	return (
		<div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={() => onChange('en')}>English</button>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={() => onChange('ua')}>Українська</button>
		</div>
	);
};

const preview: Preview = {
	parameters: {
		// actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},

	decorators: [
		(Story) => {
			const [locale, setLocale] = useState('en');

			const handleLocaleChange = (newLocale) => {
				setLocale(newLocale);
			};

			const messages = {
				en,
				ua,
			};

			return (
				<NextIntlClientProvider locale={locale} messages={messages[locale]}>
					<Providers>
						<>
							<LanguageSwitcher onChange={handleLocaleChange} />
							<Story />
						</>
					</Providers>
				</NextIntlClientProvider>
			);
		},
	],

	tags: ['autodocs', 'autodocs'],
};

export default preview;
