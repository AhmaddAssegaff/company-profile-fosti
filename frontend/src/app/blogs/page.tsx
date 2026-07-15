import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import { Calendar, User, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BlogsPage() {
  const blogs = getAllBlogs();

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
              <BreadcrumbPage className="font-medium text-foreground">
                Blogs
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-16 max-w-2xl space-y-4 lg:mb-24 lg:space-y-5">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 dark:bg-red-600" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground lg:text-sm">
              FOSTI UMS Journal
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            FOSTI Blog<span className="text-red-500 dark:text-red-600">.</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Articles, and activity documentation regarding the world of open
            source and technology, presented by the Informatics Engineering
            Open Source Forum at Universitas Muhammadiyah Surakarta.
          </p>
        </header>

        <div className="divide-y divide-border/60">
          {blogs.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm italic text-muted-foreground lg:text-base">
                Belum ada artikel yang dipublikasikan.
              </p>
            </div>
          ) : (
            blogs.map((blog) => {
              const formattedDate = new Date(blog.datePublish).toLocaleDateString(
                "id-ID",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                },
              );

              return (
                <article
                  key={blog.slug}
                  className="group relative flex flex-col gap-4 py-9 transition-all duration-300 first:pt-0 last:pb-0 md:flex-row md:items-start md:gap-8 lg:gap-12 lg:py-11"
                >
                  {/* diff-style hover indicator — signature accent */}
                  <span className="pointer-events-none absolute -left-4 top-9 hidden h-6 w-0.5 origin-top scale-y-0 bg-red-500 transition-transform duration-300 group-hover:scale-y-100 lg:block dark:bg-red-600" />

                  <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-muted-foreground md:w-36 md:flex-col md:items-start md:gap-1.5 lg:w-44 lg:text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 opacity-60 lg:h-4 lg:w-4" />
                      <span>{formattedDate}</span>
                    </div>
                    <span className="text-border md:hidden">•</span>
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 opacity-60 lg:h-4 lg:w-4" />
                      <span className="max-w-[120px] truncate lg:max-w-[140px]">
                        {blog.author}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2.5 lg:max-w-2xl lg:space-y-3">
                    <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-red-500 lg:text-2xl dark:group-hover:text-red-500">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0 z-0" />
                        <span className="relative z-10 flex items-center gap-1.5">
                          {blog.title}
                          <ArrowRight className="h-4 w-4 shrink-0 -translate-x-2 text-red-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                      </Link>
                    </h2>

                    <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {blog.description}
                    </p>

                    <div className="relative z-10 flex flex-wrap gap-2 pt-2 lg:pt-3">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md border border-border/40 bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground lg:px-2.5 lg:py-1 lg:text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
