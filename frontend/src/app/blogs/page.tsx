import { Suspense } from "react";
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
import type { Metadata } from "next";
import Squares from "@/components/Squares/Squares";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel dan dokumentasi kegiatan seputar open source dan teknologi dari FOSTI UMS.",
  alternates: {
    canonical: "/blogs",
  },
};

function BlogListFallback() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-black/30 bg-white/60 px-6 py-16 text-center dark:border-white/30 dark:bg-neutral-900/60 sm:border-4">
      <p className="text-base font-bold text-black dark:text-white">
        Loading articles…
      </p>
    </div>
  );
}

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();
  const allTags = await getAllTags();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F4F4F0] text-black transition-colors duration-200 dark:bg-neutral-950 dark:text-white">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-[0.15]">
        <Squares
          speed={0.35}
          squareSize={30}
          direction="down"
          borderColor={"#bababa"}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-screen px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20 xl:px-16">
        <div data-aos="fade-down">
          <Breadcrumb className="mb-6 lg:mb-0">
            <BreadcrumbList className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-white px-3.5 py-1.5 text-xs font-semibold shadow-[3px_3px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:shadow-[3px_3px_0_0_#fff] sm:text-sm">
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
                <BreadcrumbPage className="font-bold text-black dark:text-white">
                  Blogs
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div data-aos="fade-right" className="lg:col-span-4">
            <header className="mb-10 max-w-2xl space-y-4 lg:sticky lg:top-16 lg:mb-0 lg:space-y-6 lg:pt-8">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black shadow-[3px_3px_0_0_#000] dark:border-white dark:bg-yellow-400 dark:shadow-[3px_3px_0_0_#fff] sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                FOSTI UMS Journal
              </span>

              <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                FOSTI Blog
                <span className="text-red-500">.</span>
              </h1>

              <p className="line-clamp-3 text-sm leading-relaxed text-black/70 dark:text-neutral-400 sm:text-base md:line-clamp-none lg:text-lg">
                Articles, and activity documentation regarding the world of
                open source and technology, presented by the Informatics
                Engineering Open Source Forum at Universitas Muhammadiyah
                Surakarta.
              </p>
            </header>
          </div>

          <div className="lg:col-span-8">
            <Suspense fallback={<BlogListFallback />}>
              <BlogListWithFilter allBlogs={allBlogs} allTags={allTags} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
