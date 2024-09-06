import '@mantine/core/styles.layer.css';
// import '@mantine/notifications/styles.layer.css';
// import '@mantine/dropzone/styles.layer.css';
// import '@mantine/dates/styles.layer.css';
// import '@/styles/global.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import { theme } from '../theme';
import { AppProvider } from '../providers/AppProvider';
import { MainLayout } from '../shared/layouts/MainLayout';
import { menu } from '../menu';

// import { MainLayout } from '../../shared/layouts';

// import { theme } from '@/src/theme';
// import { menu } from '@/src/menu';
// import ReactQueryProvider from '@/src/providers/ReactQueryProvider';
// import { AppProvider } from '@/src/providers/AppProvider';
// import { AuthProvider } from '@/src/providers/AuthProvider';

// const newrelic = require('newrelic');

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: { children: any }) {
  // const browserTimingHeader = newrelic.getBrowserTimingHeader({
  //   hasToRemoveScriptWrapper: true,
  //   allowTransactionlessInjection: true,
  // });

  return (
    <html lang="vi">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/* <script id="nr-browser-agent" dangerouslySetInnerHTML={{ __html: browserTimingHeader }} /> */}
      </head>
      <body>
        <ReactQueryProvider>
          <MantineProvider theme={theme}>
              <AppProvider>
                {/* <ModalsProvider> */}
                  <MainLayout menu={menu}>{children}</MainLayout>
                {/* </ModalsProvider> */}
              </AppProvider>
          </MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
