import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { env } from "@/env";

const CallToAction = () => {
  return (
    <section
      id="join"
      className="relative mx-auto max-w-screen-2xl px-5 pt-28 pb-32"
    >
      <div className="group/card relative mx-auto flex max-w-8xl flex-col items-center gap-4 overflow-hidden rounded-[1.5em] border-2 border-red-500/50 bg-gradient-to-br from-red-900 via-red-700 to-orange-600 px-6 py-16 text-center font-nunito text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 rounded-[1.5em] bg-gradient-to-br from-red-600/30 via-orange-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.15),transparent_60%)] group-hover/card:animate-pulse" />

        <div className="absolute right-5 top-5 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-orange-300/50" />
          <div className="h-2 w-2 rounded-full bg-orange-300/30" />
          <div className="h-2 w-2 rounded-full bg-orange-300/10" />
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent blur-sm group-hover/card:animate-pulse" />

        <div className="relative z-10 mx-auto max-w-2xl transition-transform duration-300 group-hover/card:-translate-y-0.5">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Join FOSTI
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Ready to Boost Your{" "}
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
              Tech Journey
            </span>
            ?
          </h2>

          <p className="mb-8 text-sm font-light leading-relaxed text-red-50/90 md:text-base lg:text-lg">
            Be part of a community that grows, builds, and shapes the future
            of technology together. Registration only takes a few minutes.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={env.NEXT_PUBLIC_OPREC_URL}
              target="_blank"
              className="group/btn relative flex h-fit w-fit items-center justify-center gap-2 overflow-hidden rounded-full border border-black/50 bg-neutral-950 px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-black/70 hover:shadow-lg hover:shadow-black/30 active:scale-95 active:translate-y-0"
            >
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-gray-600/50 via-white/50 to-gray-600/50 transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
              <p className="relative z-10">Join Now!</p>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/70 hover:bg-white/10"
            >
              Learn more about us
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-xs font-medium text-white/70">
            <Users className="h-4 w-4" />
            <span>Joined by 100+ students since 2008</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;