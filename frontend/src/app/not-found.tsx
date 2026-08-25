import Link from "next/link";
import {
  Home,
  ArrowUpRight,
  WifiOff,
  Radar,
  TerminalSquare,
  AlertTriangle,
} from "lucide-react";
import Squares from "@/components/Squares/Squares";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100dvh-4.5rem)] w-full items-center justify-center overflow-hidden bg-[#FAF9F8] px-4 py-10 transition-colors duration-300 dark:bg-[#0B0707] sm:px-8">
      <div className="absolute inset-0 z-0 dark:opacity-[0.15]">
        <Squares
          speed={0.25}
          squareSize={30}
          direction="down"
          borderColor={"#bababa"}
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-4 hidden items-center gap-2 border-[3px] border-[#0B0B0F] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0B0B0F] shadow-[4px_4px_0_0_#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#171313] dark:text-[#F2ECEC] dark:shadow-[4px_4px_0_0_#F2ECEC] sm:flex">
        <WifiOff
          className="h-3.5 w-3.5 text-[#C81D25] dark:text-[#FF4343]"
          strokeWidth={2.5}
        />
        conn_lost
      </div>
      <div
        className={`pointer-events-none absolute right-4 top-4 hidden items-center gap-2 border-[3px] border-[#0B0B0F] bg-[#C81D25] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#FF4343] dark:text-[#0B0707] dark:shadow-[4px_4px_0_0_#F2ECEC] sm:flex`}
      >
        <Radar className="h-3.5 w-3.5" strokeWidth={2.5} />
        scanning...
      </div>

      <div className="group relative z-10 flex w-full max-w-xl flex-col items-center gap-6 sm:gap-8">
        <h1 className="sr-only">404 — Page not found</h1>

        <div
          aria-hidden="true"
          className="relative w-full -rotate-1 border-[6px] border-[#0B0B0F] bg-[#C81D25] p-2 shadow-[10px_10px_0_0_#0B0B0F] transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:rotate-0 hover:shadow-[16px_16px_0_0_#0B0B0F] dark:border-[#F2ECEC] dark:bg-[#171313] dark:shadow-[10px_10px_0_0_#F2ECEC,0_0_45px_-10px_#FF434399] dark:hover:shadow-[16px_16px_0_0_#F2ECEC,0_0_65px_-6px_#FF4343cc] sm:p-3"
        >
          <div className="mb-2 flex items-center justify-between border-b-[3px] border-[#0B0B0F] pb-2 transition-colors duration-300 dark:border-[#F2ECEC]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#0B0B0F] bg-[#C81D25] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#FF4343]" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#0B0B0F] bg-[#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#F2ECEC]" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#0B0B0F] bg-white transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#0B0707]" />
            </div>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest text-[#0B0B0F] transition-colors duration-300 dark:text-[#F2ECEC] sm:text-xs`}
            >
              crt_render // err_04
            </span>
          </div>

          <div className="relative overflow-hidden border-[3px] border-[#0B0B0F] bg-[#0A0A0A] py-8 transition-colors duration-300 dark:border-[#F2ECEC] sm:py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #F5F1ED 0px, #F5F1ED 1px, transparent 1px, transparent 3px)",
              }}
            />
            <div className="relative flex justify-center">
              <span
                className={`relative select-none text-[5.5rem] font-bold leading-none tracking-tight text-white sm:text-[8rem]`}
              >
                404
                <span className="absolute inset-0 -translate-x-[3px] translate-y-[2px] text-[#C81D25] opacity-70 mix-blend-screen transition-all duration-300 group-hover:-translate-x-[6px] group-hover:translate-y-[4px] dark:text-[#FF4343]">
                  404
                </span>
                <span className="absolute inset-0 -translate-y-[2px] translate-x-[3px] text-white opacity-40 mix-blend-screen transition-all duration-300 group-hover:-translate-y-[4px] group-hover:translate-x-[6px] dark:opacity-60">
                  404
                </span>
              </span>
            </div>
            <p
              className={`relative mt-3 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-[#C81D25] transition-colors duration-300 dark:text-[#FF4343] sm:text-xs`}
            >
              render_failure — segment_not_found
            </p>
          </div>
        </div>

        <div className="w-full border-[4px] border-[#0B0B0F] bg-white shadow-[8px_8px_0_0_#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#161111] dark:shadow-[8px_8px_0_0_#F2ECEC] sm:rotate-[0.5deg]">
          <div className="flex items-center gap-2 border-b-[3px] border-[#0B0B0F] bg-[#0B0B0F] px-4 py-2 transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#F2ECEC]">
            <TerminalSquare
              className="h-4 w-4 text-[#C81D25] dark:text-[#B3181E]"
              strokeWidth={2.5}
            />
            <span
              className={`text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 dark:text-[#0B0707]`}
            >
              bash — page_not_found
            </span>
          </div>
          <div
            className={`space-y-1.5 px-4 py-4 text-[12.5px] leading-relaxed text-[#0B0B0F] transition-colors duration-300 dark:text-[#F2ECEC] sm:text-sm`}
          >
            <p>
              <span className="text-[#C81D25] dark:text-[#FF4343]">$</span> curl
              -I {"{requested_page}"}
            </p>
            <p className="flex items-center gap-1.5 text-[#B01722] dark:text-[#FF5252]">
              <AlertTriangle
                className="h-3.5 w-3.5 shrink-0"
                strokeWidth={2.5}
              />
              HTTP/1.1 404 — route not registered on server
            </p>
            <p className="text-[#0B0B0F]/70 dark:text-[#F2ECEC]/65">
              &gt; This page may have been moved, deleted, or never existed in
              the first place.
            </p>
            <p className="flex items-center text-[#0B0B0F]/70 dark:text-[#F2ECEC]/65">
              &gt; awaiting_input
              <span className="ml-1 inline-block h-4 w-2 animate-[blink_1s_steps(1)_infinite] bg-[#0B0B0F] motion-reduce:animate-none dark:bg-[#F2ECEC]" />
            </p>
          </div>
        </div>

        <Link
          href="/"
          className={`group/btn relative inline-flex items-center gap-2.5 border-[4px] border-[#0B0B0F] bg-yellow-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black shadow-[8px_8px_0_0_#0B0B0F] transition-all duration-150 ease-out hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[12px_12px_0_0_#0B0B0F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C81D25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F8] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0_0_#0B0B0F] dark:border-[#F2ECEC] dark:bg-[#FF4343] dark:text-[#0B0707] dark:shadow-[8px_8px_0_0_#F2ECEC,0_0_30px_-8px_#FF4343] dark:hover:shadow-[12px_12px_0_0_#F2ECEC,0_0_50px_-4px_#FF4343] dark:focus-visible:ring-[#FF4343] dark:focus-visible:ring-offset-[#0B0707] dark:active:shadow-[0px_0px_0_0_#F2ECEC]`}
        >
          <Home className="h-4 w-4" strokeWidth={2.5} />
          Back To Homepage
          <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
