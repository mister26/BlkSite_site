import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ConsoleBriefing } from "@/components/ConsoleBriefing";
import { SourceNotes } from "@/components/SourceNotes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "BLACKSITE — Authorized Security Research";
const description =
  "A private, scope-guarded security research framework by Redacted.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "BLACKSITE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SourceNotes />
        <ConsoleBriefing />
        {children}
      </body>
    </html>
  );
}
