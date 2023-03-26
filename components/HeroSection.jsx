import Image from 'next/image';
import { BiRocket } from 'react-icons/bi';

//////////////////////////////////////////////////////////////
// Internal Imports
import { salesDetails } from '@/dummy-data';
import { TextButton } from '.';
import bannerImg from '../public/images/Banner.png';

const HeroSection = () => {
  const salesData = (version) => {
    return (
      <div
        className={`flex ${
          version === 'mob' ? 'mt-10 justify-between' : ''
        }  gap-[30]`}
      >
        {salesDetails.map((item) => (
          <div key={item.id} className='flex flex-col md:w-[90px] lg:w-[150px]'>
            <span className='font-spaceMono font-bold md:text-[22px] md:leading-[35.2px]  lg:text-[28px] lg:leading-10'>
              {item.amount}k+
            </span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className='grid items-start gap-10 py-10 md:grid-cols-2  md:gap-[30px] md:py-20'>
      <div>
        {/* Section Title */}
        <h1 className='text-[28px] font-semibold leading-[39px] md:text-[38px] md:leading-[46px] lg:text-[67px] lg:leading-[74px] '>
          Discover <br className='hidden lg:flex' /> digital art & Collect NFTs
        </h1>
        {/* Section Text */}
        <h4 className='mt-[10px] leading-[35px] md:mt-5 lg:mt-5 lg:text-[22px]'>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more <br className='hidden lg:flex' /> than 20k NFT artists.
        </h4>

        {/* Button */}
        {/* Hidden in small screen */}
        <div className='hidden md:block'>
          <TextButton
            label='Get Started'
            containerSTyle=' bg-primaryColor rounded-[20px] md:my-[20px] lg:my-[30px]'
            prependChild={<BiRocket className='h-5 w-5' />}
            labelStyle='px-[50px] py-5'
          />

          {salesData('tab')}
        </div>
      </div>

      {/* Section Image Container */}
      <div>
        <Image
          src={bannerImg}
          alt='Space Walking NFT Image'
          priority
          styles={{
            width: 'auto',
            height: 'auto',
          }}
          className=' h-[206px] w-[315px] rounded-tl-3xl rounded-tr-3xl md:h-[221px] md:w-full lg:h-[401px]'
        />

        {/* Image Details */}
        <div className=' rounded-bl-[20px] rounded-br-[20px] bg-bgSecondary py-[22px] pl-5'>
          <span className=' text-[22px] font-semibold md:leading-8'>
            Space Walking
          </span>
          <div className='mt-[10px] flex gap-3'>
            <Image
              src='/images/top-creators/Creator-1.png'
              width='24'
              height='24'
              alt='User Image'
            />
            <span>Animakid</span>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <TextButton
          label='Get Started'
          containerSTyle=' bg-primaryColor rounded-[20px] md:my-[20px] lg:my-[30px] w-full'
          prependChild={<BiRocket className='h-5 w-5' />}
          labelStyle='px-[50px] py-5 '
        />

        {salesData('mob')}
      </div>
    </section>
  );
};

export default HeroSection;
