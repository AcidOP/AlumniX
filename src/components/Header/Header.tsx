import Auth from './Auth';
import AccountMenu from './mobile/account-menu';
import MobileNavbar from './mobile/menu';

import { SessionProvider } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='body-font container mx-auto p-5 md:px-0'>
      <div className='mx-auto flex flex-row flex-wrap items-center justify-between'>
        <Link
          href='/'
          className='title-font flex items-center font-medium text-gray-900'
        >
          <Image
            src='/assets/logo/logo.png'
            width={50}
            height={50}
            alt=''
          />
          <span className='text-xl'>AlumniX</span>
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
