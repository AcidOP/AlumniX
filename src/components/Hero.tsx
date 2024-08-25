/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Connect with Your Alumni Community
          </h1>
          <p className="mb-8 leading-relaxed">Join our vibrant alumni network through user-friendly platforms. Update your profile, donate, and explore career opportunities. Stay connected, share success stories, and participate in events to foster lifelong connections with your peers and alma mater. Your journey continues here!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 transition duration-150 rounded text-lg">
              <Link href='/signup'>Join Now</Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 shadow-2xl">
          <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </section>
  )
}

export default Hero
