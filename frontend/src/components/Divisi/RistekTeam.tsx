import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { ristekTeam } from "@/data/RistekTeam";
import Image from "next/image";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { ShineBorder } from "../magicui/shine-border";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const RistekTeam = () => {
  return (
    <TabsContent className="flex flex-col gap-4 sm:gap-5 md:gap-6" value="team">
      <h3 className="max-w-2xl text-center text-lg font-bold tracking-tight text-red-500 sm:text-xl md:text-start md:text-3xl">
        Meet The Team
      </h3>
      <p className="max-w-4xl text-center text-sm font-semibold text-muted-foreground sm:text-base md:text-start">
        Get to know the brilliant minds behind the Research and Technology
        division.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:mt-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {ristekTeam.map((member, index) => (
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
            <Card
              key={index}
              className="relative flex h-full flex-col items-center gap-1.5 overflow-hidden rounded-lg border p-2 shadow-md transition-shadow hover:shadow-lg xs:gap-2 xs:p-3 sm:gap-3 sm:p-4"
            >
              <ShineBorder
                duration={(index += 15)}
                shineColor={[
                  "oklch(63.7% 0.237 25.331)",
                  "oklch(75% 0.183 55.934)",
                  "oklch(87.9% 0.169 91.605)",
                ]}
                borderWidth={1.5}
              />
              <CardContent className="flex flex-col items-center gap-1.5 p-0 xs:gap-2">
                <div className="relative h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24">
                  <Image
                    src={member.src}
                    layout="fill"
                    objectFit="cover"
                    alt={member.name}
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-center text-xs font-bold text-red-500 sm:text-base">
                  {member.name}
                </h4>
                <p className="text-center text-xs font-medium text-muted-foreground sm:text-sm">
                  {member.divisi === "Ristek"
                    ? "Member of Research and Technology"
                    : member.role}
                </p>
                <div className="m-4 flex items-center gap-4">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-blue-600"
                    >
                      <AiFillLinkedin className="h-5 w-5" />
                    </Link>
                  )}

                  {member.instagram && (
                    <Link
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-pink-500"
                    >
                      <AiFillInstagram className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </TabsContent>
  );
};

export default RistekTeam;
