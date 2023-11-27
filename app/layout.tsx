import React from 'react';
import { Providers } from '@/lib/providers'

import './styles/globals.scss'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
