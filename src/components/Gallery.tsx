/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Gallery = () => {
  return (
    <section className='body-font text-gray-600'>
      <div className='container mx-auto flex flex-wrap px-5 py-24'>
        <div className='mb-20 flex w-full flex-wrap'>
          <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl lg:mb-0 lg:w-1/3'>
            Master Cleanse Reliac Heirloom
          </h1>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3 lg:pl-6'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies
            heirloom.
          </p>
        </div>
        <div className='-m-1 flex flex-wrap md:-m-2'>
          <div className='flex w-1/2 flex-wrap'>
            <div className='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full object-cover object-center'
                src='https://images.unsplash.com/photo-1662663489539-baefae8aaae1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
            <div className='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full object-cover object-center'
                src='https://images.unsplash.com/photo-1567167273284-b39c9c601b6b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
            <div className='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full object-cover object-center'
                src='https://images.unsplash.com/photo-1724404104266-d9d298cbb221?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
          </div>
          <div className='flex w-1/2 flex-wrap'>
            <div className='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full object-cover object-center'
                src='https://dummyimage.com/601x361'
              />
            </div>
            <div className='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full object-cover object-center'
                src='https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
            <div className='w-1/2 p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full object-cover object-center'
                src='https://dummyimage.com/503x303'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
