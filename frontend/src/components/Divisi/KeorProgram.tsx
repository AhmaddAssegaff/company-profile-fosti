import React from "react";
import { TabsContent } from "../ui/tabs";
import { keorPrograms } from "@/data/KeorPrograms";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const KeorPrograms = () => {
  return (
    <TabsContent className="flex flex-col gap-5" value="programs">
      <h3 className="max-w-2xl text-center text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white sm:text-start sm:text-3xl">
        Programs
      </h3>
      <p className="max-w-3xl text-center text-sm font-semibold leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-start sm:text-base">
        Explore the various programs and initiatives led by the Research and
        Technology division. These programs aim to foster innovation,
        collaboration, and skill development within the community.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {keorPrograms.map((program, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-gray-300 dark:hover:border-gray-500 dark:hover:shadow-gray-300"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                src={program.src}
                alt={program.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute right-3 top-3 z-10 rounded-full border-2 border-black bg-amber-300 px-3 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ⚡ Proker #0{index + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4 p-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-black uppercase tracking-tight text-neutral-900 transition-colors group-hover:text-red-500 dark:text-white dark:group-hover:text-red-400 sm:text-xl">
                  {program.title}
                </h4>
                <p className="line-clamp-3 text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {program.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-black/15 pt-4 text-xs font-bold uppercase dark:border-neutral-700">
                <span className="font-mono text-neutral-400 dark:text-neutral-500">
                  #FOSTI_PROGRAM
                </span>
                <span className="inline-flex items-center gap-1 text-neutral-900 transition-transform group-hover:translate-x-0.5 dark:text-white">
                  {program.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default KeorPrograms;