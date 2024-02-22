'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { LineConfig } from '@ant-design/charts';
import { Skeleton } from 'antd';

import ChartCard from '@/components/ChartCard';
import ChartFooter from '@/containers/ChartFooter';
import { trpc } from '@/utils/trpc';

// TODO: Research if it can be done better.
const Line = dynamic(
  () => import('@ant-design/charts').then((mod) => mod.Line),
  { ssr: false, loading: () => <Skeleton /> },
);

const DailyDiseaseChart = () => {
  // TODO: Can we use Generics here maybe? Review and improve if possible
  const { data, isLoading, error } = trpc.stats.getStats.useQuery(
    {
      filters: {
        areaName: 'england',
        areaType: 'nation',
      },
      structure:
        '{"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate"}',
    },
    {
      retry: false,
    },
  );

  const config: LineConfig = {
    data: data?.data,
    xField: 'date',
    yField: 'newCasesByPublishDate',
  };

  // TODO: Implement Error boundary instead?
  if (error) return <p>Error, please try again later</p>;

  return (
    <ChartCard title="New cases" footer={<ChartFooter />}>
      {isLoading ? <p>Loading....</p> : <Line {...config} />}
    </ChartCard>
  );
};

export default DailyDiseaseChart;
