import React from "react";
import { Marquee } from "./magicui/marquee";
import Image, { type StaticImageData } from "next/image";
import { Card } from "./ui/card";
import img from "@/utils/constant";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import { Check, Calendar } from "lucide-react";

const thumbnail =
  "https://res.cloudinary.com/qjw4yfke/image/upload/v1787466879/thumbnail_compro_fosti_2025_fst1ol.webp";

const About = () => {
  const about = img.carouselAbout;
  return (
    <div className="relative overflow-hidden">
      <section id="about" className="mx-auto max-w-screen-2xl px-5 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-20">
          <div data-aos="fade-up" className="order-1 lg:order-2 lg:col-span-2">
            <h1 className="mb-5 text-3xl font-black leading-tight text-neutral-900 dark:text-white md:text-4xl lg:text-5xl">
              <span className="inline-block -rotate-1 border-2 border-black bg-amber-300 px-2 py-1 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-red-500 dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                Who We Are
              </span>{" "}
              &amp; What We Do
            </h1>

            <p className="mb-8 text-sm font-medium leading-relaxed text-muted-foreground md:text-base lg:text-lg">
              FOSTI is an independent non-profit organization operated by the
              students of the Faculty of Communication and Informatics
              Universitas Muhammadiyah Surakarta that aims to cultivate
              students&apos; interests in the fields of science and technology.
            </p>

            <ul className="space-y-3">
              {[
                "Student-run, independent, and non-profit",
                "Focused on science and technology development",
                "Active since 2008 with a growing community",
              ].map((item, i) => (
                <li className="flex items-start gap-3" key={i}>
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 border-black bg-amber-300 p-1 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-red-500 dark:text-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1.5 text-sm font-bold text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-900 dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                <Calendar className="h-4 w-4 text-red-500 dark:text-red-400" />
                Established in <strong className="font-black">2008</strong>
              </span>
            </div>
          </div>

          <div className="relative order-2 lg:order-1 lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-gray-700 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <HeroVideoDialog
                className="block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/DxwXP8rp5qg?si=xMSnKT1btIczpxoI"
                thumbnailSrc={thumbnail}
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="z-30">
          {about.map((item, i) => (
            <MarqueeItem
              key={i}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        </Marquee>
        {/* <Marquee pauseOnHover reverse>
          {about.map((item, i) => (
            <MarqueeItem
              key={i}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        </Marquee> */}
      </div>
    </div>
  );
};

function MarqueeItem({
  src,
  alt,
  width,
  height,
}: {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Card className="group relative h-[200px] w-[90%] overflow-hidden rounded-xl border-2 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-800 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] sm:h-[250px] sm:w-[25rem]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full rounded-lg border-2 border-black object-cover dark:border-neutral-600"
      />
    </Card>
  );
}

export default About;
