"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaCubes } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrCube } from "react-icons/gr";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MdOutlineArticle } from "react-icons/md";
import { useRouter } from "next/navigation";

const divisions = [
  {
    name: "Research and Technology",
    link: "/divisi/ristek",
    desc: "Conducts research and development of open-source technology for FOSTI and the community.",
    icon: <FaCubes />,
  },
  {
    name: "Public Relations",
    link: "/divisi/hubpub",
    desc: "Manages FOSTI's public image and communication with external parties.",
    icon: <FaCubes />,
  },
  {
    name: "Organizational",
    link: "/divisi/keor",
    desc: "Focuses on internal management and development of FOSTI's organizational structure.",
    icon: <FaCubes />,
  },
];

const mobileLinks = [
  { name: "About Us", href: "/#about", icon: <AiOutlineQuestionCircle /> },
  { name: "Our Programs", href: "/#proker", icon: <GrCube /> },
  { name: "Blogs", href: "/blogs", icon: <MdOutlineArticle /> },
];

const Navbar = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigate = (href: string) => {
    closeMenu();
    router.push(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background py-3 drop-shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            {mounted ? (
              <Image
                src={
                  theme === "dark"
                    ? "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/LOGO_FOSTI_PUTIH_imvkxw.png"
                    : "https://res.cloudinary.com/airlanggapradana/image/upload/v1755442684/logo_ch57ma.png"
                }
                alt="Logo"
                width={70}
                height={70}
              />
            ) : (
              <div className="h-[70px] w-[70px]" />
            )}
          </Link>
        </div>

        <NavigationMenu className="hidden items-center gap-5 md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-1">
                <FaCubes />
                <span className="text-sm font-semibold hover:text-primary/80">
                  Our Divisions
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {divisions.map((division) => (
                    <ListItem
                      key={division.name}
                      title={division.name}
                      href={division.link}
                    >
                      {division.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/#about"
                  onClick={() => router.push("/#about")}
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10`}
                >
                  <AiOutlineQuestionCircle />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    About Us
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/#proker"
                  onClick={() => router.push("/#proker")}
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10`}
                >
                  <GrCube />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    Our Programs
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/blogs"
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10`}
                >
                  <MdOutlineArticle />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    Blogs
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-foreground transition-colors hover:bg-muted-foreground/10 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      </header>

      {mounted &&
        createPortal(
          <>
            {/* overlay */}
            <div
              className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                isMenuOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <div
              className={`fixed inset-y-0 right-0 z-[70] flex h-dvh w-[280px] max-w-[85vw] flex-col border-l border-border/40 bg-background shadow-2xl transition-transform duration-300 ease-out md:hidden ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between border-b border-border/40 px-5 py-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted-foreground/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  {mobileLinks.map((item) => (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(item.href)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold text-foreground transition-colors hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500"
                      >
                        <span className="text-lg text-red-500">
                          {item.icon}
                        </span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t border-border/40 pt-4">
                  <p className="mb-2 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <FaCubes className="text-red-500" />
                    Our Divisions
                  </p>
                  <ul className="flex flex-col gap-1">
                    {divisions.map((division) => (
                      <li key={division.name}>
                        <button
                          type="button"
                          onClick={() => handleNavigate(division.link)}
                          className="group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-500"
                        >
                          <span>{division.name}</span>
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="border-t border-border/40 px-5 py-4 text-center text-xs text-muted-foreground">
                FOSTI UMS &copy; {new Date().getFullYear()}
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;