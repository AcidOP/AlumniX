import { googleAuthenticate } from '@/actions/google-auth';

import { FaGoogle } from 'react-icons/fa';

const Google = () => {
  return (
    <form
      action={googleAuthenticate}
      className='flex flex-col items-center'
    >
      <button className='flex w-full max-w-xs items-center justify-center rounded-lg bg-green-300 py-3 font-bold text-gray-800 outline-none transition-all duration-300 ease-in-out'>
        <div className='rounded-full border border-white bg-white p-2'>
          <FaGoogle size={25} />
        </div>
        <span className='ml-4'>Login with Google</span>
      </button>
    </form>
  );
};

export default Google;
