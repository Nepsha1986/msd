import { Flex, Button, Col, Row } from 'antd';

import ChartsLayout from '@/components/ChartsLayout';
import ChartCard from '@/components/ChartCard';

import DailyDiseaseChart from '@/containers/DailyDiseaseChart';
import Chart2 from '@/containers/Chart2';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartsLayout
        heading="Covid disease statistics"
        actions={
          <Flex gap="small" wrap="wrap">
            <Button type="primary">Export to PDF</Button>
            <Button type="primary">Notes</Button>
            <Button type="primary">Filter</Button>
          </Flex>
        }
      >
        <Row gutter={15}>
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
