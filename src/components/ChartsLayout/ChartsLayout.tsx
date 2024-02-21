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
      <div className={styles.chartsLayout__container}>
        <header className={styles.chartsLayout__header}>
          <Title className={styles.chartsLayout__heading}>{heading}</Title>

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
