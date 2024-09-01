'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';

const createEvent = async (formData: FormData) => {
  const session = await auth();

  const ID = session?.user?.id;

  if (!ID) {
    throw new Error('Unauthorized');
  }

  try {
    const event = await prisma.event.create({
      data: {
        userId: ID,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        location: formData.get('location') as string,
        startTime: formData.get('startTime') as string,
        endTime: formData.get('endTime') as string,
        eventLink: formData.get('eventLink') as string,
        eventType: formData.get('eventType') as string,
      },
    });

    console.log(event);
  } catch (error) {
    console.error(error);
  }
};

export default createEvent;
