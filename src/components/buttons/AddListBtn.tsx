import cn from '@/utils/cn';

import Link from 'next/link';

interface BtnProps {
  href: string;
  label: string;
  className?: string;
}

const AddListBtn = ({ href, label, className }: BtnProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'mb-24 ml-3 rounded-lg bg-black px-5 py-2 text-white',
        className,
      )}
    >
      {label}
    </Link>
  );
};

export default AddListBtn;
