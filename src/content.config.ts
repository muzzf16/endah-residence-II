import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the blog content collection
const blog = defineCollection({
  // Use glob loader to scan all md and mdx files under src/content/blog
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(['kpr', 'properti', 'investasi']),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    author: z.string().default('Tim Pemasaran Resmi'),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

export const collections = { blog };
