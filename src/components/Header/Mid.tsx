import { auth } from '@/lib/auth';

import Link from 'next/link';

const Mid = async () => {
  const session = await auth();

  return (
    <nav className='flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto'>
      {session && <Link href='/dashboard'>Dashboard</Link>}
    </nav>
  );
};

export default Mid;
