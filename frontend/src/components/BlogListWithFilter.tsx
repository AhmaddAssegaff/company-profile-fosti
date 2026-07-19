"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, Check } from "lucide-react";
import type { Blog } from "@/lib/blog";

interface BlogListProps {
  allBlogs: Blog[];
  allTags: string[];
}

export default function BlogListWithFilter({
  allBlogs,
  allTags,
}: BlogListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredBlogs = useMemo(() => {
    if (selectedTags.length === 0) return allBlogs;
    return allBlogs.filter((blog) =>
      blog.tags.some((tag) => selectedTags.includes(tag.toLowerCase())),
    );
  }, [selectedTags, allBlogs]);

  return (
    <>
      {/* --- SECTION FILTER TAGS --- */}
      <section className="mb-12 border-b border-border/60 pb-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground lg:text-sm">
            Filter By Tags:
          </h3>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="text-xs text-red-500 hover:underline dark:text-red-400"
            >
              Reset Filter ({selectedTags.length})
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${isSelected
                  ? "border-red-500 bg-red-500/10 font-medium text-red-500 dark:border-red-600 dark:bg-red-600/10 dark:text-red-400"
                  : "border-border/60 bg-secondary/50 text-muted-foreground hover:border-border hover:bg-secondary"
                  }`}
              >
                <div
                  className={`flex h-3.5 w-3.5 items-center justify-center rounded border transition-all ${isSelected
                    ? "border-red-500 bg-red-500 text-white dark:border-red-600 dark:bg-red-600"
                    : "border-muted-foreground/40"
                    }`}
                >
                  {isSelected && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                </div>
                #{tag}
              </button>
            );
          })}
        </div>
      </section>

      {/* --- SECTION BLOG LIST --- */}
      <div className="divide-y divide-border/60">
        {filteredBlogs.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm italic text-muted-foreground lg:text-base">
              There are no articles matching that combination of filters.
            </p>
          </div>
        ) : (
          filteredBlogs.map((blog) => {
            const formattedDate = new Date(blog.datePublish).toLocaleDateString(
              "id-ID",
              { year: "numeric", month: "short", day: "numeric" },
            );

            return (
              <article
                key={blog.slug}
                className="group relative flex flex-col gap-4 py-9 transition-all duration-300 first:pt-0 last:pb-0 md:flex-row md:items-start md:gap-8 lg:gap-12 lg:py-11"
              >
                <span className="pointer-events-none absolute -left-4 top-9 hidden h-6 w-0.5 origin-top scale-y-0 bg-red-500 transition-transform duration-300 group-hover:scale-y-100 dark:bg-red-600 lg:block" />
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
                  <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-red-500 dark:group-hover:text-red-500 lg:text-2xl">
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
    </>
  );
}
