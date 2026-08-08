"use client";
import React from "react";
import { Pin, QrCode, Sparkles, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useRouter } from "next/navigation";
import KeorProgram from "./KeorProgram";
import KeorTeam from "./KeorTeam";
import Image from "next/image";

const fotbar = "https://res.cloudinary.com/qjw4yfke/image/upload/v1786202664/Keor_ohubsl.webp";

const pillars = [
  {
    color: "bg-amber-100 dark:bg-amber-950/40 dark:border-amber-500/60 dark:text-amber-100 dark:shadow-amber-400/20",
    rotate: "-rotate-1",
    title: "Kaderisasi",
    description:
      "Recruiting, onboarding, and mentoring new members so every generation of FOSTI UMS grows stronger than the last.",
  },
  {
    color: "bg-pink-100 dark:bg-rose-950/40 dark:border-red-500 dark:text-rose-100 dark:shadow-rose-400/20",
    rotate: "rotate-1",
    title: "Leadership Training",
    description:
      "Equipping board members and coordinators with the skills to lead teams, run programs, and make sound decisions.",
  },
  {
    color: "bg-blue-100 dark:bg-blue-950/40 dark:border-blue-500/60 dark:text-blue-100 dark:shadow-blue-400/20",
    rotate: "-rotate-1",
    title: "Internal Bonding",
    description:
      "Building trust and camaraderie among members through shared activities, gatherings, and open communication.",
  },
];

const Keor = () => {
  const [activeTab, setActiveTab] = React.useState("programs");
  const router = useRouter();

  return (
    <div className="w-full">
      <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">

        <Star
          className="pointer-events-none absolute right-6 top-6 z-10 h-8 w-8 rotate-12 scale-75 text-amber-400 sm:right-16 sm:top-16 sm:scale-100"
          fill="currentColor"
        />
        <Sparkles className="pointer-events-none absolute bottom-6 left-4 z-10 h-7 w-7 -rotate-12 scale-75 text-red-400 sm:bottom-24 sm:left-12 sm:scale-100" />

        <span className="hidden -rotate-12 rounded-full border-2 border-black bg-purple-200 px-4 py-1.5 text-sm font-bold text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-100 lg:absolute lg:left-10 lg:top-32 lg:z-10 lg:block xl:left-20">
          🔑 Internal Affairs
        </span>
        <span className="hidden rotate-12 rounded-xl border-2 border-black dark:border-gray-400 bg-white px-3 py-1.5 font-mono text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-100 dark:bg-neutral-800 lg:absolute lg:left-12 lg:top-3/4 lg:z-10 lg:block lg:-translate-y-1/2 xl:left-24">
          // EST. 2008 • FOSTI UMS
        </span>
        <span className="hidden rotate-12 rounded-full border-2 border-black bg-pink-200 px-4 py-1.5 text-sm font-bold text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-100 lg:absolute lg:right-10 lg:top-1/2 lg:z-10 lg:block xl:right-20">
          📌 Kaderisasi HQ
        </span>

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-6 inline-flex -rotate-2 items-center gap-1.5 rounded-lg border-2 border-black bg-amber-300 px-3 py-1.5 text-xs font-black uppercase tracking-tight text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-100 sm:text-sm">
            📌 #1 People &amp; Leadership HQ
          </span>

          <h1 className="text-5xl font-black uppercase leading-none tracking-tighter text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Organizational
            <br />
            <span className="text-red-500">Development</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm font-semibold text-neutral-600 dark:text-neutral-400 sm:text-base">
            Fosters relationships among members and prepares new prospective
            members of FOSTI UMS.
          </p>
        </div>

        <div className="relative mx-auto mt-12 w-full max-w-2xl">
          <span className="absolute -left-3 -top-6 z-20 -rotate-6 rounded-lg border-2 border-black bg-gray-300 px-3 py-1.5 text-xs font-black uppercase tracking-tight text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-300 sm:-left-6 sm:text-sm">
            👥 Build Talents, Grow Leaders
          </span>

          <span className="absolute -bottom-6 -right-3 z-20 rotate-3 rounded-full border-2 border-black bg-purple-200 px-3 py-1.5 text-xs font-bold text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:-right-6 sm:text-sm">
            🤝 Solid, Adaptive, Progressive
          </span>

          <div className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-100 dark:bg-neutral-900 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)]">
            <div className="relative border-b-2 border-black bg-neutral-900 px-5 pb-3 pt-6 dark:border-neutral-100">
              <div className="absolute left-1/2 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-black bg-neutral-100" />
              <div className="mt-1 flex items-center justify-between gap-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-white/80 sm:text-xs">
                  Fosti UMS • Official Membership Pass
                </span>
                <QrCode className="h-5 w-5 shrink-0 text-white/90" />
              </div>
            </div>

            <div className="p-5">
              <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-xl border-2 border-black dark:border-neutral-100">
                <Image
                  src={fotbar}
                  alt="Keor Fotbar"
                  fill
                  sizes="(max-width: 768px) 90vw, 672px"
                  className="object-cover"
                />
                <span className="absolute bottom-3 right-3 -rotate-12 rounded border-2 border-red-600 bg-white/85 px-2 py-1 text-[0.6rem] font-black uppercase tracking-widest text-red-600 dark:bg-neutral-900/85">
                  [ Verified Leaders ]
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-dashed border-black/20 px-5 py-3 dark:border-white/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                Role: HR &amp; Leadership
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
                Status: Active Board
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            About the Division
          </h2>
          <p className="text-sm font-semibold leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
            The Organizational division is responsible for fostering strong
            relationships among members, ensuring effective communication,
            and preparing new prospective members to contribute actively to
            FOSTI UMS.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`relative flex flex-col gap-3 rounded-xl border-2 border-black ${pillar.color} ${pillar.rotate} p-6 pt-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 dark:border-neutral-100`}
            >
              <Pin
                className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 -rotate-45 text-red-700 dark:text-yellow-300"
                fill="currentColor"
              />
              <h3 className="text-center text-lg font-black uppercase tracking-tight text-neutral-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-center text-sm font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 pb-20 sm:px-6 lg:px-8">
        <Tabs
          defaultValue="programs"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="mb-8 flex justify-center sm:justify-start">
            <TabsList className="inline-flex gap-1 rounded-full border-2 border-neutral-900 bg-white p-1 dark:border-neutral-100 dark:bg-neutral-900">
              <TabsTrigger
                value="programs"
                className="rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide text-neutral-600 transition-colors duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white dark:text-white"
              >
                Programs
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide text-neutral-600 transition-colors duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white dark:text-white"
              >
                Meet The Team
              </TabsTrigger>
            </TabsList>
          </div>

          <KeorProgram />
          <KeorTeam />
        </Tabs>
      </section>
    </div>
  );
};

export default Keor;