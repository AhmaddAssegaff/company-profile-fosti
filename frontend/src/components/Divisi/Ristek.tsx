"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import RistekPrograms from "./RistekPrograms";
import RistekTeam from "./RistekTeam";
import { Cpu, GitBranch, Terminal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const fotbar = "https://res.cloudinary.com/qjw4yfke/image/upload/v1786202665/Ristek_alb6mn.webp";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700", "500"],
});
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const pillars = [
  {
    fileTab: "open_source.ts",
    tag: "// 01. OS_CULTURE",
    title: "Open-Source Culture & Training",
    description:
      "Cultivating a strong open-source ecosystem by training members in Git workflows, collaborative code contribution, and practical software engineering skills.",
    lang: "TypeScript",
  },
  {
    fileTab: "sandbox_rnd.py",
    tag: "// 02. APPLIED_RESEARCH",
    title: "Collaborative R&D & Prototyping",
    description:
      "Providing a collaborative sandbox playground where members experiment with cutting-edge tech, test ideas, and turn research into functional prototypes.",
    lang: "Python",
  },
  {
    fileTab: "tech_empowerment.rs",
    tag: "// 03. INCLUSIVITY_&_TALENT",
    title: "Inclusive Talent Empowerment",
    description:
      "Fostering an inclusive tech community through empowering initiatives for women in tech and flagship events that showcase technological excellence across domains.",
    lang: "Rust",
  },
];

const lineCol = ["Ln 14, Col 3", "Ln 27, Col 9", "Ln 08, Col 1"];

const Ristek = () => {
  const [activeTab, setActiveTab] = React.useState("programs");
  const router = useRouter();

  return (
    <div className="w-full">
      <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-x-hidden px-4 sm:px-6 lg:px-8">

        <Terminal className="pointer-events-none absolute left-8 top-6 z-10 h-8 w-8 -rotate-6 scale-75 text-neutral-800 dark:text-neutral-300 sm:right-14 sm:top-16 sm:scale-100" />
        <Cpu className="pointer-events-none absolute bottom-6 left-4 z-10 h-7 w-7 rotate-12 scale-75 text-neutral-800 dark:text-neutral-300 sm:bottom-20 sm:left-10 sm:scale-100" />
        <GitBranch className="pointer-events-none absolute bottom-10 right-6 z-10 h-7 w-7 -rotate-6 text-neutral-800 dark:text-neutral-300 lg:block" />

        <div className="mx-auto flex w-full max-w-screen-2xl flex-col-reverse items-center gap-14 pb-16 pt-16 md:pb-0 lg:flex-row lg:items-center lg:gap-14">
          <div className="flex w-full flex-1 items-center justify-center py-6 px-2 md:px-0">
            <div className="relative w-full max-w-xl -rotate-1 transition-transform duration-300 hover:rotate-0 lg:max-w-2xl">
              <span
                className={`${jetbrains.className} absolute -left-3 -top-7 z-20 -rotate-3 rounded-lg border-2 border-black dark:border-gray-500 bg-neutral-900 px-3 py-1.5 text-xs font-bold text-green-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-300 sm:-left-6 sm:text-sm`}
              >
                git: main* 🟢
              </span>

              <div className="overflow-hidden rounded-t-2xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-100 dark:bg-neutral-900 dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] ">
                <div className="flex items-center gap-3 border-b-2 border-black bg-neutral-100 px-4 py-2.5 dark:border-neutral-100 dark:bg-neutral-800">
                  <div className="flex shrink-0 gap-1.5">
                    <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
                    <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
                  </div>
                  <span
                    className={`${jetbrains.className} mx-auto truncate text-[0.65rem] text-neutral-600 dark:text-neutral-300 sm:text-xs`}
                  >
                    localhost:3000/fosti-research
                  </span>
                  <span
                    className={`${jetbrains.className} hidden shrink-0 items-center gap-1 rounded-full border border-black/30 bg-green-100 px-2 py-0.5 text-[0.6rem] font-bold text-green-700 dark:bg-green-900/40 dark:text-green-400 sm:inline-flex`}
                  >
                    🟢 Compiled
                  </span>
                </div>

                <div className="relative aspect-video w-full border-y-2 border-black dark:border-neutral-100">
                  <Image
                    src={fotbar}
                    alt="Ristek Fotbar"
                    fill
                    sizes="(max-width: 1024px) 90vw, 672px"
                    className="object-cover"
                  />
                </div>

                <div className="bg-neutral-900 px-4 py-2.5">
                  <p
                    className={`${jetbrains.className} truncate text-[0.65rem] text-green-400 sm:text-xs`}
                  >
                    <span className="text-neutral-500">$</span> npm run
                    innovate --div=ristek
                    <span className="ml-1 animate-pulse text-green-400">
                      _
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative mx-auto h-4 w-[92%] rounded-b-xl border-2 border-t-0 border-black bg-neutral-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-100 dark:bg-neutral-700 sm:h-5">
                <div className="absolute left-1/2 top-0 h-1.5 w-10 -translate-x-1/2 rounded-b-md bg-neutral-500 dark:bg-neutral-500 sm:w-14" />
              </div>
            </div>
          </div>

          <div className="relative flex-1 text-center lg:text-left">
            <span
              className={`${jetbrains.className} absolute -top-8 right-2 z-20 rotate-6 rounded-lg border-2 border-black bg-amber-300 px-3 py-1.5 text-xs font-black uppercase tracking-tight text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-300 sm:-top-10 sm:right-0 sm:text-sm lg:right-4`}
            >
              💻 #1 Innovation Lab
            </span>

            <h1
              className={`${spaceGrotesk.className} text-5xl uppercase leading-[0.9] tracking-tighter text-neutral-900 dark:text-white sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]`}
            >
              Research
              <br />
              <span className="bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
                &amp; Technology
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm font-semibold text-neutral-600 dark:text-neutral-400 sm:text-base lg:mx-0">
              Conducts research and development of open-source technology for
              FOSTI and the community.
            </p>

            <span
              className={`${jetbrains.className} mt-4 inline-flex -rotate-2 items-center gap-1.5 rounded-full border-2 border-black bg-cyan-200 px-3 py-1 text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-300 sm:text-sm`}
            >
              ⚡ DRIVING DIGITAL INNOVATION
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={`${spaceGrotesk.className} mb-4 text-2xl uppercase tracking-tight text-neutral-900 dark:text-white sm:text-3xl`}
          >
            About the Division
          </h2>
          <p className="text-sm font-semibold leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
            The Research and Technology division conducts research and
            development of open-source technology, exploring new tools and
            ideas to keep FOSTI UMS and the community at the edge of
            innovation.
          </p>
        </div>
 
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const [titleFirst, ...titleRestWords] = pillar.title.split(" ");
            const titleRest = titleRestWords.join(" ");
            return (
              <div
                key={pillar.fileTab}
                className="flex flex-col overflow-hidden rounded-2xl border-2 border-black dark:border-gray-500 bg-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-gray-100"
              >
                <div
                  className={`${jetbrains.className} flex items-center justify-between border-b-2 border-black bg-neutral-800 px-4 py-2 text-xs text-neutral-200 sm:text-sm`}
                >
                  <span className="truncate">📄 {pillar.fileTab}</span>
                  <span className="ml-2 flex h-4 w-4 shrink-0 items-center justify-center rounded text-neutral-500 hover:text-white">
                    <X className="h-3 w-3" />
                  </span>
                </div>
 
                <div className="flex flex-1 gap-3 p-5">
                  <span
                    className={`${jetbrains.className} select-none text-xs text-neutral-600 sm:text-sm`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight">
                      <span className="text-yellow-300">{titleFirst}</span>{" "}
                      <span className="text-green-300">{titleRest}</span>
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-300">
                      {pillar.description}
                    </p>
                  </div>
                </div>
 
                <div
                  className={`${jetbrains.className} border-t-2 border-black bg-neutral-800 px-4 py-1.5 text-[0.65rem] text-neutral-400 sm:text-xs`}
                >
                  {lineCol[idx]} • UTF-8 • {pillar.lang}
                </div>
              </div>
            );
          })}
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

          <RistekPrograms />
          <RistekTeam />
        </Tabs>
      </section>
    </div>
  );
};

export default Ristek;