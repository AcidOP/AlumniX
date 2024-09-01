import prisma from '@/lib/db';

const fetchUser = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (user) return user;

  return null;
};

export default fetchUser;
