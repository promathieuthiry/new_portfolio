import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string }) {
  return rss({
    // The title, description and site URL are required
    title: 'Mathieu Thiry Blog',
    description: 'Stay updated with the latest projects and insights from Mathieu Thiry, a front-end developer specializing in React and TypeScript.',
    site: context.site,
    
    // Items are your blog posts/articles
    items:  (await getCollection('post')).map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/post/${post.slug}/`,
      categories: post.data.tags,
    })),
    
    // Optional custom XML
    customData: `<language>en-us</language>`,
  });
}