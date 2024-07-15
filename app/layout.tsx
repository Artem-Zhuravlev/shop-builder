import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Providers } from '@lib/providers';

import '@styles/globals.scss';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<Providers>
			<html lang={locale}>
				<body>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</body>
			</html>
		</Providers>
	);
}
