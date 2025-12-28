import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FluidCursor from "@/components/ui/FluidCursor";
import PageLoader from "@/components/ui/PageLoader";
import Dock from "@/components/layout/Dock";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mohamed Amine ADNANE - Software Engineer",
  description: "5th-year engineering student specializing in Computer Science and Networks. Passionate about full-stack development, AI, and data science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "bg-background text-foreground antialiased")}>
        <PageLoader />
        <SmoothScroll>
          <div className="bg-noise" />
          <FluidCursor />
          {children}
          <Dock />
        </SmoothScroll>
      </body>
    </html>
  );
}
