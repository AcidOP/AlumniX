import DashboardSidebar from '@/components/DashboardSidebar';
import { auth } from '@/lib/auth';

import { redirect } from 'next/navigation';

import type { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  return (
    <div className='container mx-auto flex'>
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default Layout;
