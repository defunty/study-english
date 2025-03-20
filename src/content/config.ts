import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
import { defineCollection, z } from 'astro:content';

// 記事コレクションの定義
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

// コレクションをエクスポート
export const collections = {
  'articles': articlesCollection,
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
