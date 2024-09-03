import updateProfile from '@/actions/update-profile';
import SetupProfile from '@/components/forms/SetupProfile';

const Account = () => {
  return (
    <div className='container mx-auto'>
      <form action={updateProfile} className='mx-auto max-w-3xl'>
        <SetupProfile />
      </form>
    </div>
  );
};

export default Account;
