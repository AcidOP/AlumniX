import cn from '@/utils/cn';

const Box = ({ text, selected }: { text: string; selected?: boolean }) => {
  return (
    <div
      className={cn(
        'grid h-32 place-content-center rounded-lg border-2 border-green-300 bg-green-300 text-2xl font-medium text-gray-700 transition-all duration-200',
        selected
          ? 'border-black bg-green-600 text-3xl text-white shadow-2xl'
          : '',
      )}
    >
      {text}
    </div>
  );
};

export default Box;
