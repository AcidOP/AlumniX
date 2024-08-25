import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="container mx-auto body-font">
      <div className="mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">AlumniX</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

        </nav>

        <div>
          <Link href='/signin' className="mr-5 hover:text-gray-900">Login</Link>
          <button className="bg-green-700 py-2 px-4 text-white hover:bg-green-800 rounded transition duration-150 mt-4 md:mt-0">
            <Link href='/signup'>Sign Up</Link>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
