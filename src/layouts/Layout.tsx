import { FC } from 'react';
import { Role } from '../common';
import AuthorizedLayout from './AuthorizedLayout/AuthorizedLayout';
const Layout: FC = () => {
  const role = 'user';
  return <>{<AuthorizedLayout role={Role.ADMIN} />}</>;
};

export default Layout;
