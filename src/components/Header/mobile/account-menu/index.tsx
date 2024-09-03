'use client';

import { useState } from 'react';

import Menu from './Menu';

import cn from '@/utils/cn';

import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { MdAccountCircle } from 'react-icons/md';

interface IProps {
  className?: string;
}

const DropdownMenu = ({ className }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const session = useSession();

  if (!session.data) {
    return null;
  }

  return (
    <div className={cn('relative lg:hidden', className)}>
      <MdAccountCircle onClick={toggle} size={35} />
      <AnimatePresence>
        {isOpen && <Menu toggle={toggle} />}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
