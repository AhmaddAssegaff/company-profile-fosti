"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Github, Instagram, Youtube, MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const footerLinks = [
  {
    title: "Explore",
    items: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "#about" },
      { name: "Achievements", href: "#achievements" },
      { name: "Executives", href: "#divisi" },
    ],
  },
  {
    title: "Divisions",
    items: [
      { name: "Organizational", href: "/divisi/keor" },
      { name: "Research and Technology", href: "/divisi/ristek" },
      { name: "Public Relations", href: "/divisi/hubpub" },
    ],
  },
  {
    title: "Community",
    items: [
      { name: "Blog", href: "/blogs" },
      { name: "Join Us", href: "#join" },
    ],
  },
];

const socials = [
  { name: "GitHub", href: "https://github.com/FOSTI-UMS", icon: Github },
  {
    name: "Instagram",
    href: "http://instagram.com/fosti_ums",
    icon: Instagram,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@fostiums",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fostiums",
    icon: Linkedin,
  },
  { name: "Whatsapp", href: "https://wa.me/+6282137276077", icon: FaWhatsapp },
];

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border bg-background px-4 pt-14 sm:px-6 md:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 pb-12 lg:flex-row">
          {/* Brand column */}
          <div className="max-w-full flex-1 lg:max-w-[380px]">
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/LOGO_FOSTI_PUTIH_imvkxw.png"
                    : "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/logo_ch57ma.png"
                }
                alt="FOSTI Logo"
                width={120}
                height={120}
                className="h-auto w-auto max-w-[140px]"
              />
            </Link>

            <p className="mb-2 text-sm font-semibold leading-relaxed text-foreground">
              Created by RISTEK Web Development Team.
            </p>
            <p className="mb-7 max-w-80 text-sm italic leading-relaxed text-muted-foreground">
              An independent, student-run non-profit organization cultivating
              interest in science and technology since 2008.
            </p>

            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-red-500/40 hover:text-red-500"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex w-full max-w-3xl flex-1 flex-wrap justify-between gap-8 sm:flex-nowrap">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-6 text-base font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="flex list-none flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-9 max-w-6xl">
          <div className="flex flex-1 items-start gap-2.5">
            <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <h4 className="mb-0.5 text-base font-medium text-foreground">
                Address
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Gedung J Lantai 3 sayap Kanan Fakultas Komunikasi dan
                Informatika Universitas Muhammadiyah Surakarta
                <br />
                Surakarta 57169, Indonesia
              </p>
            </div>
          </div>
 
          <div className="flex flex-1 items-start gap-2.5">
            <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
              <Phone className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <h4 className="mb-0.5 text-base font-medium text-foreground">
                Phone
              </h4>
              <Link
                href="tel:+6282137276077"
                className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
              >
                +62 821-3727-6077
              </Link>
            </div>
          </div>
 
          <div className="flex flex-1 items-start gap-2.5">
            <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
              <Mail className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <h4 className="mb-0.5 text-base font-medium text-foreground">
                Email
              </h4>
              <Link
                href="mailto:fostiums@gmail.com"
                className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
              >
                fostiums@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FOSTI UMS, Org. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5 md:gap-9">
            <Link
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="#partners"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Partners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;