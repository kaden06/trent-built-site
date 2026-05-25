import type { Metadata } from "next";
import { AboutPage } from "@/components/midnight/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eight years of in-person and online coaching. Built for adults who've already tried the apps, the trends, the 6-week challenges.",
};

export default function Page() {
  return <AboutPage />;
}
