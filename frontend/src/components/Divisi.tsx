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
import { AiFillLinkedin } from "react-icons/ai";
import Image, { type StaticImageData } from "next/image";
import fotbar from "../../public/DSC03669.webp";

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
      <div className="relative mb-16 flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-tr from-red-500 to-slate-900 p-4 shadow-lg ring-1 ring-red-200/40 md:flex-row md:gap-10 md:p-8">
        <div className="mb-4 flex w-full justify-center md:mb-0 md:w-auto">
          <Image
            src={fotbar}
            alt="Fostibar"
            className="h-44 w-80 rounded-xl object-cover shadow-md ring-2 ring-red-300 sm:h-56 sm:w-80 md:h-[18rem] md:w-[28rem] lg:h-[25rem] lg:w-[75rem]"
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
    <Card className="mx-auto flex h-full w-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg sm:max-w-xs md:max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-4 pb-2 pt-6 text-center">
        <Avatar className="h-16 w-16 border-4 border-background shadow-md sm:h-24 sm:w-24">
          <AvatarImage
            src={
              typeof executive.src === "string"
                ? executive.src
                : (executive.src as StaticImageData).src
            }
            alt={executive.name}
          />
          <AvatarFallback>{executive.name}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold text-red-500">
            {executive.name}
          </CardTitle>
          <CardDescription className="text-sm font-medium text-muted-foreground">
            {executive.role}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-center gap-3 pb-6 pt-2">
        <Link
          href={
            executive.linkedin && executive.linkedin !== "-"
              ? executive.linkedin
              : "#"
          }
          className={`mt-1 transition-colors ${
            executive.linkedin && executive.linkedin !== "-"
              ? "hover:text-blue-600"
              : "cursor-not-allowed text-gray-400"
          } xs:mt-2 sm:mt-3`}
          target={
            executive.linkedin && executive.linkedin !== "-"
              ? "_blank"
              : "_self"
          }
          aria-disabled={!executive.linkedin || executive.linkedin === "-"}
        >
          <AiFillLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Divisi;
