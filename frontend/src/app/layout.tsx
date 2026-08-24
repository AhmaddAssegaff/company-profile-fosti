import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import { type Metadata } from "next";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { env } from "@/env";
import AOSProvider from "../lib/aos";

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: "FOSTI UMS",
    template: "%s | FOSTI UMS",
  },
  description:
    "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "FOSTI UMS",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth`} suppressHydrationWarning>
      <body>
        <AOSProvider />
        <ThemeProvider attribute={"class"} defaultTheme="light">
          <main className="gradient-bg-main min-h-screen">
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
