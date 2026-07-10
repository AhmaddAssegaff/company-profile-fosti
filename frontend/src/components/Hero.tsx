import { ArrowRight } from "lucide-react";
import { NumberTicker } from "./magicui/number-ticker";
import Link from "next/link";
import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import ImageCollage from "./ImageCollage";
import RotatingText from "../components/RotatingText/RotatingText";
import { env } from "@/env";

const stats = [
  {
    title: "10",
    description: "Work Programs",
  },
  {
    title: "100",
    description: "Members",
  },
  {
    title: "50",
    description: "Achievements",
  },
];

const Hero = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl pb-28 pt-11 md:pt-20"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-12 px-5 md:flex-row md:px-0">
        <div className="flex w-full flex-col items-start justify-center md:w-1/2 lg:px-8">
          <h1 className="mb-5 w-full text-start text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            We Help You <span className="text-red-500">Boost</span> {""}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span>Your</span>
              <RotatingText
                texts={["Creativity", "Growth", "Network", "Skills"]}
                mainClassName="px-2 sm:px-2 md:px-5 bg-red-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"random"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </h1>
          <TextAnimate
            animation="slideUp"
            by="word"
            delay={2000}
            once
            className="mb-8 w-full text-start text-sm font-semibold text-muted-foreground sm:text-base md:text-lg"
          >
            Since 2008, FOSTI has been nurturing student's passion for science
            and technology, proudly standing as one of the best IT student
            organizations in the town.
          </TextAnimate>

          <div className="w-full">
            <div className="grid grid-cols-3 divide-x divide-border/40 rounded-2xl border border-border/40 bg-muted/20">
              {stats.map((stat, index) => (
                <div
                  className="group flex flex-col items-center gap-1 px-2 py-4 text-center transition-colors duration-200 hover:bg-muted/40 sm:px-6 sm:py-6"
                  key={index}
                >
                  <div className="flex items-baseline gap-0.5 transition-transform duration-200 group-hover:scale-105 sm:gap-1">
                    <NumberTicker
                      value={parseInt(stat.title)}
                      className="text-2xl font-bold tracking-tighter tabular-nums sm:text-4xl md:text-5xl"
                    />
                    <span className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-xl font-bold text-transparent sm:text-3xl md:text-4xl">
                      +
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold uppercase leading-tight tracking-wider text-muted-foreground sm:text-xs md:text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row mt-5">
            <Link
              href={env.NEXT_PUBLIC_OPREC_URL}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-primary/50 dark:bg-gradient-to-tr dark:from-red-500 dark:to-orange-500 dark:shadow-red-500/20 dark:hover:shadow-red-500/50"
              target="_blank"
            >
              <span>Join Now!</span>
              <ArrowRight 
                className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
                color="#ffffff" 
              />
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <ImageCollage />
        </div>
      </div>
    </section>
  );
};

export default Hero;