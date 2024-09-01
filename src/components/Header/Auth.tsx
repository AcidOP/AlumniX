import logout from '@/actions/logout';
import { auth } from '@/lib/auth';

import Link from 'next/link';

const Auth = async () => {
  const session = await auth();

  if (session) {
    return (
      <div className='hidden items-center space-x-5 lg:flex'>
        <Link href='/dashboard'>Dashboard</Link>
        <form action={logout}>
          <button className='rounded bg-red-700 px-4 py-2 text-white transition duration-150 hover:bg-red-600 md:mt-0'>
            Logout
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Link
        href='/login'
        className='hidden rounded bg-green-700 px-4 py-2 text-white transition duration-150 hover:bg-green-800 md:mt-0 lg:block'
      >
        Login
      </Link>
    </div>
  );
};

export default Auth;
