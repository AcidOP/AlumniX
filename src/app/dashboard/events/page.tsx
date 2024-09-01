import AddListBtn from '@/components/buttons/AddListBtn';
import EventsCard from '@/components/cards/EventsCard';
import alumniEventsData from '@/data/events';

const EventsPage = () => {
  return (
    <div className='min-h-screen w-full space-y-6'>
      <AddListBtn href='/dashboard/create/event' label='Create an Event' />

      {alumniEventsData.map((event, index) => {
        return <EventsCard key={index} {...event} />;
      })}
    </div>
  );
};

export default EventsPage;
