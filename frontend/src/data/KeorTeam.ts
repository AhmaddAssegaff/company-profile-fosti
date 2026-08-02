import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const keorTeam: TeamType[] = [
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Head of Keor" || m.role === "Secretary of Keor",
  ),
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Member Keor" && m.fostiAngkatan === 24,
  ),
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Member Keor" && m.fostiAngkatan === 25,
  ),
];
