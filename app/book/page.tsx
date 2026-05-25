import type { Metadata } from "next";
import { BookPage } from "@/components/midnight/BookPage";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "30 minutes. No pressure. Pick a slot and tell Trent where you are. Reply within 24 hours.",
};

export default function Page() {
  return <BookPage />;
}
