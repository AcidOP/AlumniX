import fetchUser from '@/utils/fetchUser';

import { format } from 'date-fns';

interface JobPosting {
  id: string;
  title: string;
  description: string;
  companyName: string;
  location: string;
  jobType: string;
  applicationLink: string;
  postedAt: Date;
  expiresAt: Date | null;
  updatedAt: Date;
  userId: string;
}

const JobCard = async ({
  title,
  userId,
  jobType,
  postedAt,
  companyName,
  description,
  applicationLink,
}: JobPosting) => {
  const user = await fetchUser(userId);
  const displayText = user?.name || user?.email;

  return (
    <div className='m-3 flex flex-col justify-between rounded-xl border-2 border-black bg-green-300 p-6 text-gray-800'>
      <section>
        <time className='rounded-full border border-gray-800 bg-white px-4 py-1 text-sm font-medium'>
          {format(postedAt, 'dd-MMM-yy')}
        </time>

        <h2 className='mb-2 mt-5 text-sm font-medium'>{companyName}</h2>

        <h3 className='my-3 text-xl font-black uppercase text-gray-800'>
          {title}
        </h3>

        <p className='line-clamp-4'>{description}</p>

        <div className='mt-7 block w-min text-nowrap rounded-full border border-gray-800 bg-white px-4 py-1 text-sm'>
          {jobType}
        </div>
      </section>

      <section>
        {user && (
          <div className='pt-6 text-sm'>
            Posted by: <span className='font-medium'>{displayText}</span>
          </div>
        )}

        <div className='mt-3'>
          <a
            href={applicationLink}
            target='_blank'
            referrerPolicy='no-referrer'
            className='mt-3 rounded-md bg-black px-4 py-2 text-white'
          >
            Apply
          </a>
        </div>
      </section>
    </div>
  );
};

export default JobCard;
