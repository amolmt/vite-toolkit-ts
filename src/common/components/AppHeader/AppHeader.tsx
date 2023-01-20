import { FC } from 'react';
import { Layout, theme } from 'antd';

const { Header } = Layout;

const AppHeader: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <Header style={{ padding: 0, background: colorBgContainer }} />;
};

export default AppHeader;
