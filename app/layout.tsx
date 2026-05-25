import type { Metadata } from "next";
import { Inter, Archivo, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MidNav } from "@/components/midnight/Nav";
import { MidFooter } from "@/components/midnight/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-archivo-black",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trent Built — Personal Training & Online Coaching",
    template: "%s | Trent Built",
  },
  description:
    "1-on-1 personal training, online coaching, and nutrition coaching. Built for people who want results that last.",
  keywords: [
    "personal trainer",
    "online coaching",
    "nutrition coaching",
    "fitness",
    "transformation",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Trent Built — Personal Training & Online Coaching",
    description:
      "1-on-1 personal training, online coaching, and nutrition coaching. Built for people who want results that last.",
    siteName: "Trent Built",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Trent Built",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trent Built — Personal Training & Online Coaching",
    description:
      "1-on-1 personal training, online coaching, and nutrition coaching.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${archivoBlack.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-midnight font-archivo text-cream antialiased">
        <MidNav />
        <main>{children}</main>
        <MidFooter />
      </body>
    </html>
  );
}
