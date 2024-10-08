import { IconType } from 'react-icons';
import { FaCrown, FaNetworkWired } from 'react-icons/fa';
import { GiGlassCelebration, GiReceiveMoney } from 'react-icons/gi';
import { IoLogoWechat } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';

interface FunctionItem {
  heading: string;
  para: string;
  svg: IconType;
  link: string;
}

const functions: FunctionItem[] = [
  {
    heading: 'Alumni Directory',
    para: 'Search and connect with alumni by graduation year, field of study, industry, or location.',
    svg: FaNetworkWired,
    link: '/dashboard/alumni-directory',
  },
  {
    heading: 'Networking Hub',
    para: 'Connect with alumni based on interests, professions, and location to enhance your professional network.',
    svg: IoLogoWechat,
    link: '/dashboard/alumni-directory',
  },
  {
    heading: 'Job Portal',
    para: 'Explore glorious career opportunities and post job openings within the strongest alumni community.',
    svg: MdWork,
    link: '/dashboard/jobs',
  },
  {
    heading: 'Success Story',
    para: 'Showcase your achievements and inspire others by sharing your success story with the alumni community.',
    svg: FaCrown,
    link: '',
  },
  {
    heading: 'Events and Reunions',
    para: 'Register for and participate in alumni events, reunions, and workshops to stay engaged and connected.',
    svg: GiGlassCelebration,
    link: '/dashboard/events',
  },
  {
    heading: 'Donation Portal',
    para: 'Contribute securely to support college projects and initiatives with simple online donations.',
    svg: GiReceiveMoney,
    link: '/donate',
  },
];

export default functions;
