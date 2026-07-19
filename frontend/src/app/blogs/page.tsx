import Link from "next/link";
import { getAllBlogs, getAllTags } from "@/lib/blog";
import BlogListWithFilter from "@/components/BlogListWithFilter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BlogsPage() {
  const allBlogs = getAllBlogs();
  const allTags = getAllTags();

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
            source and technology, presented by the Informatics Engineering Open
            Source Forum at Universitas Muhammadiyah Surakarta.
          </p>
        </header>

        <BlogListWithFilter allBlogs={allBlogs} allTags={allTags} />
      </div>
    </main>
  );
}
