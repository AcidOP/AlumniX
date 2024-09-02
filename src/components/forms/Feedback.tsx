import React from 'react';

const Feedback = () => {
  return (
    <div className='-m-2 flex flex-wrap'>
      <div className='w-full p-2'>
        <div className='relative'>
          <label
            htmlFor='message'
            className='text-sm leading-7 text-gray-600'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200'
          ></textarea>
        </div>
      </div>
      <div className='w-full p-2'>
        <button className='mx-auto flex rounded border-0 bg-green-700 px-8 py-2 text-lg text-white hover:bg-green-800 focus:outline-none'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
