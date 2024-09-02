import AddListBtn from '@/components/buttons/AddListBtn';
import EventsCard from '@/components/cards/EventsCard';
import fetchEvents from '@/utils/fetchEvents';

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <div className='min-h-screen w-full space-y-6'>
      <AddListBtn href='/dashboard/create/event' label='Create an Event' />

      {events.map((event, index) => {
        return <EventsCard key={index} {...event} />;
      })}
    </div>
  );
};

export default EventsPage;
