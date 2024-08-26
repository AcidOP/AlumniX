import Link from 'next/link';
import { IconType } from 'react-icons';

interface IProps {
  heading: string;
  para: string;
  link: string;
  svg: IconType;
}

const Box = ({ heading, para, svg, link }: IProps) => {
  const Icon = svg;
  return (
    <div className='flex p-4 md:w-1/3'>
      <div className='mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700'>
        <Icon size={25} />
      </div>
      <div className='flex-grow pl-6'>
        <h2 className='title-font mb-2 text-lg font-bold uppercase text-gray-900'>
          {heading}
        </h2>
        <p className='text-base leading-relaxed'>{para}</p>
        <Link
          href={link}
          className='mt-6 inline-flex items-center font-medium text-green-800'
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Box;
