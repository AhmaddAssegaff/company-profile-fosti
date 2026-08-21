import type { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const hubpubTeam: TeamType[] = [
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Head of Hubpub" || m.role === "Secretary of Hubpub",
  ),
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Member Hubpub" && m.fostiAngkatan === 24,
  ),
  ...dataFostiAllMembers.filter(
    (m) => m.role === "Member Hubpub" && m.fostiAngkatan === 25,
  ),
];
