export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://vercel.com/johinthampi97/sitemap.xml',
    }
  }