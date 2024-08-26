import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...input: ClassValue[]) => twMerge(clsx(input));

export default cn;
