import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Industries',
      links: [
        {
          text: 'Prediction Markets',
          href: getPermalink('/industries/prediction-markets'),
        },
        {
          text: 'Snow & Winter Operations',
          href: getPermalink('/industries/snow-winter-operations'),
        },
        {
          text: 'Energy & Utilities',
          href: getPermalink('/industries/energy-utilities'),
        },
        {
          text: 'Commodity Trading',
          href: getPermalink('/industries/commodity-trading'),
        },
        {
          text: 'Travel & Outdoors',
          href: getPermalink('/industries/travel-outdoors'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get in Touch', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'AetherisWx',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Industries',
      links: [
        { text: 'Prediction Markets', href: getPermalink('/industries/prediction-markets') },
        { text: 'Snow & Winter Operations', href: getPermalink('/industries/snow-winter-operations') },
        { text: 'Energy & Utilities', href: getPermalink('/industries/energy-utilities') },
        { text: 'Commodity Trading', href: getPermalink('/industries/commodity-trading') },
        { text: 'Travel & Outdoors', href: getPermalink('/industries/travel-outdoors') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/nicholas-rodick' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} AetherisWx. All rights reserved.
  `,
};
