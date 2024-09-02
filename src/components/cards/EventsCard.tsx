import { format } from 'date-fns';

interface AlumniEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  date: string;
  registrationDeadline: string | null;
  endTime: string;
  eventLink: string | null;
  eventType: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

const EventsCard = ({
  title,
  location,
  startTime,
  eventType,
  registrationDeadline,
  date,
}: AlumniEvent) => {
  return (
    <div className='flex w-full border-b-2 border-gray-100 px-5 pb-12 lg:px-0'>
      <section className='grid w-1/6 place-content-center lg:w-1/6'>
        <div className='w-min border-b-4 border-green-700 bg-gradient-to-b from-white to-gray-200 px-5 py-2'>
          <h3 className='text-nowrap font-black uppercase text-green-800'>
            {format(date, 'MMM')}
          </h3>
          <h4 className='text-nowrap font-medium text-gray-600'>
            {format(date, 'dd')}
          </h4>
        </div>

        <time className='mt-1 text-center'>{startTime}</time>
      </section>

      <section className='flex w-full flex-col lg:w-5/6'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-black'>{title}</h2>
          <p className='grid h-min place-content-center rounded-full bg-gray-200 px-3 py-1'>
            {eventType}
          </p>
        </div>

        <h3 className='mt-3 text-lg font-medium text-gray-600 lg:mt-0'>
          {location}
        </h3>

        <div className='mt-6 flex items-center'>
          <button className='w-min rounded-md bg-green-600 px-3 py-1 text-lg text-white'>
            Register
          </button>
          <p className='ml-3 text-gray-500'>
            Deadline: {registrationDeadline}
          </p>
        </div>
      </section>
    </div>
  );
};

export default EventsCard;
