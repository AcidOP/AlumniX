'use client';

import MenuBtn from './buttons/MenuBtn';

import logout from '@/actions/logout';

import { useRouter } from 'next/navigation';

const DashboardSidebar = () => {
  const router = useRouter();

  const signOut = async () => {
    await logout();
    router.push('/');
  };

  return (
    <div className='hidden h-[80vh] flex-col justify-between lg:flex'>
      <div className='w-max px-4 pb-6'>
        <ul className='space-y-1'>
          <MenuBtn
            link='/dashboard/alumni-directory'
            text='Alumni Members'
          />
          <MenuBtn link='/dashboard/jobs' text='Job Portal' />
          <MenuBtn link='/dashboard/events' text='Events' />
          <MenuBtn link='/dashboard/donate' text='Donation' />
          <MenuBtn link='/dashboard/feedback' text='Feedback' />

          <li>
            <details className='group [&_summary::-webkit-details-marker]:hidden'>
              <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                <span className='text-sm font-medium'> Account </span>

                <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </summary>

              <ul className='mt-2 space-y-1 px-4'>
                <MenuBtn link='/account' text='Profile' />
                <MenuBtn link='/account/settings' text='Settings' />

                <button
                  onClick={signOut}
                  className='block w-full cursor-pointer rounded-lg px-4 py-2 text-start text-sm font-medium text-red-500 hover:bg-red-500 hover:text-gray-100'
                >
                  Logout
                </button>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
