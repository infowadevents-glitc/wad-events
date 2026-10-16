import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart, ArrowUpRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/contact";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-wad-charcoal text-white pt-16 pb-12 border-t border-wad-charcoal/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block" aria-label="WAD Events Home">
              <div className="relative w-44 h-12">
                <Image
                  src="/brand/wad-logo-white.svg"
                  alt="WAD Events Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="font-serif italic text-wad-nude text-lg">
              &ldquo;Planned with heart, delivered with excellence.&rdquo;
            </p>

            <p className="text-sm text-wad-nude/80 max-w-md leading-relaxed">
              There is a lot to hold together when bringing people together. WAD
              Events helps you hold it all together, with care, structure, and
              thoughtful execution.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs bg-white/10 text-wad-steel px-3 py-1 rounded-full font-mono">
                #WADEvents
              </span>
              <span className="text-xs bg-white/10 text-wad-steel px-3 py-1 rounded-full font-mono">
                #PlanwithWAD
              </span>
              <span className="text-xs bg-white/10 text-wad-steel px-3 py-1 rounded-full font-mono">
                #CelebrateWithCare
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-wad-steel">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-wad-nude/80 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-wad-nude/80 hover:text-white transition-colors"
                >
                  About Us &amp; Story
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-wad-nude/80 hover:text-white transition-colors"
                >
                  Planning &amp; Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-wad-nude/80 hover:text-white transition-colors"
                >
                  Portfolio &amp; Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-wad-nude/80 hover:text-white transition-colors"
                >
                  Quotation Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-wad-steel">
              Connect &amp; Inquire
            </h3>
            <ul className="space-y-3 text-sm text-wad-nude/80">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-wad-steel shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-wad-steel shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp: {BUSINESS_INFO.phoneFormatted}</span>
                  <ArrowUpRight className="w-3 h-3 text-wad-steel" />
                </a>
              </li>
              <li className="flex items-start gap-3">
                <InstagramIcon className="w-4 h-4 text-wad-steel shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{BUSINESS_INFO.instagram.handle}</span>
                  <ArrowUpRight className="w-3 h-3 text-wad-steel" />
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-wad-steel shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium bg-wad-wine hover:bg-wad-wine-dark text-white px-4 py-2.5 rounded-full transition-all duration-200"
              >
                <span>Request a Custom Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wad-nude/60">
          <p>© {currentYear} WAD Events. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-wad-wine fill-wad-wine" />
            <span>for unforgettable celebrations</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
