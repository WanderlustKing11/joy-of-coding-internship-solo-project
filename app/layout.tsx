import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Task Manager App',
  description: 'Manage all your tasks here, on the fly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Theme className='site-container'>
          <Navbar />
          <main className='p-20'>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
