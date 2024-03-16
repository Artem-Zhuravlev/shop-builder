import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { NextIntlProvider } from 'next-intl';
import en from '../../messages/en';

export const customRender = (ui: ReactElement): RenderResult => {
  return render(
    <NextIntlProvider
      locale="en"
      messages={en}
    >
      {ui}
    </NextIntlProvider>
  );
};
