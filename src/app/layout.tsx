import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from 'next/font/google';
import AppHeader from '@/containers/AppHeader';
import { ConfigProvider, ThemeConfig } from "antd";

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MSD Assignment',
  description: 'MSD Assignment for Frontend Developer Position',
};

// TODO: Research if we can use one source of truth for styling.
const config: ThemeConfig = {
  token: {
    colorPrimary: '#01857c',
    colorBorder: '#fff',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={config}>
          <AntdRegistry>
            <AppHeader />
            {children}
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
