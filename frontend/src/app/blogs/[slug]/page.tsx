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
import { renderMDX } from "@/lib/mdx";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog || !blog.published) {
    notFound();
  }

  const mdx = await renderMDX(blog.content);
  const formattedDate = new Date(blog.datePublish).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground transition-colors duration-200 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        <Breadcrumb className="mb-10 lg:mb-14">
          <BreadcrumbList className="font-mono text-xs lg:text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blogs">Blogs</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[180px] truncate font-medium text-foreground sm:max-w-[240px] lg:max-w-[320px]">
                {blog.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Link
          href="/blogs"
          className="group mb-10 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-red-500 lg:mb-14 lg:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5 lg:h-4 lg:w-4" />
          Back to articles
        </Link>

        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <header className="mb-12 space-y-4 border-b border-border/60 pb-8 lg:mb-16 lg:space-y-5 lg:pb-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground lg:text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 opacity-60 lg:h-4 lg:w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 opacity-60 lg:h-4 lg:w-4" />
                <span>{blog.author}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>

            <p className="text-base italic leading-relaxed text-muted-foreground lg:text-lg">
              {blog.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 lg:pt-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-border/40 bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground lg:px-2.5 lg:py-1 lg:text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <article className="prose prose-neutral max-w-none dark:prose-invert lg:prose-lg">
            {mdx}
          </article>
        </div>
      </div>
    </main>
  );
}
