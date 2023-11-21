import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'OMNI Shop',
  titleTemplate: '%s | OMNI Shop',
  description:
    'Ecommerce built with T3 Stack : NextJS, TypeScript, tRPC, Prisma, NextAuth and styled with Tailwind CSS',
  canonical: 'https://omnishop.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://omnishop.vercel.app',
    siteName: 'OMNI Shop',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
