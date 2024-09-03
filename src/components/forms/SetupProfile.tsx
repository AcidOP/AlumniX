const SetupProfile = () => {
  return (
    <>
      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Course Name
        </label>

        <input
          type='text'
          id='courseName'
          name='courseName'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Graduation Year
        </label>

        <input
          type='text'
          id='graduationYear'
          name='graduationYear'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Phone Number
        </label>

        <input
          type='text'
          id='phoneNumber'
          name='phoneNumber'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Job Title
        </label>

        <input
          type='text'
          id='jobTitle'
          name='jobTitle'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
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
          LinkedIn Profile
        </label>

        <input
          type='text'
          id='jobTitle'
          name='jobTitle'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Bio
        </label>

        <textarea
          id='bio'
          name='bio'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <div className='relative mb-4'>
        <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
          Achievements
        </label>

        <textarea
          id='achievements'
          name='achievements'
          className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200'
        />
      </div>

      <button className='mx-auto rounded border-0 bg-green-700 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none'>
        Update Profile
      </button>
    </>
  );
};

export default SetupProfile;
