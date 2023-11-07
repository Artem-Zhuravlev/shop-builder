import React from 'react';
import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from 'next-intl';
import en from '../messages/en';
import '../app/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider
        locale="en"
        messages={en}
      >
        <Story/>
      </NextIntlClientProvider>
    )
  ]
};

export default preview;
