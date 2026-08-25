import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react";
import { getBlogsByTags } from "@/lib/blog";

const ACHIEVEMENT_TAGS = ["prestasi", "achievement"];
const MAX_ACHIEVEMENTS = 3;

const NUMBER_COLORS = ["bg-blue-500", "bg-emerald-500", "bg-orange-500"];

const Achievements = async () => {
  const achievements = (await getBlogsByTags(ACHIEVEMENT_TAGS)).slice(
    0,
    MAX_ACHIEVEMENTS,
  );

  return (
    <section id="achievements" className="mx-auto max-w-screen-2xl px-5 py-20">
      <div data-aos="fade-up" className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-amber-300 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-amber-400 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          <Trophy className="h-3.5 w-3.5" />
          Achievements
        </div>
        <h2 className="mb-4 text-3xl font-black text-neutral-900 dark:text-white md:text-5xl">
          Milestones We&apos;re{" "}
          <span className="inline-block -rotate-2 border-2 border-black bg-red-500 px-2 py-1 text-white dark:border-white">
            Proud Of
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground md:text-lg">
          A track record built through years of dedication, collaboration, and a
          shared passion for technology.
        </p>
      </div>

      {achievements.length === 0 ? (
        <div data-aos="fade-up" className="mx-auto max-w-4xl rounded-2xl border-2 border-black bg-white py-16 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
          <p className="text-sm italic text-muted-foreground">
            Belum ada prestasi yang dipublikasikan.
          </p>
        </div>
      ) : (
        <div className="mx-6 max-w-4xl md:mx-auto">
          {achievements.map((blog, index) => {
            const year = new Date(blog.datePublish).getFullYear();
            const numberColor = NUMBER_COLORS[index % NUMBER_COLORS.length];

            return (
              <div key={blog.slug} data-aos="fade-up" data-aos-delay={index * 100}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group mb-4 flex flex-row items-start gap-3 rounded-2xl border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] sm:items-center sm:gap-6 sm:p-5"
                >
                  <span
                    className={`hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-black font-black text-white dark:border-white sm:flex sm:h-14 sm:w-14 sm:text-2xl ${numberColor}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 border-black bg-neutral-100 dark:border-white sm:h-16 sm:w-16">
                    {blog.cover ? (
                      <Image
                        src={blog.cover}
                        alt={blog.title}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-600/10 to-orange-500/10 text-red-600 dark:text-red-400">
                        <Trophy className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                    )}
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 sm:gap-2">
                    <h3 className="line-clamp-2 text-left text-sm font-bold leading-tight text-neutral-900 dark:text-white sm:text-base md:text-lg">
                      {blog.title}
                    </h3>
                    <span className="inline-flex flex-shrink-0 rounded-md border-2 border-black bg-amber-300 px-2 py-0.5 text-[10px] font-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] sm:text-xs">
                      {year}
                    </span>
                    <p className="hidden text-xs leading-relaxed text-muted-foreground sm:line-clamp-2 sm:text-sm">
                      {blog.description}
                    </p>
                  </div>

                  <ArrowUpRight className="hidden h-5 w-5 flex-shrink-0 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-red-600 group-hover:opacity-100 sm:block" />
                </Link>
              </div>
            );
          })}
        </div>
      )}

      <div data-aos="zoom-in" className="mt-8 flex justify-center">
        <Link
          href="/blogs?tag=achievement"
          className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-6 py-3 font-black uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-800 dark:text-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:bg-red-600 dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
        >
          See more achievements
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Achievements;
