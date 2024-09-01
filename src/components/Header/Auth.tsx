import logout from '@/actions/logout';
import { auth } from '@/lib/auth';

import Link from 'next/link';

const Auth = async () => {
  const session = await auth();

  if (session) {
    return (
      <form action={logout}>
        <button className='mt-4 rounded bg-red-600 px-4 py-2 text-white transition duration-150 hover:bg-green-800 md:mt-0'>
          Logout
        </button>
      </form>
    );
  }

  return (
    <div>
      <Link
        href='/login'
        className='mt-4 rounded bg-green-700 px-4 py-2 text-white transition duration-150 hover:bg-green-800 md:mt-0'
      >
        Login
      </Link>
    </div>
  );
};

export default Auth;
