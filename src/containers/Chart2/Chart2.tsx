'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { tempData2 } from '@/__mocks__/responsePlaceholder';

const Pie = dynamic(() => import('@ant-design/charts').then((mod) => mod.Pie), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Chart2 = () => {
  const config = {
    appendPadding: 10,
    data: tempData2,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
  };
  return <Pie {...config} />;
};

export default Chart2;
