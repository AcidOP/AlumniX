import createEvent from '@/actions/create-event';
import CreateEvent from '@/components/forms/CreateEvent';

const Event = () => {
  return (
    <form
      action={createEvent}
      className='flex w-full flex-col space-y-4 px-8'
    >
      <h2 className='title-font mb-1 text-2xl font-medium text-gray-900'>
        Add an Event
      </h2>

      <CreateEvent />
    </form>
  );
};

export default Event;
