'use client';
import { ReactNode, FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Typography } from 'antd';

import styles from './styles.module.scss';
import { httpBatchLink } from '@trpc/client';
import { trpc } from '@/utils/trpc';

const { Title } = Typography;

interface Props {
  heading: string;
  actions?: ReactNode;
  children?: ReactNode;
}

// TODO: Probably can be rewritten with usage of Flex/Grid Antd components
const ChartsLayout: FC<Props> = ({ heading, actions, children }) => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api',
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <section className={styles.chartsLayout}>
          <div className={styles.chartsLayout__container}>
            <header className={styles.chartsLayout__header}>
              <Title
                style={{ fontSize: '1.2rem', marginBottom: 0 }}
                className={styles.chartsLayout__heading}
              >
                {heading}
              </Title>

              {actions && (
                <div className={styles.chartsLayout__actions}>{actions}</div>
              )}
            </header>

            <div className={styles.chartsLayout__main}>{children}</div>
          </div>
        </section>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default ChartsLayout;
