import React from 'react';

import Link from 'next/link';

interface MenuProps {
  link: string;
  text: string;
}

const Menu = ({ link, text }: MenuProps) => {
  return (
    <li>
      <Link
        href={link}
        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100'
      >
        {text}
      </Link>
    </li>
  );
};

const DashboardSidebar = () => {
  return (
    <div className='hidden h-[80vh] flex-col justify-between lg:flex'>
      <div className='w-max px-4 pb-6'>
        <ul className='space-y-1'>
          <Menu link='/dashboard/alumni-directory' text='Alumni Members' />
          <Menu link='/dashboard/jobs' text='Job Portal' />
          <Menu link='/dashboard/events' text='Events' />
          <Menu link='/dashboard/donate' text='Donation' />
          <Menu link='/dashboard/feedback' text='Feedback' />

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
                <Menu link='/account' text='Profile' />
                <Menu link='/account/settings' text='Settings' />
                <Menu link='/signout' text='Log Out' />
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
