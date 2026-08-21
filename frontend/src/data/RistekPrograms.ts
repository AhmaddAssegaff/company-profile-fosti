import { type ProgramType } from "@/types/image";
const fostech = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostech_hcfbmr.webp";
const fostech_uiux = "";
const sandbox = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Sandbox_gehkwg.webp";
const fostifest = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostifest_ypvjx1.webp";

export const ristekPrograms: ProgramType[] = [
  {
    src: fostech,
    width: 600,
    height: 400,
    alt: "Program 1",
    title: "FOSTECH CAMP PROGRAMING",
    description:
      "An intensive training program designed to equip tech enthusiasts with practical web development skills through hands-on experience.",
    date: "Sabtu (30 Apr, 2, 9, 16, 23 Mei, 6 Jun 2026)",
  },
  {
    src: fostech_uiux,
    width: 600,
    height: 400,
    alt: "Program 2",
    title: "FOSTECH CAMP UI/UX",
    description:
      "An intensive training program designed to equip participants with practical UI/UX design skills through hands-on experience.",
    date: "Coming Soon",
  },
  {
    src: sandbox,
    width: 600,
    height: 400,
    alt: "Program 3",
    title: "Sandbox",
    description:
      "A collaborative playground that allows FOSTI members to build, explore, and work together to create something incredible while developing practical technical skills.",
  },
  {
    src: fostifest,
    width: 600,
    height: 400,
    alt: "Program 4",
    title: "FOSTIFEST",
    description:
      "An annual flagship event organized by FOSTI that combines intensive workshops with exciting competitions to showcase and develop technological talents across various domains.",
    date: "07 Desember 2025",
  },
];
