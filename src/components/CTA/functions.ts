import { IconType } from "react-icons";

import { MdWork } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { GiReceiveMoney, GiGlassCelebration } from "react-icons/gi";

interface FunctionItem {
  heading: string;
  para: string;
  svg: IconType,
  link: string;
}

const functions: FunctionItem[] = [
  {
    heading: 'Alumni Directory',
    para: 'Search and connect with alumni by graduation year, field of study, industry, or location.',
    svg: FaNetworkWired,
    link: ''
  },
  {
    heading: 'Networking Hub',
    para: 'Connect with alumni based on interests, professions, and location to enhance your professional network.',
    svg: IoLogoWechat,
    link: ''
  },
  {
    heading: 'Job Portal',
    para: 'Explore glorious career opportunities and post job openings within the strongest alumni community.',
    svg: MdWork,
    link: ''
  },
  {
    heading: 'Success Story',
    para: 'Showcase your achievements and inspire others by sharing your success story with the alumni community.',
    svg: FaCrown,
    link: ''
  },
  {
    heading: 'Events and Reunions',
    para: 'Register for and participate in alumni events, reunions, and workshops to stay engaged and connected.',
    svg: GiGlassCelebration,
    link: ''
  },
  {
    heading: 'Donation Portal',
    para: 'Contribute securely to support college projects and initiatives with simple online donations.',
    svg: GiReceiveMoney,
    link: ''
  },
];

export default functions;
