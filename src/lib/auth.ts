import prisma from './db';

import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Resend from 'next-auth/providers/resend';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    Resend({
      from: 'acid@anshumaan.art',
    }),
  ],
  debug: true,
});
