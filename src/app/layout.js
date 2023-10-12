import './styles/globals.scss';
import './styles/reset.scss';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'My Library',
  description: 'Your awesome books',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
