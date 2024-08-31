import JobCard from '@/components/JobCard';
import jobs from '@/data/jobs';

const JobPortal = () => {
  return (
    <div className='grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {jobs.map((job, index) => {
        return <JobCard key={index} {...job} />;
      })}
    </div>
  );
};

export default JobPortal;
