"use client";

import { useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Calendar, User, ArrowRight, Check, X, Search } from "lucide-react";
import type { Blog } from "@/lib/blog";

interface BlogListProps {
  allBlogs: Blog[];
  allTags: string[];
}

export default function BlogListWithFilter({
  allBlogs,
  allTags,
}: BlogListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- Source of truth: parsed directly from URL, validated against allTags ---
  const selectedTags = useMemo(() => {
    const raw = searchParams.get("tag");
    if (!raw) return [];

    const requested = raw
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    // Only allow tags that actually exist in allTags (prevents garbage/invalid query values)
    return requested.filter((t) => allTags.includes(t));
  }, [searchParams, allTags]);

  const updateTagsInUrl = useCallback(
    (nextTags: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      if (nextTags.length === 0) {
        params.delete("tag");
      } else {
        params.set("tag", nextTags.join(","));
      }

      const query = params.toString();
      router.replace(`${pathname}${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams],
  );

  const toggleTag = (tag: string) => {
    const normalized = tag.toLowerCase();
    const nextTags = selectedTags.includes(normalized)
      ? selectedTags.filter((t) => t !== normalized)
      : [...selectedTags, normalized];

    updateTagsInUrl(nextTags);
  };

  const resetTags = () => {
    updateTagsInUrl([]);
  };

  const filteredBlogs = useMemo(() => {
    if (selectedTags.length === 0) return allBlogs;
    return allBlogs.filter((blog) =>
      blog.tags.some((tag) => selectedTags.includes(tag.toLowerCase())),
    );
  }, [selectedTags, allBlogs]);

  return (
    <>
      {/* --- SECTION SEARCH BAR (UI ONLY — no state/logic wired up yet) --- */}
      <div className="group relative mb-4 sm:mb-6">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40 transition-colors duration-150 group-focus-within:text-red-500 dark:text-neutral-500 dark:group-focus-within:text-red-400 sm:left-5 sm:h-6 sm:w-6" />
        <input
          type="text"
          placeholder="Search articles…"
          className="w-full rounded-none border-2 border-black bg-white py-3 pl-10 pr-4 text-sm font-semibold text-black shadow-[4px_4px_0_0_#000] outline-none transition-all duration-150 placeholder:font-normal placeholder:text-black/40 focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[7px_7px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:text-white dark:shadow-[4px_4px_0_0_#fff] dark:placeholder:text-neutral-500 dark:focus:shadow-[7px_7px_0_0_#fff] sm:py-4 sm:pl-14 sm:text-base md:border-4 md:shadow-[6px_6px_0_0_#000] md:focus:shadow-[10px_10px_0_0_#000] md:text-lg dark:md:shadow-[6px_6px_0_0_#fff] dark:md:focus:shadow-[10px_10px_0_0_#fff]"
        />
      </div>

      {/* --- SECTION FILTER TAGS --- */}
      <section className="mb-8 rounded-2xl border-2 border-black bg-white p-3.5 shadow-[4px_4px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0_0_#fff] sm:mb-14 sm:p-6 md:border-4 md:shadow-[6px_6px_0_0_#000] dark:md:shadow-[6px_6px_0_0_#fff]">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 sm:mb-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wide text-black dark:text-white sm:text-base">
            Filter by tag
          </h3>
          {selectedTags.length > 0 && (
            <button
              onClick={resetTags}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-white px-3 py-1.5 text-xs font-bold text-black shadow-[3px_3px_0_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-white dark:bg-neutral-900 dark:text-white dark:shadow-[3px_3px_0_0_#fff] dark:hover:shadow-[4px_4px_0_0_#fff]"
            >
              <X className="h-3.5 w-3.5 stroke-[3]" />
              Reset ({selectedTags.length})
            </button>
          )}
        </div>

        {/* Mobile: horizontal swipe (flex-nowrap + overflow-x-auto), scrollbar hidden.
            Extra -mx/px pair gives the edge buttons room so their shadow isn't clipped
            by the section's own padding. Desktop (md+): reverts to normal wrap. */}
        <div className="-mx-3.5 flex flex-nowrap gap-2 overflow-x-auto px-3.5 py-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`inline-flex min-h-[38px] shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-black px-3.5 py-1.5 text-xs font-bold transition-all duration-150 sm:min-h-[42px] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${
                  isSelected
                    ? "-translate-y-0.5 bg-red-500 text-white shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff]"
                    : "bg-white text-black shadow-[3px_3px_0_0_#000] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:text-white dark:shadow-[3px_3px_0_0_#fff] dark:hover:shadow-[4px_4px_0_0_#fff]"
                }`}
              >
                {isSelected && (
                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white text-red-500 sm:h-4 sm:w-4">
                    <Check className="h-2.5 w-2.5 stroke-[4] sm:h-3 sm:w-3" />
                  </span>
                )}
                #{tag}
              </button>
            );
          })}
        </div>
      </section>

      {/* --- SECTION BLOG LIST --- */}
      <div className="flex flex-col gap-4 sm:gap-7">
        {filteredBlogs.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-black/30 bg-white/60 px-5 py-12 text-center dark:border-white/30 dark:bg-neutral-900/60 sm:border-4 sm:px-6 sm:py-16">
            <p className="text-sm font-bold text-black dark:text-white sm:text-base">
              No articles match this filter yet.
            </p>
            <p className="mt-1.5 text-xs text-black/60 dark:text-neutral-400 sm:text-sm">
              Try picking a different combination of tags.
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
                className="group relative rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0_0_#000] transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0_0_#fff] dark:hover:shadow-[8px_8px_0_0_#fff] sm:border-4 sm:shadow-[6px_6px_0_0_#000] sm:hover:shadow-[10px_10px_0_0_#000] dark:sm:shadow-[6px_6px_0_0_#fff] dark:sm:hover:shadow-[10px_10px_0_0_#fff]"
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="flex flex-col gap-3.5 p-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 sm:flex-row sm:items-start sm:gap-7 sm:p-7 lg:gap-9 lg:p-8"
                >
                  {/* Meta column */}
                  <div className="flex shrink-0 flex-row flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-black/60 dark:text-neutral-400 sm:w-32 sm:flex-col sm:items-start md:w-36 lg:w-40">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 shrink-0 text-red-500" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4 shrink-0 text-red-500" />
                      <span className="max-w-[140px] truncate">
                        {blog.author}
                      </span>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="min-w-0 flex-1 space-y-2.5 sm:space-y-3">
                    <h2 className="flex items-center gap-2 text-lg font-extrabold leading-snug tracking-tight text-black dark:text-white sm:text-2xl">
                      <span className="flex-1">{blog.title}</span>
                      <ArrowRight className="h-5 w-5 shrink-0 -translate-x-2 text-black opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 dark:text-white" />
                    </h2>
                    <p className="text-sm line-clamp-3 leading-relaxed text-black/65 dark:text-neutral-400 lg:text-base md:line-clamp-none">
                      {blog.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border-2 border-black bg-yellow-300 px-2.5 py-0.5 text-[11px] font-bold text-black dark:border-white dark:bg-yellow-400 lg:text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })
        )}
      </div>
    </>
  );
}