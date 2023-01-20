import { FC } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Prompt Generator ©{new Date().getFullYear()} Created by Amol Tangade
    </Footer>
  );
};

export default AppFooter;
