'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { LineConfig } from '@ant-design/charts';
import { demoData } from '@/__mocks__/responsePlaceholder';

const Line = dynamic(
  () => import('@ant-design/charts').then((mod) => mod.Line),
  { ssr: false, loading: () => <p>Loading...</p> },
);
const DailyDiseaseChart = () => {
  const config: LineConfig = {
    data: demoData,
    xField: 'date',
    yField: 'newCases',
  };

  return <Line {...config} />;
};

export default DailyDiseaseChart;
