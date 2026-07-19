import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { BlogSchema, type BlogFrontmatter } from "./blogs.shema";

const BLOG_PATH = path.join(process.cwd(), "src/content/blogs");
export interface Blog extends BlogFrontmatter {
  slug: string;
  content: string;
}

function readBlog(fileName: string): Blog {
  const slug = fileName.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(BLOG_PATH, fileName), "utf8");
  const { data, content } = matter(source);
  const frontmatter = BlogSchema.parse(data);

  return {
    slug,
    content,
    ...frontmatter,
  };
}

export function getAllBlogs(): Blog[] {
  const files = fs
    .readdirSync(BLOG_PATH)
    .filter((file) => file.endsWith(".mdx"));

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
  const file = `${slug}.mdx`;
  const fullPath = path.join(BLOG_PATH, file);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return readBlog(file);
}

export function getAllTags(): string[] {
  const blogs = getAllBlogs();
  const tagsSet = new Set<string>();

  blogs.forEach((blog) => {
    if (blog.tags && Array.isArray(blog.tags)) {
      blog.tags.forEach((tag) => {
        tagsSet.add(tag.toLowerCase());
      });
    }
  });

  return Array.from(tagsSet).sort();
}
