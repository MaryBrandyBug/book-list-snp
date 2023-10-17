import './styles/globals.scss';
import './styles/reset.scss';
import { node } from 'prop-types';
import ReduxProvider from '@/redux/store/Provider';
import { comfortaa } from './styles/fonts';

export const metadata = {
  title: 'My Library',
  description: 'Your awesome books',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: node.isRequired,
};
