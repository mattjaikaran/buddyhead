import { NextPage } from 'next';
import { MainLayout } from './layout';
import { HeadingH1 } from '@/components/typography';

const About: NextPage = () => {
  return (
    <MainLayout>
      {/* TODO: add head */}
      <div className="container">
        <HeadingH1 className="mt-8 mb-8">About</HeadingH1>
        <p>Text here</p>
      </div>
    </MainLayout>
  );
};

export default About;
