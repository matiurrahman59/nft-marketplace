import Image from 'next/image';
import React from 'react';

//////////////////////////////////////////////////////////////
// Internal Imports
import { workFlow } from '@/dummy-data';
import { SectionHeader } from '.';

const WorkflowSection = () => {
  return (
    <section className='section-padding'>
      {/* Heading text */}
      <SectionHeader
        headerTitle='How it works'
        text='Find out how to get started'
      />

      {/* WorkFlow */}
      <div className='  grid gap-5 md:grid-cols-3 md:gap-[30px] '>
        {workFlow.map((item) => (
          <div
            key={item.id}
            className='  flex items-center justify-center gap-5 rounded-[20px] bg-bgSecondary  p-5 md:flex-col md:p-0 '
          >
            {/* Image Container */}
            <Image
              src={item.imgUrl}
              styles={{
                width: 'auto',
                height: 'auto',
              }}
              priority
              className='h-[100px] w-[100px] object-fill md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px]'
              alt='workflow image '
            />

            {/* Workflow Details Container */}
            <div className=' md:p-5 md:pb-[30px] lg:p-[30px] lg:pt-[20px]'>
              <h5 className='mb-[10px] md:text-center'>{item.title}</h5>
              <p className='  text-[12px] leading-[17px] opacity-80  md:text-center lg:text-base'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSection;
