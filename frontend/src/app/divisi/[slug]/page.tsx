import Hubpub from "@/components/Divisi/Hubpub";
import Keor from "@/components/Divisi/Keor";
import Ristek from "@/components/Divisi/Ristek";
import Squares from "@/components/Squares/Squares";
import React from "react";
import type { Metadata } from "next";

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
    title: "Divisi FOSTI UMS",
    description: "Divisi-divisi di FOSTI UMS",
  };
}

export default async function DivisiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
