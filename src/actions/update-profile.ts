'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';

const updateProfile = async (formData: FormData) => {
  const session = await auth();

  const ID = session?.user?.id;

  if (!ID) {
    throw new Error('Unauthorized');
  }

  try {
    const profile = await prisma.metadata.create({
      data: {
        userId: ID,
        courseName: formData.get('courseName') as string,
        achievements: formData.get('achievements') as string,
        address: formData.get('address') as string,
        bio: formData.get('bio') as string,
        companyName: formData.get('companyName') as string,
        graduationYear: formData.get('graduationYear') as string,
        jobTitle: formData.get('jobTitle') as string,
        linkedInProfile: formData.get('linkedInProfile') + '' || '',
        phoneNumber: formData.get('phoneNumber') as string,
      },
    });

    console.log(profile);
  } catch (error) {
    console.error(error);
  }
};

export default updateProfile;
