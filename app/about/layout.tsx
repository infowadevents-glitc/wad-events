import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WAD Events",
  description:
    "Learn about WAD Events — our story, philosophy, and dedication to creating stress-free, joy-filled celebrations with structure and care.",
  openGraph: {
    title: "About Us | WAD Events",
    description:
      "Planned with heart, delivered with excellence. Discover the story and core pillars behind WAD Events.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
