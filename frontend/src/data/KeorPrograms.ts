import { type ProgramType } from "@/types/image";
const program1 = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Oprec_7_hdzxly.webp";
const program2 = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Fostisida_q75ixj.webp";
const program3 = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Musker_juacwp.webp";
const program4 = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/TOT_6_k8saqo.webp";
const program5 = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Ifosti_ucvapc.webp";
const program6 = "https://res.cloudinary.com/qjw4yfke/image/upload/f_auto/q_auto/Pleno1_qfmsdu.webp";

export const keorPrograms: ProgramType[] = [
  {
    src: program1,
    width: 600,
    height: 400,
    alt: "Program 1",
    title: "Open Recruitment",
    description:
      "Welcoming passionate individuals to join our community, grow together, and make a meaningful impact.",
    date: "14 September 2025",
  },
  {
    src: program2,
    width: 600,
    height: 400,
    alt: "Program 2",
    title: "FOSTISIDA",
    description:
      "A collaborative networking event that builds strong bonds among members through interactive activities, knowledge sharing sessions, and team-building exercises.",
    date: "22-23 November 2025",
  },
  {
    src: program3,
    width: 600,
    height: 400,
    alt: "Program 3",
    title: "Musyawarah Kerja",
    description:
      "Formulating strategic work programs and aligning our visions for the upcoming organizational period.",
    date: "14-15 & 18-22 Desember 2025",
  },
  {
    src: program4,
    width: 600,
    height: 400,
    alt: "Program 4",
    title: "Training of Trainers",
    description:
      "Cultivating leadership and teaching capabilities to prepare the next generation of organizational trainers.",
    date: "14 Februari 2026",
  },
  {
    src: program5,
    width: 600,
    height: 400,
    alt: "Program 5",
    title: "Ifosti",
    description:
      "A special gathering to break the fast together, fostering spiritual connection and organizational kinship.",
    date: "1 Maret 2026",
  },
  {
    src: program6,
    width: 600,
    height: 400,
    alt: "Program 6",
    title: "Pleno 1",
    description:
      "Evaluating our initial progress and realigning strategies to ensure the successful execution of upcoming programs.",
    date: "5 Juli 2026",
  },
];
