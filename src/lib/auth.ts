import prisma from './db';

import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Resend from 'next-auth/providers/resend';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [
    Resend({
      from: 'acid@anshumaan.art',
    }),
  ],
  debug: process.env.ENVIRON === 'DEVELOPMENT',
});
