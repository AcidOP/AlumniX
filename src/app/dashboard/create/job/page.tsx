import createJob from '@/actions/create-job';
import CreateJob from '@/components/forms/CreateJob';

const CreateJobPosting = () => {
  return (
    <form
      action={createJob}
      className='flex w-full flex-col space-y-4 px-8'
    >
      <h2 className='title-font mb-1 text-2xl font-medium text-gray-900'>
        Add Job Posting
      </h2>

      <CreateJob />
    </form>
  );
};

export default CreateJobPosting;
