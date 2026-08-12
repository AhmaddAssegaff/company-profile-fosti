import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { BlogSchema, type BlogFrontmatter } from "./blogs.shema";

const BLOG_EXTENSIONS = [".md", ".mdx"] as const;
const BLOG_PATH = path.join(process.cwd(), "src/content/blogs");

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

export function getAllBlogs(): Blog[] {
  const files = fs
    .readdirSync(BLOG_PATH)
    .filter((file) =>
      BLOG_EXTENSIONS.some((extension) => file.endsWith(extension)),
    );

  return files
    .map(readBlog)
    .filter((blog) => blog.published)
    .sort(
      (a, b) =>
        new Date(b.datePublish).getTime() - new Date(a.datePublish).getTime(),
    );
}

export function getBlogsByTags(tags: string[]): Blog[] {
  const normalizedTags = tags.map((tag) => tag.toLowerCase());

  return getAllBlogs().filter((blog) =>
    blog.tags.some((tag) => normalizedTags.includes(tag.toLowerCase())),
  );
}

export function getBlogBySlug(slug: string): Blog | null {
  for (const extension of BLOG_EXTENSIONS) {
    const fileName = `${slug}${extension}`;
    const filePath = path.join(BLOG_PATH, fileName);

    if (fs.existsSync(filePath)) {
      return readBlog(fileName);
    }
  }

  return null;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  for (const blog of getAllBlogs()) {
    for (const tag of blog.tags) {
      tags.add(tag.toLowerCase());
    }
  }

  return Array.from(tags).sort();
}
