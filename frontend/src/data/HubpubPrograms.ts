import { type ProgramType } from "@/types/image";
const compro = "https://res.cloudinary.com/qjw4yfke/image/upload/v1784116099/cld-sample-4.jpg";
const stuban = "https://res.cloudinary.com/qjw4yfke/image/upload/v1784116099/cld-sample-4.jpg";

export const hubpubPrograms: ProgramType[] = [
  {
    src: compro,
    width: 600,
    height: 400,
    alt: "Program 1",
    title: "Company Profile",
    description:
      "Responsible for creating and maintaining the company profile, ensuring it reflects our values and mission.",
    date: "24 Mei 2026",
  },
  {
    src: stuban,
    width: 600,
    height: 400,
    alt: "Program 2",
    title: "Student Affairs",
    description:
      "Exchanging insights and exploring best practices through collaborative visits to foster mutual growth.",
    date: "Coming Soon",
  },
  // {
  //   src: "https://placehold.co/600x400/png",
  //   width: 600,
  //   height: 400,
  //   alt: "Program 2",
  //   title: "Program 2",
  //   description:
  //     "A brief description of Program 2, showcasing its unique features.",
  // },
  // {
  //   src: "https://placehold.co/600x400/png",
  //   width: 600,
  //   height: 400,
  //   alt: "Program 3",
  //   title: "Program 3",
  //   description:
  //     "A brief description of Program 3, emphasizing its contributions.",
  // },
  // {
  //   src: "https://placehold.co/600x400/png",
  //   width: 600,
  //   height: 400,
  //   alt: "Program 4",
  //   title: "Program 4",
  //   description:
  //     "A brief description of Program 3, emphasizing its contributions.",
  // },
  // {
  //   src: "https://placehold.co/600x400/png",
  //   width: 600,
  //   height: 400,
  //   alt: "Program 5",
  //   title: "Program 5",
  //   description:
  //     "A brief description of Program 3, emphasizing its contributions.",
  // },
];
