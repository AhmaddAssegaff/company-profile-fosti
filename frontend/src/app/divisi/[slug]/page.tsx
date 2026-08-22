import Hubpub from "@/components/Divisi/Hubpub";
import Keor from "@/components/Divisi/Keor";
import Ristek from "@/components/Divisi/Ristek";
import Squares from "@/components/Squares/Squares";
import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const VALID_SLUGS = ["ristek", "hubpub", "keor"] as const;
type DivisiSlug = (typeof VALID_SLUGS)[number];

function isValidSlug(slug: string): slug is DivisiSlug {
  return (VALID_SLUGS as readonly string[]).includes(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "ristek") {
    return {
      title: "RISTEK",
      description: "Divisi Riset dan Teknologi FOSTI UMS",
    };
  }
  if (slug === "hubpub") {
    return {
      title: "HUBPUB",
      description: "Divisi Hubungan Publik FOSTI UMS",
    };
  }
  if (slug === "keor") {
    return {
      title: "KEOR",
      description: "Divisi Keorganisasian FOSTI UMS",
    };
  }
  return {
    title: "Page Not Found — FOSTI UMS",
    description: "Division not found. The requested division does not exist.",
  };
}

export default async function DivisiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0 opacity-15">
        <Squares
          speed={0.25}
          squareSize={30}
          direction="down" // up, down, left, right, diagonal
          borderColor={"#999999"}
        />
      </div>
      <div className="relative z-10">
        {slug === "ristek" && <Ristek />}
        {slug === "hubpub" && <Hubpub />}
        {slug === "keor" && <Keor />}
      </div>
    </div>
  );
}