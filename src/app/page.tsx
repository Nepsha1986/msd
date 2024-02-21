import { Flex, Button, Col, Row } from 'antd';

import ChartsLayout from '@/components/ChartsLayout';
import ChartCard from '@/components/ChartCard';

import DemoChart from '@/containers/DemoChart';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartsLayout
        heading="Page title"
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
            <ChartCard title="Chart title">
              <DemoChart />
            </ChartCard>
          </Col>

          <Col span={12}>
            <ChartCard title="Chart title">
              <DemoChart />
            </ChartCard>
          </Col>
        </Row>
      </ChartsLayout>
    </main>
  );
}
