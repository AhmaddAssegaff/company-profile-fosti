import type { StaticImageData } from "next/image";

export type Division = "Ristek" | "Keor" | "Hubpub";

export type Role =
  | "Director of FOSTI"
  | "Vice Director of FOSTI"
  | "Head of Ristek"
  | "Head of Keor"
  | "Head of Hubpub"
  | "Secretary of Ristek"
  | "Secretary of Keor"
  | "Secretary of Hubpub"
  | "General Finance 1"
  | "General Finance 2"
  | "General Secretary 1"
  | "General Secretary 2"
  | "Member Ristek"
  | "Member Keor"
  | "Member Hubpub";

export interface ImageType {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  title: string;
  description?: string;
}

export interface ProgramType {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  title: string;
  description: string;
  date?: string;
}

export interface TeamType {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  role: Role;
  name: string;
  linkedin?: string;
  instagram?: string;
  fostiAngkatan: number;
  divisi?: Division;
  isBphi?: boolean;
}
