import React from 'react'

const Header = () => {
  return (
    <header className="container mx-auto body-font">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">AlumniX</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>

        <div>
          <a className="mr-5 hover:text-gray-900">Login</a>
          <button className="bg-green-700 py-2 px-4 text-white hover:bg-green-800 rounded transition duration-150 mt-4 md:mt-0">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header