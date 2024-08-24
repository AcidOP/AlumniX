import Link from "next/link";
import { IconType } from "react-icons";

interface IProps {
  heading: string;
  para: string;
  link: string;
  svg: IconType
}

const Box = ({ heading, para, svg, link }: IProps) => {
  const Icon = svg;
  return (
    <div className="p-4 md:w-1/3 flex">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-4 flex-shrink-0">
        <Icon size={25} />
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg title-font font-bold uppercase mb-2">{heading}</h2>
        <p className="leading-relaxed text-base">{para}</p>
        <Link href={link} className="mt-6 text-green-800 font-medium inline-flex items-center">Learn More &rarr;</Link>
      </div>
    </div>
  )
}

export default Box
