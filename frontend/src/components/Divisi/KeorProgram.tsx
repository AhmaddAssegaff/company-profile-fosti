import { TabsContent } from "../ui/tabs";
import { keorPrograms } from "@/data/KeorPrograms";
import { ProgramCard } from "@/components/Divisi/Components/ProgramCard";

const KeorPrograms = () => {
  return (
    <TabsContent className="flex flex-col gap-5" value="programs">
      <h3 className="max-w-2xl text-center text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white sm:text-start sm:text-3xl">
        Programs
      </h3>
      <p className="max-w-3xl text-center text-sm font-semibold leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-start sm:text-base">
        Explore the various programs and initiatives led by the Organizational
        division. These programs aim to foster strong relationships, effective
        communication, and continuous growth within the community.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {keorPrograms.map((program, index) => (
          <div key={index} data-aos="fade-up">
            <ProgramCard program={program} index={index} />
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default KeorPrograms;
