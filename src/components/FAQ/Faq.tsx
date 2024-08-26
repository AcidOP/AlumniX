import cn from '@/utils/cn';

interface IProps {
  question: string;
  answer: string;
  className?: string;
}

const Faq = ({ question, answer, className }: IProps) => {
  return (
    <details
      className={cn(
        'mx-5 duration-300 open:bg-green-50 lg:mx-0',
        className,
      )}
    >
      <summary className='cursor-pointer bg-inherit px-5 py-3 text-lg font-medium'>
        {question}
      </summary>
      <div className='bg-white px-5 py-3 leading-relaxed'>
        <p>{answer}</p>
      </div>
    </details>
  );
};

export default Faq;
