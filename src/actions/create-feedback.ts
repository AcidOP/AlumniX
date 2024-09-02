'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';

const createFeedback = async (formData: FormData) => {
  const session = await auth();

  const ID = session?.user?.id;

  if (!ID) {
    throw new Error('Unauthorized');
  }

  try {
    await prisma.feedback.create({
      data: {
        userId: ID,
        message: formData.get('message') as string,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default createFeedback;
