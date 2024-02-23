'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ColumnConfig } from '@ant-design/charts';
import { Skeleton } from 'antd';

import ChartCard from '@/components/ChartCard';
import ChartFooter from '@/containers/ChartFooter';
import { trpc } from '@/utils/trpc';
import { StatsResponse } from '@/server/routers/stats/casesByGender.router';

const Column = dynamic(
  () => import('@ant-design/charts').then((mod) => mod.Column),
  { ssr: false, loading: () => <Skeleton /> },
);

type ChartItem = {
  gender: 'female' | 'male';
  age: string;
  rate: number;
};

const convertToChartData = (resData: StatsResponse): ChartItem[] => {
  const females: ChartItem[] = resData.data[0].femaleCases.map((item) => ({
    gender: 'female',
    ...item,
  }));
  const males: ChartItem[] = resData.data[0].maleCases.map((item) => ({
    gender: 'male',
    ...item,
  }));
  return [...females, ...males];
};

const statisticsDate = '2023-12-13';

const DailyDiseaseChart = () => {
  const [cases, setCases] = useState<ChartItem[]>([]);

  const { data, isLoading, error } = trpc.stats.casesByGender.get.useQuery(
    {
      filters: {
        date: statisticsDate,
      },
    },
    {
      retry: false,
    },
  );

  useEffect(() => {
    if (!!data) setCases(convertToChartData(data));
  }, [data]);

  // TODO: Implement Error boundary if time left
  if (error) return <p>Error, please try again later</p>;

  const config: ColumnConfig = {
    data: cases,
    xField: 'age',
    yField: 'rate',
    group: true,
    colorField: 'gender',
    legend: {
      color: {
        position: 'bottom',
        rowPadding: 5,
      },
    },
  };

  return (
    <ChartCard
      title={`New cases on ${statisticsDate}`}
      footer={<ChartFooter />}
      loading={isLoading}
    >
      <Column {...config} />
    </ChartCard>
  );
};

export default DailyDiseaseChart;
