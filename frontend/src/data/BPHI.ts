import type { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const bphiTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) =>
    member.role.includes("Director of FOSTI") ||
    member.role.includes("Vice Director of FOSTI") ||
    member.role.includes("Finance 1") ||
    member.role.includes("Finance 2") ||
    member.role.includes("Secretary 1") ||
    member.role.includes("Secretary 2"),
);
