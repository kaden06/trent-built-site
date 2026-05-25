import type { Metadata } from "next";
import { ResultsPage } from "@/components/midnight/ResultsPage";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Six months, a year, two years in. The kind of progress that holds. Three case studies and what clients say after a year.",
};

export default function Page() {
  return <ResultsPage />;
}
