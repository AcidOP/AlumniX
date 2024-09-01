import AddListBtn from '@/components/buttons/AddListBtn';
import JobCard from '@/components/cards/JobCard';
import fetchJobs from '@/utils/fetchJobs';

const JobPortal = async () => {
  const jobs = await fetchJobs();

  return (
    <div>
      <AddListBtn href='/dashboard/create/job' label='Add a Job' />

      <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {jobs.map((job, index) => {
          return <JobCard key={index} {...job} />;
        })}
      </div>
    </div>
  );
};

export default JobPortal;
