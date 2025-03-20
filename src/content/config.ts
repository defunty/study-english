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
};
