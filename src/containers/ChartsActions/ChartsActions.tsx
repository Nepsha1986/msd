import { Badge, Button, Flex } from 'antd';
import {
  BarsOutlined,
  DownloadOutlined,
  FilterOutlined,
} from '@ant-design/icons';

const ChartsActions = () => {
  return (
    <Flex gap="large" wrap="wrap">
      <Button size="large" icon={<DownloadOutlined />}>
        Export to PDF
      </Button>
      <Badge count={3} color="#9a9a9e">
        <Button size="large" icon={<BarsOutlined />}>
          Notes
        </Button>
      </Badge>

      <Badge count={109} overflowCount={9} color="#01857c">
        <Button size="large" icon={<FilterOutlined />}>
          Filter
        </Button>
      </Badge>
    </Flex>
  );
};

export default ChartsActions;
