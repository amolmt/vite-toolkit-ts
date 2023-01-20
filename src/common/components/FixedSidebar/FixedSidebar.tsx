import React, { FC, useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '../../../assets/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import AppLogo from '../AppLogo/AppLogo';
import './FixedSidebar.scss';

const { Content, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

console.log('xmenu', items);

const FixedSidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Sider
        className="fixed-sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <AppLogo />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
    </Layout>
  );
};

export default FixedSidebar;
