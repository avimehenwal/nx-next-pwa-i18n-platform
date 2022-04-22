import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import SidebarLayout from '../components/sidebar-layout';
import { SITE_CONFIG } from '../ions/constants';
import CUSTOM_THEME from '../ions/theme';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to dynamic-i18n!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={CUSTOM_THEME}>
        <CssBaseline enableColorScheme />
        <SidebarLayout name={SITE_CONFIG.appName}>
          <Component {...pageProps} />
        </SidebarLayout>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(CustomApp);
