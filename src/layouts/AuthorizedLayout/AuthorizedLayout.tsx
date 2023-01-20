import { FC, Suspense } from 'react';
import { Role } from '../../common';
import FixedSidebar from '../../common/components/FixedSidebar/FixedSidebar';
import './AuthorizedLayout.scss';

type AuthorizedLayoutProps = {
  role: Role;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({
  role,
}: AuthorizedLayoutProps) => {
  return (
    <>
      <FixedSidebar />
      {/* <SessionTimeOutModal /> */}
      {/* <Suspense fallback={<Loader show />}>
        <ErrorBoundary>
          {role === Role.NONE && <Loader show fullscreen />}
          {role === Role.ADMIN && <AdminLayout />}
          {role === Role.MANAGER && <ClientLayout />}
        </ErrorBoundary>
      </Suspense> */}
    </>
  );
};

export default AuthorizedLayout;
