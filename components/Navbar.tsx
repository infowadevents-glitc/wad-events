"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, CalendarHeart } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isDark = mounted && theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-sm"
          : "bg-wad-canvas/90 dark:bg-wad-charcoal-dark/90 backdrop-blur-sm py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-200 active:scale-95"
            aria-label="WAD Events Home"
          >
            <div className="relative w-36 sm:w-44 h-10 sm:h-12">
              <Image
                src={
                  isDark
                    ? "/brand/wad-logo-white.svg"
                    : "/brand/wad-logo-primary.svg"
                }
                alt="WAD Events Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-wad-wine dark:text-wad-steel font-semibold"
                      : "text-wad-charcoal/80 dark:text-wad-nude/80 hover:text-wad-wine dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-wad-wine dark:bg-wad-steel rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Header Actions (Theme Toggle + CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-wad-wine text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-wad-wine-dark hover:shadow-md transition-all duration-200 active:scale-95 group"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: ThemeToggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-wad-charcoal dark:text-wad-nude hover:text-wad-wine hover:bg-wad-nude/30 dark:hover:bg-white/10 transition-colors focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-wad-wine dark:text-wad-steel" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-wad-charcoal/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-down / Drawer */}
      <div
        className={`fixed top-[65px] left-0 right-0 bg-wad-canvas dark:bg-wad-charcoal-dark border-b border-wad-nude dark:border-white/10 shadow-xl z-50 md:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel font-semibold"
                      : "text-wad-charcoal dark:text-wad-nude hover:bg-wad-nude/40 dark:hover:bg-white/5 hover:text-wad-wine dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-wad-nude/60 dark:border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-wad-wine text-white text-base font-medium py-3 px-5 rounded-full shadow-md hover:bg-wad-wine-dark active:scale-98 transition-all"
            >
              <CalendarHeart className="w-5 h-5" />
              <span>Plan Your Event</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
