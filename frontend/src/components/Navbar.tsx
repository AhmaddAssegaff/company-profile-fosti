"use client";
import React from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaCubes } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrCube } from "react-icons/gr";
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

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background py-3 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
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
                  href="#about"
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
                  href="#proker"
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10`}
                >
                  <GrCube />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    Our Programs
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
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
