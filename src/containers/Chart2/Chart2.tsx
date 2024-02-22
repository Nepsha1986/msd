'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import { tempData2 } from '@/__mocks__/responsePlaceholder';

import ChartCard from '@/components/ChartCard';
import ChartFooter from '@/containers/ChartFooter';

const Pie = dynamic(() => import('@ant-design/charts').then((mod) => mod.Pie), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Chart2 = () => {
  const config = {
    appendPadding: 300,
    data: tempData2,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    legend: {
      marker: {
        width: '30px',
      },
      color: {
        title: false,
        position: 'bottom',
        rowPadding: 5,
      },
    },
  };
  return (
    <ChartCard title="Chart title" footer={<ChartFooter />}>
      <Pie {...config} />
    </ChartCard>
  );
};

export default Chart2;
