import { ArrowRight } from "lucide-react";
import { NumberTicker } from "./magicui/number-ticker";
import Link from "next/link";
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
      className="mx-auto max-w-screen-2xl pb-6 pt-11 md:pb-20 md:pt-20"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-12 px-5 md:flex-row md:px-0">
        <div className="flex w-full flex-col items-start justify-center md:w-1/2 lg:px-8">
          <h1 className="mb-5 w-full text-start text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            We Help You{" "}
            <span className="inline-block -rotate-2 rounded-md border-2 border-black bg-amber-300 px-2 py-0.5 text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-200 dark:border-gray-600">
              Boost
            </span>{" "}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span>Your</span>
              <RotatingText
                texts={["Creativity", "Growth", "Network", "Skills"]}
                mainClassName="px-2 sm:px-2 md:px-5 bg-red-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-200 dark:border-gray-600"
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

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href={env.NEXT_PUBLIC_OPREC_URL}
              className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-amber-300 px-6 py-3 font-black uppercase tracking-widest text-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:bg-amber-400 dark:hover:bg-blue-600 sm:w-auto dark:shadow-gray-200 dark:border-gray-600"
              target="_blank"
            >
              <span>Join Now!</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 w-full md:mt-16">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-black bg-white p-3 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.25)] sm:p-4"
                  key={index}
                >
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
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
        </div>
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <ImageCollage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
