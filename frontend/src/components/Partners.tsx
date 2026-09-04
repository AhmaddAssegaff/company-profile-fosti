import Image from "next/image";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

const partners = [
  {
    name: "Universitas Muhammadiyah Surakarta",
    logo: "../../public/ums-logo.png",
    url: "https://ums.ac.id",
    width: 200,
    mono: false,
  },
  {
    name: "Program Studi Teknik Informatika",
    logo: "../../public/infor-logo.png",
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

      <div data-aos="fade-up" className="relative mb-14 text-center">
        <div className="mb-4 inline-flex -rotate-2 items-center gap-2 border-2 border-black bg-amber-300 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-amber-400 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          <HeartHandshake className="h-4.5 w-4.5" />
          Partners
        </div>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-3xl lg:text-4xl">
          Supported by
        </h2>
        <p className="mx-auto max-w-xl px-2 text-sm font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-base">
          We receive full support from various parties in carrying out our work
          programs.
        </p>
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
        {partners.map((partner, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            <Link
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name} website`}
              className={`group flex items-center justify-center transition-all duration-300 ${partner.mono
                ? "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:brightness-150 dark:grayscale-0 dark:hover:brightness-100"
                }`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.width}
                className={`h-auto w-full max-w-[500px] object-contain sm:max-w-[520px] ${partner.mono ? "invert dark:invert-0" : ""
                  }`}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
