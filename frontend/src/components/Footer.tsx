"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Github, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="border-t bg-background py-8 md:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center md:col-span-2 md:items-start">
            <Link href="#" className="flex items-center space-x-2">
              <Image
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/LOGO_FOSTI_PUTIH_imvkxw.png"
                    : "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/logo_ch57ma.png"
                }
                alt="Logo"
                width={120}
                height={120}
                className="h-auto w-auto max-w-[160px] md:max-w-[200px]"
              />
            </Link>
            <p className="mt-4 text-center text-base font-semibold text-muted-foreground md:text-left">
              Created by RISTEK Web Development Team.
            </p>
            <p className="mt-4 text-center text-sm font-medium italic leading-relaxed text-muted-foreground/70 md:text-left">
              Gedung J Lantai 3 sayap Kanan Fakultas Komunikasi dan Informatika
              Universitas Muhammadiyah Surakarta, Surakarta 57169
            </p>
          </div>
        </div>
        <Separator className="my-6 md:my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs text-muted-foreground md:text-left">
            © {new Date().getFullYear()} FOSTI UMS, Org. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <Link
              href="https://github.com/FOSTI-UMS"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="http://instagram.com/fosti_ums"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/@fostiums"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link
              href="https://wa.me/62816331463"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Whatsapp</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
