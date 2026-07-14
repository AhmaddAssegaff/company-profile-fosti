import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  updated: z.string().optional(),
  author: z.string(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  published: z.boolean().default(false),
});

export type BlogFrontmatter = z.infer<typeof BlogSchema>;
