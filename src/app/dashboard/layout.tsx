import DashboardSidebar from '@/components/DashboardSidebar';

import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container mx-auto flex'>
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default Layout;
