"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react";

interface Achievement {
  image: string;
  title: string;
  description: string;
  year?: string;
}

const achievements: Achievement[] = [
  {
    image: "/foto_member/DSC05703.png",
    title: "Best Student Organization",
    description:
      "Awarded by Universitas Muhammadiyah Surakarta for outstanding contribution to student technology development.",
    year: "2023",
  },
  {
    image: "/20250308_124553.webp",
    title: "National Hackathon Winner",
    description: "1st place in a national-level hackathon competition.",
    year: "2022",
  },
  {
    image: "/WhatsApp Image 2025-08-14 at 20.30.42_7671f735.png",
    title: "Regional IT Competition",
    description: "Top 3 finisher across Central Java universities.",
    year: "2021",
  },
  {
    image: "/IMG_5863.webp",
    title: "100+ Active Members",
    description:
      "Grown into one of the largest student tech communities on campus.",
  },
  {
    image: "/image1_blrfxf.webp",
    title: "10+ Work Programs",
    description: "Successfully executed every year across three divisions.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-screen-2xl px-5 py-20"
    >
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
          <Trophy className="h-3.5 w-3.5" />
          Achievements
        </div>
        <h2 className="mb-4 bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Milestones We&apos;re Proud Of
        </h2>
        <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground md:text-lg">
          A track record built through years of dedication, collaboration,
          and a shared passion for technology.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* decorative glow, matches the About Us video treatment */}
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-red-500/50 to-orange-400/50 blur-2xl" />

        <div className="divide-y divide-red-500 rounded-2xl border border-border bg-muted/90">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-muted/40 sm:gap-6 sm:p-6"
            >
              {/* editorial index number, desktop only */}
              <span className="hidden w-8 flex-shrink-0 select-none text-2xl font-bold text-muted-foreground/60 sm:block sm:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* thumbnail */}
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted sm:h-20 sm:w-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* text */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight sm:text-base md:text-lg">
                    {item.title}
                  </h3>
                  {item.year && (
                    <span className="flex-shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground sm:text-xs">
                      {item.year}
                    </span>
                  )}
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* hover arrow, desktop only */}
              <ArrowUpRight className="hidden h-5 w-5 flex-shrink-0 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-red-600 group-hover:opacity-100 sm:block" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 transition-colors duration-200 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
        >
          See more achievements
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Achievements;