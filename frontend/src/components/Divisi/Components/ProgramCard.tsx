import Image from "next/image";
import { ImageOff } from "lucide-react";
import { type ProgramType } from "@/types/image";

export const ProgramCard = ({
  program,
  index,
}: {
  program: ProgramType;
  index: number;
}) => {
  const isComingSoon = program.date === "Coming Soon";

  const isInvalidSrc =
    !program.src ||
    (typeof program.src === "string" && program.src.trim() === "") ||
    (typeof program.src === "string" &&
      !program.src.startsWith("http") &&
      !program.src.startsWith("/"));

  const isImageMissing = !isComingSoon && isInvalidSrc;

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-gray-300 dark:hover:border-gray-500 dark:hover:shadow-gray-300">
      <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
        {isComingSoon ? (
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 dark:bg-black">
            <div className="flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:scale-105">
              <span className="text-xl font-black uppercase leading-none tracking-tighter text-neutral-800 sm:text-2xl">
                Coming Soon
              </span>
              <span className="text-2xl font-black uppercase leading-none tracking-tighter text-neutral-700 sm:text-3xl">
                Coming Soon
              </span>
              <span className="relative z-10 text-3xl font-black uppercase leading-none tracking-tighter text-white sm:text-4xl">
                Coming Soon
              </span>
              <span className="text-2xl font-black uppercase leading-none tracking-tighter text-neutral-700 sm:text-3xl">
                Coming Soon
              </span>
              <span className="text-xl font-black uppercase leading-none tracking-tighter text-neutral-800 sm:text-2xl">
                Coming Soon
              </span>
            </div>
            <div className="absolute bottom-[-5%] left-[-30%] z-20 flex w-[140%] rotate-[22deg] items-center justify-center border-y-4 border-black bg-yellow-400 py-1 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:rotate-[16deg] sm:py-1.5">
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] text-black sm:text-xs">
                STAY TUNED | STAY TUNED | STAY TUNED | STAY TUNED | STAY TUNED |
                STAY TUNED
              </span>
            </div>
            <div className="absolute bottom-[-5%] left-[-10%] z-10 flex w-[140%] -rotate-[22deg] items-center justify-center border-y-4 border-black bg-yellow-500 py-1 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-rotate-[16deg] sm:py-1.5">
              <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] text-black opacity-80 sm:text-xs">
                STAY TUNED | STAY TUNED | STAY TUNED | STAY TUNED | STAY TUNED |
                STAY TUNED
              </span>
            </div>
          </div>
        ) : isImageMissing ? (
          <div className="flex h-full w-full items-center justify-center bg-neutral-200 dark:bg-neutral-800">
            <div className="flex -rotate-2 flex-col items-center gap-2 rounded-xl border-4 border-dashed border-black bg-white/60 px-5 py-4 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:rotate-0 dark:border-white dark:bg-neutral-900/60 dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
              <ImageOff className="h-8 w-8" />
              <span className="text-center text-xs font-black uppercase tracking-widest sm:text-sm">
                Image Not Found
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={program.src}
            alt={program.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

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

        <div className="mt-4 flex items-start justify-between gap-6 border-t-2 border-dashed border-black/15 pt-4 text-xs font-bold uppercase dark:border-neutral-700">
          <span className="shrink-0 pt-0.5 font-mono text-neutral-400 dark:text-neutral-500">
            #FOSTI_PROGRAM
          </span>
          <span className="inline-flex items-center justify-end text-right leading-relaxed text-neutral-900 transition-transform group-hover:translate-x-0.5 dark:text-white">
            {program.date}
          </span>
        </div>
      </div>
    </div>
  );
};
