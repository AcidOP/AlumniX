import DonationBox from '@/components/DonationBox';

const Donation = () => {
  return (
    <div className='mx-auto w-full'>
      <h1 className='text-center text-3xl font-bold'>Donation</h1>

      <p className='pb-10 pt-3 text-center'>
        Make a donation for various initiatives and projects undertaken by
        the university.
      </p>

      <div className='grid grid-cols-1 gap-4 px-5 lg:grid-cols-3 lg:gap-8 lg:px-0'>
        <DonationBox text='Rs. 1000' />
        <DonationBox text='Rs. 5000' selected />
        <DonationBox text='Rs. 10,000' />
      </div>

      <div className='mt-5 grid grid-cols-1 gap-4 px-5 lg:grid-cols-2 lg:gap-8 lg:px-0'>
        <DonationBox text='Rs. 1,00,000' />
        <DonationBox text='Other' />
      </div>

      <div className='mt-10 grid place-content-center'>
        <button className='rounded-md bg-green-700 px-7 py-3 text-lg text-white hover:bg-green-800'>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Donation;
