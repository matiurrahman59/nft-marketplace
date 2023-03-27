import Image from 'next/image';
import React from 'react';

//////////////////////////////////////////////////////////////
// Internal Imports
import { EmailFormInput, TextButton } from '.';
import newsletterImage from '../public/images/NewsLetter.png';

const NewsLetterSection = () => {
  // newsletter form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted...');
  };
  return (
    <section className='mt-10 mb-20 rounded-[20px] font-sans md:bg-bgSecondary md:p-10 lg:p-[60px]'>
      <div className='grid gap-[30px] md:grid-cols-2 md:gap-[30px] lg:gap-[80px]'>
        <Image
          src={newsletterImage}
          styles={{
            width: 'auto',
            height: 'auto',
          }}
          alt='Newsletter image'
          priority
          className='h-[255px] w-full rounded-[20px] object-fill md:h-[280px] lg:h-[310px] '
        />
        <div>
          <h5 className='text-[28px] font-semibold capitalize leading-10 lg:text-[38px] lg:leading-[46px] '>
            Join our weekly <br /> digest
          </h5>

          <p className='pt-[10px] opacity-80 lg:text-[22px] lg:leading-[35px]'>
            Get exclusive promotions & updates{' '}
            <br className='hidden lg:block' /> straight to your inbox.
          </p>

          <form
            onSubmit={formSubmitHandler}
            className='pt-10 lg:relative lg:flex lg:w-[420px]'
          >
            <input
              type='email'
              placeholder='Enter your email here'
              className='w-full rounded-[20px] py-3 pl-5 text-bgSecondary outline-none  lg:py-[19px]'
            />
            <TextButton
              buttonType='submit'
              label='Subscribe'
              containerSTyle='bg-primaryColor lg:absolute mt-4 lg:mt-0 lg:right-0 lg:w-0 w-full lg:w-auto rounded-[20px] '
              labelStyle='lg:py-[19px] py-[12px] px-[50px]'
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
