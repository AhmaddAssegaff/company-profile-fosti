import { type ProgramType } from "@/types/image";
const fostech = "https://res.cloudinary.com/qjw4yfke/image/upload/v1784116099/cld-sample-4.jpg";
const fostech_uiux = "https://res.cloudinary.com/qjw4yfke/image/upload/v1784116099/cld-sample-4.jpg";
const sandbox = "https://res.cloudinary.com/qjw4yfke/image/upload/v1784116099/cld-sample-4.jpg";

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
    src: "https://fostifest.fostiums.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.2367bf88.webp&w=3840&q=75",
    width: 600,
    height: 400,
    alt: "Program 4",
    title: "FOSTIFEST",
    description:
      "An annual flagship event organized by FOSTI that combines intensive workshops with exciting competitions to showcase and develop technological talents across various domains.",
    date: "07 Desember 2025",
  },
];
