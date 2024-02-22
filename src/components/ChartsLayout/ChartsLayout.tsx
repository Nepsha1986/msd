'use client';
import { ReactNode, FC } from 'react';
import { Typography } from 'antd';

import styles from './styles.module.scss';

const { Title } = Typography;

interface Props {
  heading: string;
  actions?: ReactNode;
  children?: ReactNode;
}

// TODO: Probably can be rewritten with usage of Flex/Grid Antd components
const ChartsLayout: FC<Props> = ({ heading, actions, children }) => {
  return (
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
  );
};

export default ChartsLayout;
