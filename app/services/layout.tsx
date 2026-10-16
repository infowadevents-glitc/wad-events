import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Planning & Coordination Services | WAD Events",
  description:
    "Explore our full suite of event services: Full Event Planning, Coordination, On-the-Day Management, WAD Couple Experience, Styling & Decor, and Academy mentorship.",
  openGraph: {
    title: "Event Planning & Coordination Services | WAD Events",
    description:
      "Support for every stage of your event journey. Full planning, day-of coordination, wedding intensive sprints, and bespoke spatial styling.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
