import Box from './Box';
import functions from './functions';

const CTA = () => {
  return (
    <section className='body-font text-gray-600'>
      <div className='container mx-auto px-5 py-24'>
        {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
          <p className="hidden sm:block">Selfies Wayfarers</p>
        </h1> */}
        <div className='-m-4 flex flex-wrap'>
          {functions.map((func, index) => {
            return <Box key={index} {...func} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CTA;
