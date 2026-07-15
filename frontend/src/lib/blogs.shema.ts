import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  datePublish: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  published: z.boolean(),
});

export type BlogFrontmatter = z.infer<typeof BlogSchema>;
