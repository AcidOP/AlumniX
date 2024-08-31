interface JobPosting {
  companyName: string;
  jobRole: string;
  datePosted: string;
  tags: string[];
  postedBy: string;
  location: string;
  experienceRequired: string;
  salaryRange: string;
  applicationDeadline: string;
  contactEmail: string;
  jobDescription: string;
}

const JobCard = ({
  datePosted,
  companyName,
  jobRole,
  tags,
  jobDescription,
  postedBy,
}: JobPosting) => {
  return (
    <div className='m-3 flex flex-col justify-between rounded-xl border-2 border-black bg-green-300 p-6 text-gray-800'>
      <section>
        <time className='rounded-full bg-white px-4 py-1 text-sm font-bold'>
          {datePosted}
        </time>

        <h2 className='my-2 text-sm font-medium'>{companyName}</h2>

        <h3 className='my-3 text-xl font-black uppercase text-gray-800'>
          {jobRole}
        </h3>

        <p className='line-clamp-4'>{jobDescription}</p>

        <div className='mt-7 flex flex-wrap gap-3'>
          {tags.map(tag => {
            return (
              <div
                key={tag}
                className='block w-min text-nowrap rounded-full border border-gray-800 bg-white px-4 py-1 text-sm'
              >
                {tag}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className='pt-6 text-sm'>Posted by: {postedBy}</div>
        <div className='mt-3'>
          <button className='rounded-md bg-black px-4 py-2 text-white'>
            Apply
          </button>
        </div>
      </section>
    </div>
  );
};

export default JobCard;
