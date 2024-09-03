import Auth from './Auth';
import AccountMenu from './mobile/account-menu';
import MobileNavbar from './mobile/menu';

import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='body-font container mx-auto p-5 md:px-0'>
      <div className='mx-auto flex flex-row flex-wrap items-center justify-between'>
        <Link
          href='/'
          className='title-font flex items-center font-medium text-gray-900'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='h-10 w-10 rounded-full bg-green-800 p-2 text-white'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>AlumniX</span>
        </Link>

        <Auth />

        <div className='flex items-center lg:hidden'>
          <SessionProvider>
            <AccountMenu />
            <MobileNavbar />
          </SessionProvider>
        </div>
      </div>
    </header>
  );
};

export default Header;
