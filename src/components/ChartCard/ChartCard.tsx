import React from 'react';
import { Card } from 'antd';

interface Props {
  title: string;
  children: React.ReactNode;
  loading?: boolean;
  footer?: React.ReactNode;
}

const cardBodyStyles: React.CSSProperties = {
  padding: '1rem  1rem 0',
};

const ChartCard: React.FC<Props> = ({
  title,
  children,
  footer,
  loading = false,
}) => (
  <Card
    title={title}
    styles={{ body: cardBodyStyles }}
    actions={[footer]}
    loading={loading}
  >
    {children}
  </Card>
);

export default ChartCard;
