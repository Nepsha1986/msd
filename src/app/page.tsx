import { Col, Row } from 'antd';

import PatientsChart from '../containers/PatientsChart';
import ChartsActions from '../containers/ChartsActions';
import DailyDiseaseChart from '@/containers/DailyDiseaseChart';

import ChartsLayout from '@/components/ChartsLayout';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartsLayout
        heading="Covid disease statistics"
        actions={<ChartsActions />}
      >
        <Row gutter={25}>
          <Col
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            className={styles.col}
          >
            <DailyDiseaseChart />
          </Col>

          <Col
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            className={styles.col}
          >
            <PatientsChart />
          </Col>
        </Row>
      </ChartsLayout>
    </main>
  );
}
