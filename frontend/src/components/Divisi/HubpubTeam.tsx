import React from "react";
import { TabsContent } from "../ui/tabs";
import { hubpubTeam } from "@/data/HubpubTeam";
import { MemberCard } from "@/components/Divisi/Components/MemberCard";

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
        {hubpubTeam.map((member, index) => (
          <div 
            key={index} 
            data-aos="zoom-in-up"
          >
            <MemberCard member={member} priority={index < 8} />
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default HubpubTeam;
