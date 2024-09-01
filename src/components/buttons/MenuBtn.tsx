import Link from 'next/link';

interface MenuProps {
  link: string;
  text: string;
}

const MenuBtn = ({ link, text }: MenuProps) => {
  return (
    <li>
      <Link
        href={link}
        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100'
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuBtn;
