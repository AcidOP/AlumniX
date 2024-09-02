'use client';

import { useState } from 'react';

import Hamburger from './Hamburger';
import MobileNavbar from './MobileNav';

import navlinks from '@/components/Header/links';

import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';

type Link = {
  url: string;
  text: string;
  type?: 'auth' | 'notAuth' | undefined;
};

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const session = useSession();

  console.log(session.data);

  let links;

  if (session.data) {
    links = navlinks.filter(link => link.type === 'auth');
  } else {
    links = navlinks.filter(link => link.type === 'notAuth');
  }

  return (
    <div className='lg:hidden'>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <AnimatePresence mode='sync'>
        {isOpen && (
          <MobileNavbar toggle={toggle} links={links as Link[]} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
