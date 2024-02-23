import React from 'react';
import { Avatar, Flex, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons/lib/icons';

import styles from './styles.module.scss';

const ChartFooter: React.FC = () => {
  return (
    <footer className={styles.chartFooter}>
      <Flex justify="space-between" align="center">
        <Avatar size={28} icon={<UserOutlined />} />
        <Button
          disabled
          type="text"
          size="large"
          icon={<MessageOutlined size={40} />}
        >
          3
        </Button>
      </Flex>
    </footer>
  );
};

export default ChartFooter;
