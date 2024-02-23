import { Col, Row } from 'antd';

import Chart2 from '../containers/PatientsChart';
import ChartActions from '@/containers/ChartActions';
import DailyDiseaseChart from '@/containers/DailyDiseaseChart';

import ChartsLayout from '@/components/ChartsLayout';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartsLayout
        heading="Covid disease statistics"
        actions={<ChartActions />}
      >
        <Row gutter={25}>
          <Col span={12}>
            <DailyDiseaseChart />
          </Col>

          <Col span={12}>
            <Chart2 />
          </Col>
        </Row>
      </ChartsLayout>
    </main>
  );
}
