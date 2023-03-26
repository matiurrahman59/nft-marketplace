import Image from 'next/image';

//////////////////////////////////////////////////////////////
// Internal Imports
import { trendingCollection } from '@/dummy-data';
import { SectionHeader } from '.';

const TrendingSection = () => {
  return (
    <section className='section-padding'>
      {/* Heading text */}
      <SectionHeader
        headerTitle='Trending Collection'
        text='Checkout our weekly updated trending collection.'
      />

      {/* Image Container */}
      <div className='grid gap-10 md:grid-cols-2 md:gap-[30px] lg:grid-cols-3'>
        {trendingCollection.map((item) => (
          <div key={item.id}>
            <Image
              src={item.images[0]}
              priority
              styles={{
                width: 'auto',
                height: 'auto',
              }}
              className='h-[315px] w-[315px] rounded-2xl object-cover md:h-[330px]  md:w-full'
              alt={`trending collection image ${item.id}`}
            />
            <div className='my-[15px] grid grid-cols-3 gap-[15px]'>
              <Image
                src={item.images[1]}
                priority
                alt={`trending collection image ${item.id}`}
                styles={{
                  width: 'auto',
                  height: 'auto',
                }}
                className='h-[95px] w-[95px] rounded-2xl object-cover md:h-[100px] md:w-full'
              />
              <Image
                src={item.images[2]}
                priority
                alt={`trending collection image ${item.id}`}
                styles={{
                  width: 'auto',
                  height: 'auto',
                }}
                className='h-[95px] w-[95px] rounded-2xl object-cover md:h-[100px] md:w-full'
              />
              <div className='grid cursor-pointer place-content-center rounded-2xl bg-primaryColor font-spaceMono font-bold'>
                <span>1025+</span>
              </div>
            </div>

            <div>
              <span className='text-[22px] font-semibold leading-[30px]'>
                {item.title}
              </span>
              <div className='mt-[10px] flex gap-3'>
                <Image
                  src={item.avatar}
                  styles={{
                    width: 'auto',
                    height: 'auto',
                  }}
                  className='h-6 w-6 object-cover'
                  alt='user image'
                />

                <span>{item.userName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
