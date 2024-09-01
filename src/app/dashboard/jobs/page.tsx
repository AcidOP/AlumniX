import JobCard from '@/components/cards/JobCard';
import fetchJobs from '@/utils/fetchJobs';

import Link from 'next/link';

const JobPortal = async () => {
  const jobs = await fetchJobs();

  return (
    <div>
      <Link
        href='/dashboard/create/job'
        className='mb-24 ml-3 rounded-lg bg-black px-5 py-2 text-white'
      >
        Add a Job
      </Link>
      <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {jobs.map((job, index) => {
          return <JobCard key={index} {...job} />;
        })}
      </div>
    </div>
  );
};

export default JobPortal;
