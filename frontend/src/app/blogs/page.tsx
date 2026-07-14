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
    <main className="min-h-screen bg-background px-6 py-20 text-foreground transition-colors duration-200 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList className="font-mono text-xs">
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

        <header className="mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 dark:bg-red-600" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              FOSTI UMS Journal
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            FOSTI Blog<span className="text-red-500 dark:text-red-600">.</span>
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Articles, and activity documentation regarding the world of open
            source and technology, presented by the Informatics Engineering Open
            Source Forum at Universitas Muhammadiyah Surakarta.
          </p>
        </header>

        <div className="divide-y divide-border/60">
          {blogs.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm italic text-muted-foreground">
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
                  className="group relative flex flex-col gap-4 py-8 transition-all duration-300 first:pt-0 last:pb-0 md:flex-row md:items-start md:justify-between md:gap-8"
                >
                  <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-muted-foreground md:w-1/4 md:flex-col md:items-start md:gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 opacity-60" />
                      <span>{formattedDate}</span>
                    </div>
                    <span className="text-border md:hidden">•</span>
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 opacity-60" />
                      <span className="max-w-[120px] truncate">
                        {blog.author}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-red-500 dark:group-hover:text-red-500">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0 z-0" />
                        <span className="relative z-10 flex items-center gap-1.5">
                          {blog.title}
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-2 text-red-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                      </Link>
                    </h2>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {blog.description}
                    </p>

                    <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md border border-border/40 bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
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
