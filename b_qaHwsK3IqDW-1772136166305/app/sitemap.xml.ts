import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com';
  const pages = ['', '/about', '/skills', '/projects', '/experience', '/education', '/contact'];

  const urls = pages
    .map((page) => {
      const path = page === '' ? '' : page;
      return `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
