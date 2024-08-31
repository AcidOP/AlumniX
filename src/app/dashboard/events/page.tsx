import EventsCard from '@/components/EventsCard';
import alumniEventsData from '@/data/events';

const EventsPage = () => {
  return (
    <div className='min-h-screen w-full space-y-6'>
      {alumniEventsData.map((event, index) => {
        return <EventsCard key={index} {...event} />;
      })}
    </div>
  );
};

export default EventsPage;
