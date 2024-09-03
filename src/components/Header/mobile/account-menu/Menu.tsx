import logout from '@/actions/logout';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Link = {
  url: string;
  text: string;
};

interface DropdownProps {
  toggle: () => void;
}

const Menu = ({ toggle }: DropdownProps) => {
  return (
    <motion.div
      initial={{ y: '-10%', scale: 0, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: '-10%', scale: 0, opacity: 0 }}
      className='absolute right-0 top-14 z-10 flex origin-top-right flex-col border-2 border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
    >
      <Link
        href='/account'
        className='block text-nowrap border-2 border-transparent px-4 py-2 text-base text-gray-700'
        onClick={toggle}
      >
        Account
      </Link>

      <form action={logout} onClick={toggle}>
        <button className='block text-nowrap border-2 border-transparent px-4 py-2 text-base text-gray-700'>
          Logout
        </button>
      </form>
    </motion.div>
  );
};

export default Menu;
