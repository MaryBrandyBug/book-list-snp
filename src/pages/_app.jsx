import { func } from 'prop-types';

import RootLayout from './layout';

import '../styles/globals.scss';
import '../styles/reset.scss';
import { comfortaa } from '../styles/fonts';

export default function MyApp({ Component }) {
  return (
    <RootLayout>
      <main className={comfortaa.className}>
        <Component />
      </main>
    </RootLayout>
  );
}

MyApp.propTypes = {
  Component: func,
};
