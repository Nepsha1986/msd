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
          <Col span={12}>
            <DailyDiseaseChart />
          </Col>

          <Col span={12}>
            <PatientsChart />
          </Col>
        </Row>
      </ChartsLayout>

      <p style={{ marginTop: '30px' }}>
        Please read the README.md for the assignment explanation.
      </p>
    </main>
  );
}
