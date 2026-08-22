import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unstable_cache } from "next/cache";

import { BlogSchema, type BlogFrontmatter } from "./blogs.shema";

const BLOG_EXTENSIONS = [".md", ".mdx"] as const;
const BLOG_PATH = path.join(process.cwd(), "src/content/blogs");
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface Blog extends BlogFrontmatter {
  slug: string;
  content: string;
}

function getSlug(fileName: string): string {
  return fileName.replace(/\.(md|mdx)$/, "");
}

function readBlog(fileName: string): Blog {
  const filePath = path.join(BLOG_PATH, fileName);
  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);
  const frontmatter = BlogSchema.parse(data);

  return {
    slug: getSlug(fileName),
    content,
    ...frontmatter,
  };
}

const getCachedBlogs = unstable_cache(
  async (): Promise<Blog[]> => {
    const files = fs
      .readdirSync(BLOG_PATH)
      .filter((file) =>
        BLOG_EXTENSIONS.some((extension) => file.endsWith(extension)),
      );

    return files
      .map(readBlog)
      .sort(
        (a, b) =>
          new Date(b.datePublish).getTime() - new Date(a.datePublish).getTime(),
      );
  },
  ["blogs"],
  {
    revalidate: 3600,
    tags: ["blogs"],
  },
);

export async function getAllBlogs(): Promise<Blog[]> {
  return getCachedBlogs();
}

export async function getBlogsByTags(tags: string[]): Promise<Blog[]> {
  const normalizedTags = tags.map((tag) => tag.toLowerCase());
  const blogs = await getAllBlogs();

  return blogs.filter((blog) =>
    blog.tags.some((tag) => normalizedTags.includes(tag.toLowerCase())),
  );
}

export function getBlogBySlug(slug: string): Blog | null {
  if (!SLUG_REGEX.test(slug)) {
    return null;
  }

  for (const ext of BLOG_EXTENSIONS) {
    const file = `${slug}${ext}`;
    const fullPath = path.join(BLOG_PATH, file);

    if (fs.existsSync(fullPath)) {
      return readBlog(file);
    }
  }

  return null;
}

export async function getAllTags(): Promise<string[]> {
  const tags = new Set<string>();
  const blogs = await getAllBlogs();

  for (const blog of blogs) {
    for (const tag of blog.tags) {
      tags.add(tag.toLowerCase());
    }
  }

  return Array.from(tags).sort();
}

export async function getBlogsBySearch(query: string): Promise<Blog[]> {
  const normalizedQuery = query.trim().toLowerCase();

  const blogs = await getAllBlogs();

  if (!normalizedQuery) {
    return blogs;
  }

  return blogs.filter((blog) => {
    const searchableContent = [
      blog.title,
      blog.description,
      blog.content,
      ...blog.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(normalizedQuery);
  });
}
