import React, { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams () {
  return [{ locale: 'en' }, { locale: 'ua' }];
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.js`)).default
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}