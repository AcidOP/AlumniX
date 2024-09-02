import prisma from '@/lib/db';

const fetchEvents = async () => {
  const data = await prisma.event.findMany();
  return data;
};

export default fetchEvents;
