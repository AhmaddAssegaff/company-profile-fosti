import type { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const ristekTeam: TeamType[] = [
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Head of Ristek" || m.role === "Secretary of Ristek",
  ),
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Member Ristek" && m.fostiAngkatan === 24,
  ),
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Member Ristek" && m.fostiAngkatan === 25,
  ),
];
