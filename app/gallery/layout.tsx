import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Gallery | WAD Events",
  description:
    "Explore our portfolio of weddings, corporate conferences, and private celebrations planned and coordinated with care, structure, and excellence.",
  openGraph: {
    title: "Portfolio & Gallery | WAD Events",
    description:
      "A glimpse into the celebrations, milestones, and corporate summits orchestrated by WAD Events.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
