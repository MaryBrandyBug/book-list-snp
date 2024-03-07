import Head from 'next/head';
import { any, func } from 'prop-types';

import RootLayout from './layout';

import '../styles/globals.scss';
import '../styles/reset.scss';
import { comfortaa } from '../styles/fonts';

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>My Library</title>
        <meta name="description" content="Your awesome books" />
      </Head>
      <main className={comfortaa.className}>
        <Component {...pageProps} />
      </main>
    </RootLayout>
  );
}

MyApp.propTypes = {
  Component: func,
  pageProps: any,
};
