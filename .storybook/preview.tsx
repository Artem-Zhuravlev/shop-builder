import React, { useState } from 'react';
import type { Preview } from '@storybook/react';
import { Providers } from '../app/lib/providers';
import { NextIntlClientProvider } from 'next-intl';
import en from '../messages/en';
import ua from '../messages/ua'; // Assuming you have messages for French
import '../styles/globals.scss';

// Language switcher component
const LanguageSwitcher = ({ onChange }) => {
	return (
		<div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
			<button onClick={() => onChange('en')}>English</button>
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
				<Providers>
					<NextIntlClientProvider
						locale={locale}
						messages={messages[locale]}>
						<>
							<LanguageSwitcher onChange={handleLocaleChange} />
							<Story />
						</>
					</NextIntlClientProvider>
				</Providers>
			);
		},
	],

    tags: ['autodocs']
};

export default preview;
