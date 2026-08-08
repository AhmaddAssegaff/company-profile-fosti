import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import Image, { type StaticImageData } from "next/image";
import { hubpubTeam } from "@/data/HubpubTeam";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { User } from "lucide-react";

const isValidLink = (link?: string | null): link is string =>
  !!link && link.trim() !== "" && link.trim() !== "-";

const isValidSrc = (
  src?: string | StaticImageData | null,
): src is string | StaticImageData => {
  if (!src) return false;
  if (typeof src !== "string") return true;
  return src.trim() !== "";
};

const HubpubTeam = () => {
  return (
    <TabsContent className="flex flex-col gap-4 sm:gap-5 md:gap-6" value="team">
      <h3 className="max-w-2xl text-center text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white sm:text-start sm:text-3xl">
        Meet The Team
      </h3>
      <p className="max-w-3xl text-center text-sm font-semibold leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-start sm:text-base">
        Meet the dedicated team driving the success of the Organizational
        division.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:mt-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {hubpubTeam.map((member, index) => {
          const hasAnySocial =
            isValidLink(member.linkedin) || isValidLink(member.instagram);

          return (
            <AnimatedContent
              delay={index * 10}
              distance={250}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              key={index}
            >
              <Card className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-black bg-white p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-neutral-500 dark:bg-neutral-900 dark:shadow-gray-300 dark:hover:border-neutral-100 dark:hover:shadow-gray-300 sm:p-4">
                <CardContent className="flex flex-col items-center gap-1.5 p-0 xs:gap-2">
                  <div className="relative mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:scale-105 dark:border-neutral-300 sm:mb-3 sm:h-24 sm:w-24">
                    {isValidSrc(member.src) ? (
                      <Image
                        src={member.src}
                        fill
                        sizes="(max-width: 640px) 80px, 96px"
                        alt={member.name}
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-amber-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500">
                        <User className="h-9 w-9 sm:h-11 sm:w-11" />
                      </div>
                    )}
                  </div>

                  <div className="flex min-h-[2.5rem] items-center justify-center sm:min-h-0">
                    <h4 className="line-clamp-2 text-center text-xs font-black uppercase leading-tight tracking-tight text-neutral-900 transition-colors group-hover:text-red-500 dark:text-white dark:group-hover:text-red-400 sm:line-clamp-1 sm:text-base">
                      {member.name}
                    </h4>
                  </div>

                  <p className="line-clamp-1 text-center text-[11px] font-bold text-neutral-600 dark:text-neutral-400 sm:text-sm">
                    {member.divisi === "Keor"
                      ? "Member of Organizational"
                      : member.role}
                  </p>

                  {member.fostiAngkatan && (
                    <span className="mx-auto my-1 inline-flex items-center justify-center gap-1 rounded-full border border-black bg-amber-300 px-2.5 pt-[3px] pb-[2px] font-mono text-[10px] font-bold uppercase leading-none text-neutral-900 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] dark:bg-amber-400 dark:text-neutral-900 sm:my-auto sm:py-1 sm:text-[11px]">
                      👤 <span>FOSTI &apos;{member.fostiAngkatan}</span>
                    </span>
                  )}

                  {hasAnySocial && (
                    <div className="mt-2 flex items-center justify-center gap-2 sm:mt-4 sm:gap-2.5 sm:pt-2">
                      {isValidLink(member.linkedin) && (
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="inline-flex items-center justify-center rounded-full border-2 border-black bg-amber-300 p-1.5 text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-blue-600 hover:text-white dark:border-neutral-600 dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-blue-600 dark:hover:text-white sm:p-2"
                        >
                          <AiFillLinkedin className="h-5 w-5" />
                        </Link>
                      )}

                      {isValidLink(member.instagram) && (
                        <Link
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Instagram`}
                          className="inline-flex items-center justify-center rounded-full border-2 border-black bg-amber-300 p-1.5 text-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-pink-600 hover:text-white dark:border-neutral-600 dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-pink-600 dark:hover:text-white sm:p-2"
                        >
                          <AiFillInstagram className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedContent>
          );
        })}
      </div>
    </TabsContent>
  );
};

export default HubpubTeam;