import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Quotation Request | WAD Events",
  description:
    "Tell us what you are planning. Request a personalized event quotation or chat directly with the WAD Events planning team.",
  openGraph: {
    title: "Contact & Quotation Request | WAD Events",
    description:
      "Tell us what you are planning. Request a custom event quotation or connect with our planning team on WhatsApp.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
