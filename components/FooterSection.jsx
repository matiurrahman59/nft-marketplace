import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import {
  RxDiscordLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxVideo,
} from 'react-icons/rx';

//////////////////////////////////////////////////////////////
// Internal Imports
import { EmailFormInput, Logo, TextButton } from '.';

const FooterSection = () => {
  // newsletter email form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted...');
  };

  return (
    <>
      <div className='main-container px-[30px] py-10 font-sans md:px-[72px]  lg:px-[115px]'>
        <div className='flex flex-col gap-[30px] lg:flex-row lg:justify-between'>
          <div>
            {/* Footer logo */}
            <Logo labelStyle='font-spaceMono font-bold text-[22px] leading-[35px]' />
            <div className='pt-5 opacity-80 lg:pt-[30px]'>
              <p>
                NFT marketplace UI created <br className='hidden lg:block' />{' '}
                with Anima for Figma.
              </p>
              <div className='pt-5'>
                <p>Join our community</p>
                {/* Social media logo container */}
                <div className='flex items-center gap-[10px] pt-[15px] text-[#858584]'>
                  <RxDiscordLogo className='h-8 w-8 cursor-pointer' />
                  <RxVideo className='h-8 w-8 cursor-pointer' />
                  <RxTwitterLogo className='h-8 w-8 cursor-pointer' />
                  <RxInstagramLogo className='h-8 w-8 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>

          {/* Other page links */}
          <div>
            <h5 className='font-spaceMono font-bold leading-[35px]'>Explore</h5>
            <div className='flex flex-col gap-5 pt-5 opacity-80 lg:pt-[25px]'>
              <span>Marketplace</span>
              <span>Rankings</span>
              <span>Connect a wallet</span>
            </div>
          </div>

          {/* Newsletter form container*/}
          <EmailFormInput onSubmit={formSubmitHandler} />
        </div>
        {/* Bottom border line */}
        <div className='main-container my-[30px] h-[1px] bg-labelColor'>
          <p className='pt-5 text-[12px] opacity-80'>
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
