import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TextAnimate } from "./magicui/text-animate";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
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
  "https://res.cloudinary.com/qjw4yfke/image/upload/v1786202665/BPI_gmb4j7.webp";

const isValidLink = (link?: string | null): link is string =>
  !!link && link.trim() !== "" && link.trim() !== "-";

const divisi = [
  {
    icon: <IoIosPeople className="mb-4 h-10 w-10 text-primary" />,
    title: "Organizational",
    delay: 100,
    href: "/divisi/keor",
    description:
      "Fosters relationships among members and prepares new prospective members of FOSTI UMS.",
  },
  {
    icon: <FaComputer className="mb-4 h-10 w-10 text-primary" />,
    title: "Research and Technology",
    delay: 250,
    href: "/divisi/ristek",
    description:
      "Conducts research and development of open-source technology for FOSTI and the community.",
  },
  {
    icon: <BsCameraReelsFill className="mb-4 h-10 w-10 text-primary" />,
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
      <div className="mb-12 space-y-3 text-center">
        <h2 className="mb-4 bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          Meet Our Executives
        </h2>
        <p className="mx-auto max-w-xl text-sm font-medium text-muted-foreground sm:text-base md:max-w-3xl">
          Meet the talented executives who drive our vision and lead our
          organization to success.
        </p>
      </div>
      <div className="relative mb-16 flex flex-col items-center gap-8 rounded-3xl border-2 border-black bg-neutral-100 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-gray-500 dark:bg-neutral-900/80 dark:shadow-gray-100 md:flex-row md:gap-10 md:p-8">
        <div className="mb-4 flex w-full justify-center md:mb-0 md:w-auto">
          <Image
            src={fotbar}
            width={600}
            height={400}
            alt="Fostibar"
            loading="lazy"
            className="h-44 w-80 rounded-xl border-2 border-black object-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-gray-500 dark:shadow-gray-100 sm:h-56 sm:w-80 md:h-[18rem] md:w-[28rem] lg:h-[25rem] lg:w-[75rem]"
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bphiTeam.map((executive, index) => (
            <ExecutiveCard key={index} executive={executive} />
          ))}
        </div>
      </div>

      <div className="mb-16 text-center">
        <h1 className="mb-4 bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Divisions
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
          <Link key={index} href={feature.href}>
            <Card className="gradient-card h-full border-2 border-border/40 transition-colors hover:border-red-500">
              <CardContent className="pt-6">
                {feature.icon}
                <h1 className="mb-2 text-xl font-semibold text-red-500">
                  {feature.title}
                </h1>
                <p className="font-medium text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </Link>
          // <AnimatedContent
          //   delay={feature.delay}
          //   distance={250}
          //   direction="vertical"
          //   reverse={false}
          //   config={{ tension: 80, friction: 20 }}
          //   initialOpacity={0}
          //   animateOpacity
          //   scale={1}
          //   threshold={0.2}
          //   key={index}
          // >
          // </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

function ExecutiveCard({ executive }: { executive: TeamType }) {
  return (
    <Card className="group mx-auto flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:border-neutral-500 dark:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:max-w-xs md:max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-4 pb-2 pt-6 text-center">
        <Avatar className="h-20 w-20 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:scale-105 dark:border-neutral-300 sm:h-28 sm:w-28">
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

        <div className="space-y-1">
          <CardTitle className="line-clamp-1 text-base font-black uppercase tracking-tight text-neutral-900 transition-colors group-hover:text-red-500 dark:text-white dark:group-hover:text-red-400 sm:text-lg">
            {executive.name}
          </CardTitle>
          <CardDescription className="text-xs font-bold text-neutral-600 dark:text-neutral-400 sm:text-sm">
            {executive.role}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex justify-center gap-3 pb-5 pt-2">
        {isValidLink(executive.linkedin) ? (
          <Link
            href={executive.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${executive.name} LinkedIn`}
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-amber-300 p-2.5 text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-blue-600 hover:text-white dark:border-neutral-600 dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-blue-600 dark:hover:text-white"
          >
            <AiFillLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        ) : (
          <button
            type="button"
            disabled
            aria-label={`${executive.name} LinkedIn tidak tersedia`}
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border-2 border-neutral-400 bg-neutral-200 p-1.5 text-neutral-400 opacity-60 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-600 sm:p-2"
          >
            <AiFillLinkedin className="h-5 w-5" />
          </button>
        )}

        {isValidLink(executive.instagram) ? (
          <Link
            href={executive.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${executive.name} Instagram`}
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-amber-300 p-2.5 text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-pink-600 hover:text-white dark:border-neutral-600 dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-pink-600 dark:hover:text-white"
          >
            <AiFillInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        ) : (
          <button
            type="button"
            disabled
            aria-label={`${executive.name} LinkedIn tidak tersedia`}
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border-2 border-neutral-400 bg-neutral-200 p-1.5 text-neutral-400 opacity-60 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-600 sm:p-2"
          >
            <AiFillLinkedin className="h-5 w-5" />
          </button>
        )}
      </CardFooter>
    </Card>
  );
}

export default Divisi;
