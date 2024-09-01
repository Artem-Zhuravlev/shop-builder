import React from 'react';
import { render, type RenderResult } from '@testing-library/react';
import type { ReactElement } from 'react';
import { Providers } from '@/lib/providers';
import { NextIntlClientProvider } from 'next-intl';
import en from '@/messages/en';

export const customRender = (ui: ReactElement): RenderResult => {
	return render(
		<Providers>
			<NextIntlClientProvider locale='en' messages={en}>
				{ui}
			</NextIntlClientProvider>
		</Providers>,
	);
};
