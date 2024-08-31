import walking from '@/../public/assets/signin.svg';
import { SignIn } from '@/components/SignIn';

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
                <button className='flex w-full max-w-xs items-center justify-center rounded-lg bg-green-300 py-3 font-bold text-gray-800 outline-none transition-all duration-300 ease-in-out'>
                  <div className='rounded-full border border-white bg-white p-2'>
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

              <SignIn />
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
