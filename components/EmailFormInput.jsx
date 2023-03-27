//////////////////////////////////////////////////////////////
// Internal Imports
import { TextButton } from '.';

const EmailFormInput = ({ onSubmit }) => {
  return (
    <div>
      <h5 className='font-spaceMono font-bold capitalize leading-[35px]'>
        Join our weekly digest
      </h5>
      <div className='pt-5 lg:pt-[25px]'>
        <p className='opacity-80'>
          Get exclusive promotions & updates <br className='hidden lg:block' />{' '}
          straight to your inbox.
        </p>

        {/* NewsLetter Email input  */}
        <form
          className='pt-5 md:relative md:flex md:w-[420px]'
          onSubmit={onSubmit}
        >
          <input
            type='email'
            placeholder='Enter your email here'
            className='w-full rounded-[20px] py-3 pl-5 text-bgSecondary outline-none md:py-[19px]'
          />
          <TextButton
            buttonType='submit'
            label='Subscribe'
            containerSTyle='bg-primaryColor md:absolute mt-4 md:mt-0 md:right-0 md:w-0 w-full md:w-auto rounded-[20px] '
            labelStyle='py-[19px] px-[50px]'
          />
        </form>
      </div>
    </div>
  );
};

export default EmailFormInput;
