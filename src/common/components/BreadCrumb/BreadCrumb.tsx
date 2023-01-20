import { FC } from 'react';
import { Breadcrumb } from 'antd';

const BreadCrumb: FC = () => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Amol</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
