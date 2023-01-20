import { FC } from 'react';

type GuestLayoutProps = {
  children: React.ReactElement;
};
const GuestLayout: FC<GuestLayoutProps> = ({ children }: GuestLayoutProps) => {
  return <>{children}</>;
};

export default GuestLayout;
