import React from "react";
import { Marquee } from "./magicui/marquee";
import Image, { type StaticImageData } from "next/image";
import { Card } from "./ui/card";
import img from "@/utils/constant";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import thumbnail from "../../public/thumbnail compro fosti 2025.webp";
import { Sparkles, Check, Calendar } from "lucide-react";

const About = () => {
  const about = img.carouselAbout;
  return (
    <div className="relative overflow-hidden">
      <section id="about" className="mx-auto max-w-screen-2xl px-5 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-10">
          {/* Text — order-1 di mobile (atas), order-2 di desktop (kanan, 40%) */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              <Sparkles className="h-3.5 w-3.5" />
              About Us
            </div>

            <h1 className="mb-5 bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-4xl lg:text-5xl">
              Who We Are & What We Do
            </h1>

            <p className="mb-8 text-sm font-medium leading-relaxed text-muted-foreground md:text-base lg:text-lg">
              FOSTI is an independent non-profit organization operated by the
              students of the Faculty of Communication and Informatics Universitas
              Muhammadiyah Surakarta that aims to cultivate students&apos; interests
              in the fields of science and technology.
            </p>

            {/* Feature checklist */}
            <ul className="space-y-3">
              {[
                "Student-run, independent, and non-profit",
                "Focused on science and technology development",
                "Active since 2008 with a growing community",
              ].map((item, i) => (
                <li className="flex items-start gap-3" key={i}>
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-600 dark:text-red-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Small footer stat */}
            <div className="mt-8 flex items-center gap-2 border-t border-border/40 pt-6 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-red-500" />
              <span>
                Established in{" "}
                <strong className="font-semibold text-foreground">2008</strong>
              </span>
            </div>
          </div>

          {/* Video — order-2 di mobile (bawah), order-1 di desktop (kiri, 60%) */}
          <div className="relative order-2 lg:order-1 lg:col-span-3">
            {/* decorative glow */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-border/40 shadow-xl shadow-red-600/5">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/DxwXP8rp5qg?si=xMSnKT1btIczpxoI"
                thumbnailSrc={thumbnail.src}
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/DxwXP8rp5qg?si=xMSnKT1btIczpxoI"
                thumbnailSrc={thumbnail.src}
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
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
    <Card className="h-[200px] w-[90%] p-2 sm:h-[250px] sm:w-[25rem]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full rounded-lg object-cover"
      />
    </Card>
  );
}

export default About;
