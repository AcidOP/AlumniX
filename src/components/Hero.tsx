/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className='body-font text-gray-600'>
      <div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
        <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
          <h1 className='title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl'>
            Connect with Your Alumni Community
          </h1>
          <p className='mb-8 leading-relaxed'>
            Join our vibrant alumni network through user-friendly
            platforms. Update your profile, donate, and explore career
            opportunities. Stay connected, share success stories, and
            participate in events to foster lifelong connections with your
            peers and alma mater. Your journey continues here!
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex rounded border-0 bg-green-700 px-6 py-2 text-lg text-white transition duration-150 hover:bg-green-800 focus:outline-none'>
              <Link href='/signup'>Join Now</Link>
            </button>
          </div>
        </div>
        <div className='w-5/6 shadow-2xl md:w-1/2 lg:w-full lg:max-w-lg'>
          <img
            className='rounded object-cover object-center'
            alt='hero'
            src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
