import prisma from '@/lib/db';

const fetchJobs = async () => {
  const data = await prisma.jobPosting.findMany();
  return data;
};

export default fetchJobs;
