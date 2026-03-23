import Parser from 'rss-parser';
import { socialLinks } from '@/data/personal';

type CustomItem = {
  title: string;
  link: string;
  book_image_url: string;
  book_large_image_url: string;
  author_name: string;
};

const parser = new Parser<any, CustomItem>({
  customFields: {
    item: ['book_image_url', 'book_large_image_url', 'author_name'],
  },
});

export type GoodreadsBook = {
  title: string;
  link: string;
  author: string;
  imageUrl: string | null;
};

export async function getCurrentlyReading(): Promise<GoodreadsBook[] | null> {
  if (!socialLinks.goodreadsRss) return null;
  
  try {
    const response = await fetch(socialLinks.goodreadsRss, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }
    
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    
    if (!feed.items || feed.items.length === 0) return null;
    
    return feed.items.map((item: any) => ({
      title: item.title || 'Unknown Title',
      link: item.link || '#',
      author: item.author_name || 'Unknown Author',
      imageUrl: item.book_large_image_url || item.book_image_url || null,
    }));
  } catch (error) {
    console.error('Error fetching Goodreads RSS:', error);
    return null;
  }
}
