export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'BuddyHead',
  description: 'haha oh hell yeah',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Zine',
      href: '/blog',
    },
    {
      title: 'Record Reviews',
      href: '/blog',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    // {
    //   title: 'Store',
    //   href: 'https://buddyheadstore.myshopify.com/',
    // },
  ],
  links: {
    twitter: 'https://twitter.com/buddyhead',
    instagram: 'https://instagram.com/buddyhead',
  },
};
