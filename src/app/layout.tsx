import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import AppHeader from '@/containers/AppHeader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MSD Assignment',
  description: 'MSD Assignment for Frontend Developer Position',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <>
            <AppHeader />

            {children}
          </>
        </AntdRegistry>
      </body>
    </html>
  );
}
