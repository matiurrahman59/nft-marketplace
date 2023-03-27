import {
  CategoriesSection,
  FooterSection,
  HeroSection,
  NewsLetterSection,
  TrendingSection,
  WorkflowSection,
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='main-container px-[30px] font-sans md:px-[72px] lg:px-[115px]'>
        <HeroSection />
        <TrendingSection />
        <CategoriesSection />
        <WorkflowSection />
        <NewsLetterSection />
      </main>
    </>
  );
}
