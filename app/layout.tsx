import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#731823",
};

export const metadata: Metadata = {
  title: "WAD Events | Boutique Event Planning, Coordination & Styling",
  description:
    "Planned with heart, delivered with excellence. WAD Events creates stress-free, joy-filled weddings, corporate galas, and intimate celebrations.",
  keywords: [
    "WAD Events",
    "event planning",
    "wedding coordinator",
    "boutique event planner",
    "Plan with WAD",
    "luxury event styling",
  ],
  authors: [{ name: "WAD Events" }],
  icons: {
    icon: "/brand/wad-brandmark.svg",
    apple: "/brand/wad-brandmark.svg",
  },
  openGraph: {
    title: "WAD Events | Boutique Event Planning, Coordination & Styling",
    description:
      "There is a lot to hold together when bringing people together. WAD Events helps you hold it all together with care, structure, and thoughtful execution.",
    type: "website",
    locale: "en_US",
    siteName: "WAD Events",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('wad_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-wad-canvas dark:bg-wad-charcoal-dark text-wad-charcoal dark:text-wad-nude-light font-sans selection:bg-wad-wine selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-[72px] sm:pt-[80px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
