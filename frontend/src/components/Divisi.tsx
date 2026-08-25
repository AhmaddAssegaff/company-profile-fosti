import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { FaComputer } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { BsCameraReelsFill } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { bphiTeam } from "@/data/BPHI";
import { type TeamType } from "@/types/image";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image, { type StaticImageData } from "next/image";

const fotbar =
  "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/BPI_hw78z0.jpg";

const isValidLink = (link?: string | null): link is string =>
  !!link && link.trim() !== "" && link.trim() !== "-";

const divisi = [
  {
    icon: <IoIosPeople className="h-7 w-7 text-black dark:text-white" />,
    title: "Organizational",
    delay: 100,
    href: "/divisi/keor",
    description:
      "Fosters relationships among members and prepares new prospective members of FOSTI UMS.",
  },
  {
    icon: <FaComputer className="h-7 w-7 text-black dark:text-white" />,
    title: "Research and Technology",
    delay: 250,
    href: "/divisi/ristek",
    description:
      "Conducts research and development of open-source technology for FOSTI and the community.",
  },
  {
    icon: <BsCameraReelsFill className="h-7 w-7 text-black dark:text-white" />,
    title: "Public Relations",
    delay: 350,
    href: "/divisi/hubpub",
    description:
      "Builds relationships and collaborations with various parties to expand FOSTI UMS's network.",
  },
];

const Divisi = () => {
  return (
    <section id="divisi" className="mx-auto max-w-screen-2xl px-5 py-20">
      <div data-aos="fade-up" className="mb-12 space-y-3 text-center">
        <h2 className="mb-4 text-3xl font-black text-neutral-900 dark:text-white sm:text-4xl">
          Meet Our{" "}
          <span className="inline-block -rotate-1 border-2 border-black bg-amber-300 px-3 py-1 text-black dark:border-white">
            Executives
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-sm font-medium text-muted-foreground sm:text-base md:max-w-3xl">
          Meet the talented executives who drive our vision and lead our
          organization to success.
        </p>
      </div>
      <div className="relative mb-16 flex flex-col items-center gap-8 rounded-3xl border-2 border-black bg-neutral-100 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-900/80 dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:flex-row md:gap-10 md:p-8">
        <div data-aos="zoom-in" className="mb-4 flex w-full justify-center md:mb-0 md:w-auto">
          <Image
            src={fotbar}
            width={600}
            height={400}
            alt="Fostibar"
            loading="lazy"
            className="h-44 w-80 rounded-xl border-2 border-black object-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:h-56 sm:w-80 md:h-[18rem] md:w-[28rem] lg:h-[25rem] lg:w-[75rem]"
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bphiTeam.map((executive, index) => (
            <div key={index} data-aos="zoom-in">
              <ExecutiveCard executive={executive} />
            </div>
          ))}
        </div>
      </div>

      <div data-aos="fade-up" className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-black text-neutral-900 dark:text-white sm:text-4xl">
          <span className="inline-block rotate-1 border-2 border-black bg-red-500 px-3 py-1 text-white dark:border-white">
            Divisions
          </span>
        </h1>
        Our members are a part of diverse divisions that work together as one.
        {/* <TextAnimate
          animation="slideUp"
          by="word"
          once
          className="mx-auto max-w-2xl text-base font-medium text-muted-foreground md:text-lg"
        >
        </TextAnimate> */}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {divisi.map((feature, index) => (
          <div 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={feature.delay} 
            className="h-full"
          >
            <Link href={feature.href} className="block h-full">
              <Card className="group block h-full overflow-hidden rounded-2xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <CardContent className="p-0">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-amber-300 dark:border-white dark:bg-red-500">
                    {feature.icon}
                  </div>
                  <h1 className="mb-2 text-xl font-black text-neutral-900 transition-colors group-hover:text-red-500 dark:text-white">
                    {feature.title}
                  </h1>
                  <p className="font-medium text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

function ExecutiveCard({ executive }: { executive: TeamType }) {
  return (
    <Card className="group mx-auto flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
      <CardHeader className="flex flex-col items-center space-y-2 px-2 pb-2 pt-4 text-center sm:space-y-4 sm:px-4 sm:pt-6">
        <Avatar className="h-16 w-16 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:scale-105 dark:border-white sm:h-24 sm:w-24">
          <AvatarImage
            src={
              typeof executive.src === "string"
                ? executive.src
                : (executive.src as StaticImageData).src
            }
            alt={executive.name}
            className="aspect-square h-full w-full bg-white object-cover object-center"
          />
          <AvatarFallback>{executive.name}</AvatarFallback>
        </Avatar>

        <div className="space-y-0.5 sm:space-y-1">
          <CardTitle className="line-clamp-2 text-center text-xs font-black uppercase leading-tight tracking-tight text-neutral-900 transition-colors group-hover:text-red-500 dark:text-white dark:group-hover:text-red-400 sm:text-base">
            {executive.name}
          </CardTitle>
          <CardDescription className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 sm:text-sm">
            {executive.role}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex justify-center gap-2 pb-3 pt-2 sm:gap-3 sm:pb-5">
        {isValidLink(executive.linkedin) ? (
          <Link
            href={executive.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${executive.name} LinkedIn`}
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-amber-300 p-1.5 text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-blue-600 hover:text-white dark:border-white dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-blue-600 dark:hover:text-white sm:p-2.5"
          >
            <AiFillLinkedin className="h-3 w-3 sm:h-5 sm:w-5" />
          </Link>
        ) : (
          <button
            type="button"
            disabled
            aria-label={`${executive.name} LinkedIn tidak tersedia`}
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border-2 border-neutral-400 bg-neutral-200 p-1.5 text-neutral-400 opacity-60 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-600 sm:p-2.5"
          >
            <AiFillLinkedin className="h-3 w-3 sm:h-5 sm:w-5" />
          </button>
        )}

        {isValidLink(executive.instagram) ? (
          <Link
            href={executive.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${executive.name} Instagram`}
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-amber-300 p-1.5 text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-pink-600 hover:text-white dark:border-white dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-pink-600 dark:hover:text-white sm:p-2.5"
          >
            <AiFillInstagram className="h-3 w-3 sm:h-5 sm:w-5" />
          </Link>
        ) : (
          <button
            type="button"
            disabled
            aria-label={`${executive.name} Instagram tidak tersedia`}
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border-2 border-neutral-400 bg-neutral-200 p-1.5 text-neutral-400 opacity-60 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-600 sm:p-2.5"
          >
            <AiFillInstagram className="h-3 w-3 sm:h-5 sm:w-5" />
          </button>
        )}
      </CardFooter>
    </Card>
  );
}

export default Divisi;
