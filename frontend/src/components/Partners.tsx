import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sparkles } from "lucide-react";

const partners = [
  {
    name: "Universitas Muhammadiyah Surakarta",
    logo: "https://news.ums.ac.id/id/wp-content/uploads/sites/2/2022/12/Resmi_Logo_UMS_Color_FullText.png",
    url: "https://ums.ac.id",
    width: 200,
    mono: false,
  },
  {
    name: "Program Studi Teknik Informatika",
    logo: "https://teknikinformatika.ums.ac.id/wp-content/uploads/sites/57/2022/10/logo-informatika.svg",
    url: "https://teknikinformatika.ums.ac.id",
    width: 200,
    mono: true,
  },
];

const Partners = () => {
  return (
    <section
      id="partners"
      className="relative mx-auto max-w-screen-2xl overflow-hidden px-5 py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.7]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,120,120,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,120,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mb-14 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300/60 bg-neutral-100/60 px-3 py-2 text-sm font-semibold uppercase tracking-wider text-neutral-500 backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-800/40 dark:text-neutral-400">
          <Sparkles className="h-4.5 w-4.5 text-red-500" />
          Partners
        </div>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-3xl lg:text-4xl">
          Supported by
        </h2>
        <p className="mx-auto max-w-xl px-2 text-sm font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-base">
          We receive full support from various parties in carrying out our
          work programs.
        </p>
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${partner.name} website`}
            className={`group flex items-center justify-center transition-all duration-300 ${
              partner.mono
                ? "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:grayscale-0 dark:brightness-150 dark:hover:brightness-100"
            }`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.width}
              className={`h-auto w-full max-w-[500px] object-contain sm:max-w-[520px] ${
                partner.mono ? "invert dark:invert-0" : ""
              }`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Partners;