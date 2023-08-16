import { NextPage } from 'next';
import { MainLayout } from '../layout';
import { BlogCard } from '@/components/cards/blog-card';
import { HeadingH1 } from '@/components/typography';

const sampleData = [
  {
    id: 1,
    title: 'Blog Title 1',
    slug: 'blog-title-1',
    description: 'lorem ipsum 23rasdf',
    tags: 'Political, LA',
    date: '09/10/2023 - 8:25 PM',
  },
  {
    id: 2,
    title: 'Blog Title 2',
    slug: 'blog-title-2',
    description: 'here are some words',
    tags: 'Politics',
    date: '09/02/2023 - 12:31 PM',
  },
  {
    id: 3,
    title: 'Blog Title 3',
    slug: 'blog-title-3',
    description: 'And this was in there',
    tags: 'Mutual Aid, NYC',
    date: '08/30/2023 - 3:22 PM',
  },
  {
    id: 4,
    title: 'Blog Title 4',
    slug: 'blog-title-4',
    description: 'This band sucks',
    tags: 'Music Review',
    date: '08/29/2023 - 1:35 AM',
  },
  {
    id: 5,
    title: 'Blog Title 5',
    slug: 'blog-title-5',
    description: 'Are tankies correct? Yes, heres why..',
    tags: 'Misc',
    date: '08/27/2023 - 8:25 PM',
  },
  {
    id: 6,
    title: 'Blog Title 6',
    slug: 'blog-title-6',
    description: 'why are you talking shit?',
    tags: 'Misc',
    date: '08/25/2023 - 1:35 PM',
  },
];

const BlogAll: NextPage = () => {
  return (
    <MainLayout>
      {/* TODO: add head */}
      <div className="container">
        <HeadingH1 className="mt-8 mb-8">Blog</HeadingH1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {sampleData.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.slug}
              description={blog.description}
              tags={blog.tags}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogAll;
