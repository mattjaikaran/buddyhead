import { NextPage } from 'next';
import { MainLayout } from './layout';
import { HeadingH1 } from '@/components/typography';

const Links: NextPage = () => {
  return (
    <MainLayout>
      {/* TODO: add head */}
      <div className="container mt-8">
        <HeadingH1 className="mt-8 mb-8">Links</HeadingH1>
        <p>Add links here</p>
      </div>
    </MainLayout>
  );
};

export default Links;
