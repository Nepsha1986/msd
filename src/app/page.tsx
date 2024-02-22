import { Flex, Button, Col, Row, Badge } from 'antd';
import { DownloadOutlined, FilterOutlined, BarsOutlined } from '@ant-design/icons';

import DailyDiseaseChart from '@/containers/DailyDiseaseChart';
import Chart2 from '@/containers/Chart2';

import ChartsLayout from '@/components/ChartsLayout';
import ChartCard from '@/components/ChartCard';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartsLayout
        heading="Covid disease statistics"
        actions={
          <Flex gap="large" wrap="wrap">
            <Button size='large' icon={<DownloadOutlined />}>Export to PDF</Button>
            <Badge count={3} color='#9a9a9e'>
              <Button size='large' icon={<BarsOutlined />}>Notes</Button>
            </Badge>

            <Badge count={109} overflowCount={9} color='cyan'>
              <Button size='large' icon={<FilterOutlined/>}>Filter</Button>
            </Badge>
          </Flex>
        }
      >
        <Row gutter={25}>
          <Col span={12}>
            <ChartCard title="New cases">
              <DailyDiseaseChart />
            </ChartCard>
          </Col>

          <Col span={12}>
            <ChartCard title="Chart title">
              <Chart2 />
            </ChartCard>
          </Col>
        </Row>
      </ChartsLayout>
    </main>
  );
}
