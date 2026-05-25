import type { Metadata } from "next";
import { ServicesPage } from "@/components/midnight/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "In-Person Training, Online Coaching, and Nutrition Coaching. Pick the lane. Show up either way.",
};

export default function Page() {
  return <ServicesPage />;
}
