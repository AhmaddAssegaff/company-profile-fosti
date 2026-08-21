import type { MetadataRoute } from "next";
import { env } from "@/env";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { BlogSchema } from "@/lib/blogs.shema";

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = String(env.SITE_URL);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/divisi/ristek`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/divisi/keor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/divisi/hubpub`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, "utf8");
      const { data } = matter(content);
      const blog = BlogSchema.parse(data);

      const slug = file.replace(/\.md$/, "");

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: blog.datePublish,
        changeFrequency: "monthly",
        priority: 0.7,
      };
    });

  return [...staticRoutes, ...blogRoutes];
}
