import magicLink from '@/actions/magic-link';

const Icon = () => {
  return (
    <svg
      className='-ml-2 h-6 w-6'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
      <circle cx='8.5' cy='7' r='4' />
      <path d='M20 8v6M23 11h-6' />
    </svg>
  );
};

export function SignIn() {
  return (
    <form action={magicLink} className='mx-auto flex max-w-xs flex-col'>
      <input
        className='w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        type='email'
        name='email'
        placeholder='Email'
      />

      <button className='focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-green-600 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-green-700 focus:outline-none'>
        <Icon />
        <span className='ml-3'>Login</span>
      </button>
    </form>
  );
}
