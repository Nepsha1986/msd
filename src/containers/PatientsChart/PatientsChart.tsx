'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import ChartCard from '@/components/ChartCard';
import ChartFooter from '@/containers/ChartFooter';
import { trpc } from '@/utils/trpc';
import { Skeleton } from 'antd';

const Pie = dynamic(() => import('@ant-design/charts').then((mod) => mod.Pie), {
  ssr: false,
  loading: () => <Skeleton />,
});

const PatientsChart = () => {
  const {
    data: res,
    isLoading,
    error,
  } = trpc.stats.admissionRatesByAge.get.useQuery({
    filters: {
      areaName: 'england',
    },
  });

  if (error) return <p>Error, please try again later</p>;

  const config = {
    appendPadding: 300,
    data: res?.data[0].admission,
    angleField: 'value',
    colorField: 'age',
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
    <ChartCard title="Patients" footer={<ChartFooter />} loading={isLoading}>
      <Pie {...config} />
    </ChartCard>
  );
};

export default PatientsChart;
