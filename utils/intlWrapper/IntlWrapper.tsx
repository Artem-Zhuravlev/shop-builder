import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { Providers } from '@lib/providers';
import { NextIntlProvider } from 'next-intl';
import en from '../../messages/en';

export const customRender = (ui: ReactElement): RenderResult => {
	return render(
		<Providers>
			<NextIntlProvider
				locale='en'
				messages={en}>
				{ui}
			</NextIntlProvider>
		</Providers>
	);
};
