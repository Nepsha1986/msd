'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { LineConfig } from '@ant-design/charts';
import { Skeleton } from 'antd';

import { demoData } from '@/__mocks__/responsePlaceholder';

import ChartCard from '@/components/ChartCard';
import ChartFooter from '@/containers/ChartFooter';

// TODO: Research if it can be done better.
const Line = dynamic(
  () => import('@ant-design/charts').then((mod) => mod.Line),
  { ssr: false, loading: () => <Skeleton /> },
);

const DailyDiseaseChart = () => {
  const config: LineConfig = {
    data: demoData,
    xField: 'date',
    yField: 'newCases',
  };

  return (
    <ChartCard title="New cases" footer={<ChartFooter />}>
      <Line {...config} />
    </ChartCard>
  );
};

export default DailyDiseaseChart;
