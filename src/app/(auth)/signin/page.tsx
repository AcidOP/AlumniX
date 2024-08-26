import walking from '@/../public/assets/signin.svg';

import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

const SignIN = () => {
  return (
    <div className='flex min-h-screen justify-center bg-gray-100 text-gray-900'>
      <div className='m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg'>
        <div className='p-6 sm:p-12 lg:w-1/2 xl:w-5/12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl font-extrabold xl:text-3xl'>LOGIN</h1>
            <div className='mt-8 w-full flex-1'>
              <div className='flex flex-col items-center'>
                <button className='group flex w-full max-w-xs items-center justify-center rounded-lg bg-green-100 py-3 font-bold text-gray-800 outline-none transition-all duration-300 ease-in-out hover:text-green-600'>
                  <div className='rounded-full border border-white bg-white p-2 group-hover:border-gray-400'>
                    <FaGoogle size={25} />
                  </div>
                  <span className='ml-4'>Login with Google</span>
                </button>
              </div>

              <div className='my-12 border-b text-center'>
                <div className='inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600'>
                  Or log in with e-mail
                </div>
              </div>

              <div className='mx-auto max-w-xs'>
                <input
                  className='w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
                  type='email'
                  placeholder='Email'
                />
                <input
                  className='mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
                  type='password'
                  placeholder='Password'
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
                  <span className='ml-3'>Login</span>
                </button>

                <div className='mt-6 flex justify-center text-xs text-gray-600'>
                  <p>Don&apos;t have an account?</p>
                  <Link
                    href='signup'
                    className='ml-1 underline hover:text-green-500'
                  >
                    Sign Up
                  </Link>
                </div>

                <div className='mt-6 flex justify-center text-xs text-gray-600'>
                  <p>Forgot Password?</p>
                  <Link
                    href='/forgot-password'
                    className='ml-1 underline hover:text-green-500'
                  >
                    Reset Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden flex-1 bg-green-100 text-center lg:flex'>
          <Image
            src={walking}
            alt='Walking'
            className='w-full bg-contain bg-center bg-no-repeat'
          />
        </div>
      </div>
    </div>
  );
};

export default SignIN;
