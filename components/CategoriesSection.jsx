import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//////////////////////////////////////////////////////////////
// Internal Imports
import { Categories } from '@/dummy-data';
import { SectionHeader } from '.';

const CategoriesSection = () => {
  return (
    <section className='section-padding'>
      {/* Heading text */}
      <SectionHeader headerTitle='Browse Categories' />
      <div className='grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-[30px]'>
        {Categories.map((item) => (
          <Link
            href='/about'
            key={item.id}
            className='group cursor-pointer  transition-all'
          >
            <div className='overflow-hidden rounded-[20px] bg-bgSecondary'>
              <div className=' relative '>
                <Image
                  src={item.bgImageUrl}
                  alt={`nft ${item.title} background image`}
                  styles={{
                    width: 'auto',
                    height: 'auto',
                  }}
                  priority
                  className='h-[142px] w-[148px] object-cover  group-hover:blur-sm md:w-full lg:h-[240px]'
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 hidden place-content-center group-hover:grid'>
                  <Image
                    src={item.iconImageUrl}
                    alt={`nft ${item.title} category icon image`}
                    width={80}
                    height={80}
                    className='lg:h-[100px] lg:w-[100px]'
                  />
                </div>
              </div>
              <div className='pl-[30px] pt-5 pb-[25px]'>
                <h5>{item.title}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
