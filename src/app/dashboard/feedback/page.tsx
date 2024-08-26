import React from 'react';

const FeedbackForm = () => {
  return (
    <section className='body-font relative w-full text-gray-600'>
      <div className='container mx-auto px-5 pb-72'>
        <div className='mb-12 flex w-full flex-col text-center'>
          <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
            Feedback Form
          </h1>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
            Anything you wish to say, is extremely important to us!
          </p>
        </div>
        <div className='mx-auto md:w-2/3 lg:w-1/2'>
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
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
