'use server';

import { signIn } from '@/lib/auth';

const magicLink = async (formData: FormData) => {
  await signIn('resend', formData);
};

export default magicLink;
