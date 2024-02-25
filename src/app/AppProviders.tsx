'use client';
import { ReactNode, FC, useState } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, ThemeConfig } from 'antd';

import { httpBatchLink } from '@trpc/client';
import { trpc } from '@/utils/trpc';
import { getBaseUrl } from '@/utils/getBaseUrl';

const config: ThemeConfig = {
  token: {
    colorPrimary: '#01857c',
  },
  components: {
    Card: {
      headerFontSize: 22,
    },
    Button: {
      colorBorder: '#fff',
    },
  },
};

interface Props {
  children?: ReactNode;
}

const AppProviders: FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api`,
        }),
      ],
    }),
  );

  return (
    <ConfigProvider theme={config}>
      <AntdRegistry>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </trpc.Provider>
      </AntdRegistry>
    </ConfigProvider>
  );
};

export default AppProviders;
