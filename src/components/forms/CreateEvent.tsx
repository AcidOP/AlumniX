import React from 'react';

const CreateEvent = () => {
  return (
    <>
      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Title
        </label>

        <input
          type='text'
          id='title'
          name='title'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label
          htmlFor='message'
          className='text-sm leading-7 text-gray-600'
        >
          Description
        </label>

        <textarea
          id='description'
          name='description'
          className='h-16 w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Location
        </label>

        <input
          type='text'
          id='location'
          name='location'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Event Type
        </label>

        <input
          type='text'
          id='eventType'
          name='eventType'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='flex w-full gap-10'>
        <div className='relative mb-4 w-full'>
          <label
            htmlFor='email'
            className='text-sm leading-7 text-gray-600'
          >
            Start Time
          </label>

          <input
            type='text'
            id='startTime'
            name='startTime'
            className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
          />
        </div>

        <div className='relative mb-4 w-full'>
          <label
            htmlFor='email'
            className='text-sm leading-7 text-gray-600'
          >
            End Time
          </label>

          <input
            type='text'
            id='endTime'
            name='endTime'
            className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
          />
        </div>
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Event Link (Optional)
        </label>

        <input
          type='text'
          id='eventLink'
          name='eventLink'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <button className='mx-auto rounded border-0 bg-green-700 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none'>
        Post Event
      </button>
    </>
  );
};

export default CreateEvent;
