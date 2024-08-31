'use client';

import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  router.push('/dashboard/alumni-directory');

  return <></>;
};

export default Dashboard;
