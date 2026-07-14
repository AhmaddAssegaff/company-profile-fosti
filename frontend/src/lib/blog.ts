import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { BlogSchema } from "./blogs.shema";

const BLOG_PATH = path.join(process.cwd(), "src/content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_PATH);

  const blogs = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const source = fs.readFileSync(path.join(BLOG_PATH, file), "utf8");
    const { data } = matter(source);
    const parsedData = BlogSchema.parse(data);

    return {
      slug,
      ...parsedData,
    };
  });

  return blogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
