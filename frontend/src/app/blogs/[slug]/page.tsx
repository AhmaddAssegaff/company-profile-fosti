import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog";
import { Calendar, User, ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { renderMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: new Date(blog.datePublish).toISOString(),
      authors: [blog.author],
      tags: blog.tags,
      ...(blog.cover && {
        images: [
          {
            url: blog.cover,
            alt: blog.title,
          },
        ],
      }),
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const mdx = await renderMarkdown(blog.content);
  const formattedDate = new Date(blog.datePublish).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#F4F4F0] px-4 py-12 text-black transition-colors duration-200 dark:bg-neutral-950 dark:text-neutral-100 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-7xl">
        <Breadcrumb className="mb-6 lg:mb-10">
          <BreadcrumbList className="inline-flex flex-wrap items-center gap-1.5 rounded-full border-2 border-black bg-white px-3.5 py-1.5 font-mono text-[11px] shadow-[3px_3px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:shadow-[3px_3px_0_0_#fff] sm:text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-black/60 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-black/30 dark:text-neutral-600" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/blogs"
                  className="text-black/60 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400"
                >
                  Blogs
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-black/30 dark:text-neutral-600" />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[140px] truncate font-bold text-black dark:text-white sm:max-w-[220px] lg:max-w-[320px]">
                {blog.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Link
          href="/blogs"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-xs font-bold text-black shadow-[3px_3px_0_0_#000] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-white dark:bg-neutral-900 dark:text-white dark:shadow-[3px_3px_0_0_#fff] dark:hover:shadow-[5px_5px_0_0_#fff] lg:mb-12 lg:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 lg:h-4 lg:w-4" />
          Back to articles
        </Link>

        {/* --- READING CARD --- */}
        <div className="mx-auto max-w-7xl rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:shadow-[8px_8px_0_0_#fff]">
          <div className="px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <header className="mb-10 space-y-5 border-b-4 border-black/10 pb-8 dark:border-white/10 lg:mb-14 lg:space-y-6 lg:pb-10">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-[#F4F4F0] px-3 py-1 font-mono text-[11px] font-semibold text-black dark:border-white dark:bg-neutral-800 dark:text-neutral-200 lg:text-xs">
                  <Calendar className="h-3.5 w-3.5 text-red-500" />
                  <span>{formattedDate}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-[#F4F4F0] px-3 py-1 font-mono text-[11px] font-semibold text-black dark:border-white dark:bg-neutral-800 dark:text-neutral-200 lg:text-xs">
                  <User className="h-3.5 w-3.5 text-red-500" />
                  <span>{blog.author}</span>
                </div>
              </div>

              <h1 className="text-3xl font-black leading-[1.05] tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                {blog.title}
              </h1>

              <p className="border-l-4 border-red-500 pl-4 text-base italic leading-relaxed text-black/65 dark:text-neutral-400 lg:text-lg">
                {blog.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1 lg:pt-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border-2 border-black bg-yellow-300 px-2.5 py-0.5 text-[11px] font-bold text-black dark:border-white dark:bg-yellow-400 lg:text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            <article
              className="
                prose prose-neutral max-w-none dark:prose-invert
                prose-base leading-relaxed lg:prose-lg lg:leading-loose

                prose-headings:font-black prose-headings:tracking-tight prose-headings:text-black dark:prose-headings:text-white
                prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-10
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b-4 prose-h2:border-black/10 prose-h2:pb-2 dark:prose-h2:border-white/10
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8

                prose-p:text-black/80 dark:prose-p:text-neutral-300

                prose-a:font-bold prose-a:text-black prose-a:underline prose-a:decoration-red-500 prose-a:decoration-4 prose-a:underline-offset-4 hover:prose-a:text-red-500 dark:prose-a:text-white dark:hover:prose-a:text-red-400

                prose-strong:font-extrabold prose-strong:text-black dark:prose-strong:text-white

                prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-[#F4F4F0] prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:text-black/75 dark:prose-blockquote:border-white dark:prose-blockquote:bg-neutral-800 dark:prose-blockquote:text-neutral-300

                prose-code:rounded-md prose-code:border-2 prose-code:border-black prose-code:bg-yellow-300 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.85em] prose-code:font-bold prose-code:text-black prose-code:before:content-none prose-code:after:content-none dark:prose-code:border-white dark:prose-code:bg-yellow-400

                prose-pre:rounded-xl prose-pre:border-4 prose-pre:border-black prose-pre:bg-neutral-900 prose-pre:shadow-[6px_6px_0_0_#000] dark:prose-pre:border-white dark:prose-pre:bg-black dark:prose-pre:shadow-[6px_6px_0_0_#fff]

                prose-img:rounded-xl prose-img:border-4 prose-img:border-black prose-img:shadow-[6px_6px_0_0_#000] dark:prose-img:border-white dark:prose-img:shadow-[6px_6px_0_0_#fff]

                prose-hr:border-t-4 prose-hr:border-black/10 dark:prose-hr:border-white/10

                prose-li:text-black/80 dark:prose-li:text-neutral-300
                prose-ul:marker:text-red-500 prose-ol:marker:text-red-500 prose-ol:marker:font-bold

                prose-table:border-4 prose-table:border-black dark:prose-table:border-white
                prose-th:border-2 prose-th:border-black prose-th:bg-[#F4F4F0] prose-th:font-extrabold dark:prose-th:border-white dark:prose-th:bg-neutral-800
                prose-td:border-2 prose-td:border-black/20 dark:prose-td:border-white/20
              "
            >
              {mdx}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}