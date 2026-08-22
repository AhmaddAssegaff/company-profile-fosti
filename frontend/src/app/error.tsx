"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import {
  Home,
  RefreshCw,
  ServerCrash,
  Siren,
  TerminalSquare,
  AlertTriangle,
} from "lucide-react";

import Squares from "@/components/Squares/Squares";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error(error);
  }, [error]);

  const isDev = process.env.NODE_ENV !== "production";
  const refId = error.digest ?? "local::no_digest";

  const isDark = resolvedTheme === "dark";
  const squareBorderColor = isDark ? "#333333" : "#bababa";
  const squareHoverColor = isDark ? "#FF4343" : "#C81D25";

  return (
    <div className="relative flex min-h-[calc(100dvh-4.5rem)] w-full items-center justify-center overflow-hidden bg-[#FAF9F8] px-4 py-10 transition-colors duration-300 dark:bg-[#0B0707] sm:px-8">
      
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-[0.15]">
        {mounted && (
          <Squares
            speed={0.35}
            squareSize={30}
            direction="diagonal" 
            borderColor={squareBorderColor}
            hoverFillColor={squareHoverColor}
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-[280px] w-[280px] animate-pulse rounded-full bg-[#C81D25]/15 blur-3xl motion-reduce:animate-none dark:bg-[#FF4343]/25 sm:h-[380px] sm:w-[380px]"
        style={{ animationDuration: "2s" }}
      />

      <div
        className={`${mono.className} pointer-events-none absolute left-4 top-4 z-10 hidden items-center gap-2 border-[3px] border-[#0B0B0F] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0B0B0F] shadow-[4px_4px_0_0_#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#171313] dark:text-[#F2ECEC] dark:shadow-[4px_4px_0_0_#F2ECEC] sm:flex`}
      >
        <ServerCrash className="h-3.5 w-3.5 text-[#C81D25] dark:text-[#FF4343]" strokeWidth={2.5} />
        server_down
      </div>
      <div
        className={`${mono.className} pointer-events-none absolute right-4 top-4 z-10 hidden items-center gap-2 border-[3px] border-[#0B0B0F] bg-[#C81D25] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#FF4343] dark:text-[#0B0707] dark:shadow-[4px_4px_0_0_#F2ECEC] sm:flex`}
      >
        <Siren className="h-3.5 w-3.5 animate-pulse motion-reduce:animate-none" strokeWidth={2.5} />
        critical
      </div>

      <div className="group relative z-10 flex w-full max-w-xl flex-col items-center gap-6 sm:gap-8">
        <h1 className="sr-only">Internal Server Error 500</h1>

        <div
          aria-hidden="true"
          className="h-2.5 w-full max-w-[calc(100%-1rem)] rotate-1 border-2 border-[#0B0B0F] bg-[repeating-linear-gradient(45deg,#C81D25_0px,#C81D25_10px,#0B0B0F_10px,#0B0B0F_20px)] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[repeating-linear-gradient(45deg,#FF4343_0px,#FF4343_10px,#F2ECEC_10px,#F2ECEC_20px)]"
        />

        <div
          aria-hidden="true"
          className="relative w-full -rotate-1 border-[6px] border-[#C81D25] bg-[#0B0B0F] p-2 shadow-[10px_10px_0_0_#0B0B0F] transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:rotate-0 hover:shadow-[16px_16px_0_0_#0B0B0F] dark:border-[#FF4343] dark:bg-[#171313] dark:shadow-[10px_10px_0_0_#F2ECEC,0_0_45px_-10px_#FF434399] dark:hover:shadow-[16px_16px_0_0_#F2ECEC,0_0_65px_-6px_#FF4343cc] sm:p-3"
        >
          <div className="mb-2 flex items-center justify-between border-b-[3px] border-[#C81D25] pb-2 transition-colors duration-300 dark:border-[#FF4343]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#C81D25] bg-[#C81D25] transition-colors duration-300 dark:border-[#FF4343] dark:bg-[#FF4343]" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#C81D25] bg-white transition-colors duration-300 dark:border-[#FF4343] dark:bg-[#F2ECEC]" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#C81D25] bg-[#0B0B0F] transition-colors duration-300 dark:border-[#FF4343] dark:bg-[#0B0707]" />
            </div>
            <span
              className={`${mono.className} text-[10px] font-bold uppercase tracking-widest text-white transition-colors duration-300 dark:text-[#F2ECEC] sm:text-xs`}
            >
              sys_monitor // err_500
            </span>
          </div>

          <div className="relative overflow-hidden border-[3px] border-[#C81D25] bg-[#0A0A0A] py-8 transition-colors duration-300 dark:border-[#FF4343] sm:py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #F5F1ED 0px, #F5F1ED 1px, transparent 1px, transparent 3px)",
              }}
            />
            <div className="relative flex justify-center">
              <span
                className={`${display.className} relative select-none text-[5.5rem] font-bold leading-none tracking-tight text-white sm:text-[8rem]`}
              >
                500
                <span className="absolute inset-0 -translate-x-[4px] translate-y-[3px] text-[#C81D25] opacity-70 mix-blend-screen transition-all duration-300 group-hover:-translate-x-[8px] group-hover:translate-y-[6px] dark:text-[#FF4343]">
                  500
                </span>
                <span className="absolute inset-0 translate-x-[4px] -translate-y-[3px] text-white opacity-40 mix-blend-screen transition-all duration-300 group-hover:translate-x-[8px] group-hover:-translate-y-[6px] dark:opacity-60">
                  500
                </span>
              </span>
            </div>
            <p
              className={`${mono.className} relative mt-3 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-[#C81D25] transition-colors duration-300 dark:text-[#FF4343] sm:text-xs`}
            >
              kernel_panic — unhandled_exception
            </p>
          </div>
        </div>

        <div className="w-full border-[4px] border-[#0B0B0F] bg-white shadow-[8px_8px_0_0_#0B0B0F] transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#161111] dark:shadow-[8px_8px_0_0_#F2ECEC] sm:rotate-[0.5deg]">
          <div className="flex items-center gap-2 border-b-[3px] border-[#0B0B0F] bg-[#0B0B0F] px-4 py-2 transition-colors duration-300 dark:border-[#F2ECEC] dark:bg-[#F2ECEC]">
            <TerminalSquare className="h-4 w-4 text-[#C81D25] dark:text-[#B3181E]" strokeWidth={2.5} />
            <span
              className={`${mono.className} text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 dark:text-[#0B0707]`}
            >
              bash — crash_report
            </span>
          </div>
          <div
            className={`${mono.className} space-y-1.5 px-4 py-4 text-[12.5px] leading-relaxed text-[#0B0B0F] transition-colors duration-300 dark:text-[#F2ECEC] sm:text-sm`}
          >
            <p>
              <span className="text-[#C81D25] dark:text-[#FF4343]">$</span> system --diagnose --last-crash
            </p>
            <p className="flex items-center gap-1.5 text-[#B01722] dark:text-[#FF5252]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
              FATAL: unhandled_exception_caught
            </p>
            <p className="truncate text-[#0B0B0F]/70 dark:text-[#F2ECEC]/65">
              &gt; ref_id: {refId}
            </p>
            {isDev && (
              <p className="truncate text-[#0B0B0F]/50 dark:text-[#F2ECEC]/45">
                &gt; dev_only: {error.message || "no_message"}
              </p>
            )}
            <p className="text-[#0B0B0F]/70 dark:text-[#F2ECEC]/65">
              &gt; Engineering team has been automatically notified.
            </p>
            <p className="flex items-center text-[#0B0B0F]/70 dark:text-[#F2ECEC]/65">
              &gt; awaiting_recovery
              <span className="ml-1 inline-block h-4 w-2 animate-[blink_1s_steps(1)_infinite] bg-[#0B0B0F] motion-reduce:animate-none dark:bg-[#F2ECEC]" />
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className={`${mono.className} group/btn relative inline-flex w-full items-center justify-center gap-2.5 border-[4px] border-[#0B0B0F] bg-[#C81D25] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[8px_8px_0_0_#0B0B0F] transition-all duration-150 ease-out hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[12px_12px_0_0_#0B0B0F] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0_0_#0B0B0F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C81D25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F8] dark:border-[#F2ECEC] dark:bg-[#FF4343] dark:text-[#0B0707] dark:shadow-[8px_8px_0_0_#F2ECEC,0_0_30px_-8px_#FF4343] dark:hover:shadow-[12px_12px_0_0_#F2ECEC,0_0_50px_-4px_#FF4343] dark:active:shadow-[0px_0px_0_0_#F2ECEC] dark:focus-visible:ring-[#FF4343] dark:focus-visible:ring-offset-[#0B0707] sm:w-auto`}
          >
            <RefreshCw className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-180" strokeWidth={2.5} />
            Refresh System
          </button>

          <Link
            href="/"
            className={`${mono.className} group/btn relative inline-flex w-full items-center justify-center gap-2.5 border-[4px] border-[#0B0B0F] bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B0B0F] shadow-[8px_8px_0_0_#0B0B0F] transition-all duration-150 ease-out hover:-translate-x-[4px] hover:-translate-y-[4px] hover:bg-[#0B0B0F] hover:text-white hover:shadow-[12px_12px_0_0_#0B0B0F] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0_0_#0B0B0F] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F8] dark:border-[#F2ECEC] dark:text-[#F2ECEC] dark:shadow-[8px_8px_0_0_#F2ECEC] dark:hover:bg-[#F2ECEC] dark:hover:text-[#0B0707] dark:hover:shadow-[12px_12px_0_0_#F2ECEC] dark:active:shadow-[0px_0px_0_0_#F2ECEC] dark:focus-visible:ring-[#F2ECEC] dark:focus-visible:ring-offset-[#0B0707] sm:w-auto`}
          >
            <Home className="h-4 w-4" strokeWidth={2.5} />
            Back To Homepage
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}