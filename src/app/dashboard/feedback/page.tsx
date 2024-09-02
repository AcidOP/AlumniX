import createFeedback from '@/actions/create-feedback';
import Feedback from '@/components/forms/Feedback';

const FeedbackForm = () => {
  return (
    <section className='body-font relative w-full text-gray-600'>
      <div className='container mx-auto px-5 pb-72'>
        <div className='mb-12 flex w-full flex-col text-center'>
          <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
            Feedback Form
          </h1>

          <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
            Anything you wish to say, is extremely important to us!
          </p>
        </div>

        <form
          action={createFeedback}
          className='mx-auto md:w-2/3 lg:w-1/2'
        >
          <Feedback />
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
