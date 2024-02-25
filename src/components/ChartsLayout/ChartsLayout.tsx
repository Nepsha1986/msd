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

const ChartsLayout: FC<Props> = ({ heading, actions, children }) => {
  return (
    <section className={styles.chartsLayout}>
      <header className={styles.chartsLayout__header}>
        <Title style={{ fontSize: '1.2rem', marginBottom: 0 }}>{heading}</Title>

        {actions && (
          <div className={styles.chartsLayout__actions}>{actions}</div>
        )}
      </header>

      <div>{children}</div>
    </section>
  );
};

export default ChartsLayout;
