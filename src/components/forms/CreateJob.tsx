const CreateJob = () => {
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
          Company Name
        </label>

        <input
          type='text'
          id='companyName'
          name='companyName'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
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
          Job Type
        </label>

        <input
          type='text'
          id='jobType'
          name='jobType'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Application Link
        </label>

        <input
          type='text'
          id='applicationLink'
          name='applicationLink'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Expires At
        </label>

        <input
          type='text'
          id='expiresAt'
          name='expiresAt'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <button className='mx-auto rounded border-0 bg-green-700 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none'>
        Post Job
      </button>
    </>
  );
};

export default CreateJob;
