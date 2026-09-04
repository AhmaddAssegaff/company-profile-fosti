import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import HubpubPrograms from "./HubpubPrograms";
import HubpubTeam from "./HubpubTeam";
import {
  Bookmark,
  Camera,
  CheckCircle2,
  Globe2,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Newspaper,
  Radio,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import { Syne } from "next/font/google";

const fotbar =
  "https://res.cloudinary.com/qjw4yfke/image/upload/v1786202662/Hubpub_ggc5ur.webp";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

const pillars = [
  {
    icon: Globe2,
    issueTag: "VOL. 01 • FOSTI NETWORK",
    headline: "Connecting the Unconnected.",
    description:
      "Connecting FOSTI UMS with tech communities, universities, and industry leaders to build sustainable and impactful ecosystems.",
    footerBadge: "[ ECOSYSTEM BUILDER ]",
  },
  {
    icon: Newspaper,
    issueTag: "VOL. 02 • PRESS & MEDIA",
    headline: "Strategic Media Partnerships.",
    description:
      "Managing high-value partnerships, sponsorships, and media relations to amplify our digital impact and organizational credibility.",
    footerBadge: "[ MEDIA COLLABORATOR ]",
  },
  {
    icon: Radio,
    issueTag: "VOL. 03 • PUBLIC VOICE",
    headline: "The Voice of FOSTI UMS.",
    description:
      "Shaping the organization's official voice, managing public communication channels, and maintaining a strong, positive reputation.",
    footerBadge: "[ OFFICIAL VOICE ]",
  },
];

const Hubpub = () => {
  return (
    <div className="w-full">
      <section className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-0">
        <Star
          className="pointer-events-none absolute right-6 top-6 z-10 h-8 w-8 rotate-12 scale-75 text-amber-400 sm:right-16 sm:top-16 sm:scale-100"
          fill="currentColor"
        />
        <Sparkles className="pointer-events-none absolute bottom-6 left-4 z-10 h-7 w-7 -rotate-12 scale-75 text-red-400 sm:bottom-24 sm:left-12 sm:scale-100" />

        <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-8 py-8 sm:gap-10 sm:py-12 md:py-16 lg:flex-row lg:gap-12 lg:py-0">
          <div
            data-aos="fade-up"
            className="relative flex-1 text-center lg:text-left"
          >
            <span className="mb-6 inline-flex -rotate-3 items-center gap-1.5 rounded-lg border-2 border-black bg-amber-300 px-3 py-1.5 text-xs font-black uppercase tracking-tight text-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:border-gray-700 dark:shadow-gray-100 sm:text-sm">
              <Camera className="mr-1 inline h-4 w-4" />
              #1 Media &amp; Relations
            </span>

            <h1
              className={`${syne.className} text-[2.75rem] font-black uppercase leading-[0.9] tracking-tighter text-neutral-900 dark:text-white sm:text-6xl lg:text-[5rem] xl:text-[6rem]`}
            >
              Public
              <br />
              <span className="bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
                Relations
              </span>
            </h1>            <p className="mx-auto mt-6 max-w-xl text-base font-medium text-neutral-700 dark:text-neutral-300 sm:text-lg lg:mx-0 lg:text-xl">
              Builds relationships and collaborations with various parties to
              expand FOSTI UMS&apos;s network.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="inline-flex rotate-2 items-center gap-1.5 rounded-full border-2 border-black bg-purple-200 px-3 py-1 text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-100 sm:text-sm">
                📢 Amplifying Fosti&apos;s Voice
              </span>
              <span className="inline-flex -rotate-2 items-center gap-1.5 rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-gray-500 dark:bg-neutral-900 dark:text-white dark:shadow-gray-100 sm:text-sm">
                🤝 Ext. Network &amp; Media
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex min-w-0 flex-1 items-center justify-center px-0 py-6"
          >
            <div className="group relative w-full max-w-[380px] rotate-2 transition-transform duration-300 hover:rotate-0">
              <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-100 dark:bg-neutral-900 dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)]">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-xs font-black text-white dark:border-neutral-100">
                    <Image
                      src="https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/logo_ch57ma.png"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span className="truncate text-sm font-bold text-neutral-900 dark:text-white">
                        fosti_ums
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 fill-blue-500 text-white" />
                    </div>
                    <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                      Surakarta, Indonesia • Sponsored
                    </p>
                  </div>
                  <MoreHorizontal className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-300" />
                </div>

                <div className="border-y-2 border-black bg-amber-300 px-4 py-1.5 dark:border-neutral-100">
                  <p className="text-center text-[0.65rem] font-black uppercase tracking-wide text-neutral-900 sm:text-xs">
                    Fosti Highlight • Public &amp; Relations
                  </p>
                </div>

                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={fotbar}
                    alt="Hubpub Public & Relations"
                    fill
                    sizes="(max-width: 768px) 90vw, 448px"
                    className="object-cover"
                  />
                  <span className="absolute right-3 top-3 z-10 flex -rotate-6 items-center gap-1.5 rounded-full border-2 border-black bg-white px-2.5 py-0.5 text-xs font-bold text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                    REC 00:24
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 pt-3">
                  <div className="flex items-center gap-4">
                    <Heart className="h-6 w-6 cursor-pointer fill-red-500 text-red-500 transition-colors active:scale-90" />
                    <MessageCircle className="h-6 w-6 text-neutral-900 dark:text-white" />
                    <Send className="h-6 w-6 text-neutral-900 dark:text-white" />
                  </div>
                  <Bookmark className="h-6 w-6 text-neutral-900 dark:text-white" />
                </div>

                <p className="px-4 pt-2 text-xs font-bold text-neutral-900 dark:text-white">
                  Liked by 100+ students and fosti_members
                </p>

                <p className="px-4 pb-4 pt-1 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <span className="font-bold text-neutral-900 dark:text-white">
                    fosti_ums
                  </span>{" "}
                  Building relationships, amplifying our digital voice, and
                  connecting FOSTI UMS to the wider tech ecosystem.{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    #FOSTIUMS #HubPub #TechCommunity
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            [ Official Division Briefing ]
          </span>
          <h2 className="mb-4 mt-2 text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            About Public &amp; Relations
          </h2>
          <p className="mx-auto max-w-3xl text-center text-base font-medium text-muted-foreground sm:text-lg">
            The Public and Relations division is responsible for building and
            maintaining relationships with external organizations, fostering
            collaborations, and expanding the network of FOSTI UMS to create
            impactful partnerships and opportunities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.headline} data-aos="fade-up">
                <div className="flex flex-col justify-between rounded-2xl border-2 border-black bg-amber-50/40 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-100 dark:bg-neutral-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] sm:p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 sm:text-xs">
                        {pillar.issueTag}
                      </span>
                      <Icon className="h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
                    </div>

                    <h3 className="mt-3 text-xl font-black uppercase leading-snug tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
                      {pillar.headline}
                    </h3>

                    <div className="my-4 border-b-2 border-dashed border-black/20 dark:border-white/20" />

                    <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-start">
                    <span className="inline-flex items-center rounded-md border-2 border-black bg-white px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wide text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-100 dark:bg-neutral-800 dark:text-white sm:text-xs">
                      {pillar.footerBadge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 pb-20 sm:px-6 lg:px-8">
        <Tabs defaultValue="programs" className="w-full">
          <div
            data-aos="fade-up"
            className="mb-8 flex justify-center sm:justify-start"
          >
            <TabsList className="inline-flex gap-1 rounded-full border-2 border-neutral-900 bg-white p-1 dark:border-neutral-100 dark:bg-neutral-900">
              <TabsTrigger
                value="programs"
                className="rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide text-neutral-600 transition-colors duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white dark:text-white"
              >
                Programs
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide text-neutral-600 transition-colors duration-200 data-[state=active]:bg-red-500 data-[state=active]:text-white dark:text-white"
              >
                Meet The Team
              </TabsTrigger>
            </TabsList>
          </div>

          <HubpubPrograms />
          <HubpubTeam />
        </Tabs>
      </section>
    </div>
  );
};

export default Hubpub;
