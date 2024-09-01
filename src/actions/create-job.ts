'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';

const createJob = async (formData: FormData) => {
  const session = await auth();

  const ID = session?.user?.id;

  if (!ID) {
    throw new Error('Unauthorized');
  }

  try {
    const post = await prisma.jobPosting.create({
      data: {
        userId: ID,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        companyName: formData.get('companyName') as string,
        location: formData.get('location') as string,
        salaryRange: formData.get('salaryRange') as string,
        jobType: formData.get('jobType') as string,
        applicationLink: formData.get('applicationLink') as string,
        expiresAt: new Date(formData.get('expiresAt') as string),
      },
    });

    console.log(post);
  } catch (error) {
    console.error(error);
  }
};

export default createJob;
