import React from 'react';
import { Card } from 'antd';

import styles from './styles.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const cardBodyStyles: React.CSSProperties = {
  padding: '1rem  1rem 0',
};

const ChartCard: React.FC<Props> = ({ title, children, footer }) => (
  <Card
    className={styles.chartCard}
    title={title}
    styles={{ body: cardBodyStyles }}
  >
    {children}
    {footer && <footer className={styles.chartCard__footer}>{footer}</footer>}
  </Card>
);

export default ChartCard;