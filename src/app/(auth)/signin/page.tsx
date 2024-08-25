import Image from 'next/image'
import Link from 'next/link'

import walking from '@/../public/assets/signin.svg'
import { FaGoogle } from 'react-icons/fa'

const SignIN = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              LOGIN
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="group w-full max-w-xs font-bold rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out outline-none hover:text-green-600">
                  <div className="bg-white p-2 rounded-full border border-white group-hover:border-gray-400">
                    <FaGoogle size={25} />
                  </div>
                  <span className="ml-4">
                    Login with Google
                  </span>
                </button>

              </div>

              <div className="my-12 border-b text-center">
                <div
                  className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or log in with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Email" />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Password" />
                <button
                  className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Login
                  </span>
                </button>

                <div className="mt-6 text-xs text-gray-600 flex justify-center">
                  <p>Don&apos;t have an account?</p>
                  <Link href='signup' className='ml-1 hover:text-green-500 underline'>Sign Up</Link>
                </div>

                <div className="mt-6 text-xs text-gray-600 flex justify-center">
                  <p>Forgot Password?</p>
                  <Link href='signup' className='ml-1 hover:text-green-500 underline'>Reset Password</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <Image src={walking} alt='Walking' className='w-full bg-contain bg-center bg-no-repeat' />
        </div>
      </div>
    </div>
  )
}

export default SignIN