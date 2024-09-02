import Box from './Box';
import functions from './functions';

const CTA = () => {
  return (
    <section className='container mx-auto text-gray-600'>
      <div className='-m-4 flex flex-wrap px-5 py-24'>
        {functions.map((func, index) => {
          return <Box key={index} {...func} />;
        })}
      </div>
    </section>
  );
};

export default CTA;
