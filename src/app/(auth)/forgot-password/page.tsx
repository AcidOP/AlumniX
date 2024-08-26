import reset from '@/../public/assets/reset.svg';

import Image from 'next/image';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <div className='flex min-h-screen justify-center bg-gray-100 text-gray-900'>
      <div className='m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg'>
        <div className='p-6 sm:p-12 lg:w-1/2 xl:w-5/12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl font-extrabold xl:text-3xl'>
              Reset Password
            </h1>
            <div className='mt-8 w-full flex-1'>
              <div className='mx-auto max-w-xs'>
                <input
                  className='w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
                  type='email'
                  placeholder='Email'
                />

                <button className='focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-green-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-green-700 focus:outline-none'>
                  <svg
                    className='-ml-2 h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                    <circle cx='8.5' cy='7' r='4' />
                    <path d='M20 8v6M23 11h-6' />
                  </svg>
                  <span className='ml-3'>Send Link</span>
                </button>

                <div className='mt-6 flex justify-center text-xs text-gray-600'>
                  <Link
                    href='signup'
                    className='ml-1 underline hover:text-green-500'
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden flex-1 bg-green-100 text-center lg:flex'>
          <Image
            src={reset}
            alt='Reset pass'
            className='w-full bg-contain bg-center bg-no-repeat'
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
