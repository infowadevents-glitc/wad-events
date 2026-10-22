"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
  PortfolioItem,
  PortfolioCategory,
} from "@/data/portfolio";
import {
  ArrowRight,
  MapPin,
  Users,
  Calendar,
  X,
  Sparkles,
  Maximize2,
  MessageCircle,
  Play,
  Film,
} from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Filter items
  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-wad-canvas dark:bg-wad-charcoal-dark py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HERO TITLE SECTION                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-wad-charcoal dark:text-white leading-tight">
            Our Portfolio of Moments
          </h1>
          <p className="text-base sm:text-lg text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
            A glimpse into the celebrations, milestones, and experiences we&apos;ve
            had the honour of bringing to life across Lagos and destination venues.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CATEGORY FILTER TABS                                      */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? PORTFOLIO_ITEMS.length
                : PORTFOLIO_ITEMS.filter((item) => item.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as PortfolioCategory)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-wad-wine text-white shadow-md shadow-wad-wine/20 scale-105"
                    : "bg-white dark:bg-wad-charcoal-card text-wad-slate dark:text-wad-nude hover:bg-wad-nude/40 dark:hover:bg-white/10 hover:text-wad-charcoal dark:hover:text-white border border-wad-nude/70 dark:border-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-wad-canvas dark:bg-white/10 text-wad-slate-light dark:text-wad-nude/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* GALLERY ITEMS GRID                                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-wad-wine/40 dark:hover:border-wad-steel/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-wad-charcoal/5 dark:bg-wad-charcoal-dark">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Scope Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider bg-white/95 dark:bg-wad-charcoal/90 text-wad-charcoal dark:text-white px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                    {item.serviceScope}
                  </span>
                </div>

                {/* Quick Expand Icon on Hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-wad-charcoal/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Location / Meta Tag at Bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-wad-steel" />
                    <span>{item.location}</span>
                  </span>
                  {item.guestCount && (
                    <span className="flex items-center gap-1 text-wad-nude">
                      <Users className="w-3 h-3 text-wad-steel" />
                      <span>{item.guestCount}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-wad-charcoal dark:text-white group-hover:text-wad-wine dark:group-hover:text-wad-steel transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-wad-nude/50 dark:border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-wad-canvas dark:bg-white/5 text-wad-slate dark:text-wad-nude/70 px-2.5 py-0.5 rounded-md border border-wad-nude/60 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-wad-wine dark:text-wad-steel group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE LIGHTBOX MODAL                                */}
        {/* ========================================================= */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-wad-charcoal/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-white dark:bg-wad-charcoal-card rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-wad-charcoal/70 text-white hover:bg-wad-wine transition-colors flex items-center justify-center focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative aspect-[16/9] w-full bg-wad-charcoal">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider bg-wad-wine text-white px-3 py-1 rounded-full mb-2 inline-block">
                    {selectedItem.serviceScope}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
                    {selectedItem.title}
                  </h2>
                </div>
              </div>

              {/* Modal Details Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-wad-slate dark:text-wad-nude/80 border-b border-wad-nude/60 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-wad-wine dark:text-wad-steel" />
                    <span>{selectedItem.location}</span>
                  </div>
                  {selectedItem.guestCount && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-wad-wine dark:text-wad-steel" />
                      <span>{selectedItem.guestCount}</span>
                    </div>
                  )}
                  {selectedItem.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-wad-wine dark:text-wad-steel" />
                      <span>Executed in {selectedItem.year}</span>
                    </div>
                  )}
                </div>

                {/* Narrative description */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/60 mb-2">
                    The Event Experience
                  </h4>
                  <p className="text-sm sm:text-base text-wad-slate dark:text-wad-nude/80 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/60 mb-2">
                    Specialized Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-wad-canvas dark:bg-white/10 text-wad-slate dark:text-wad-nude px-3 py-1 rounded-lg border border-wad-nude dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-wad-nude/60 dark:border-white/10">
                  <span className="text-xs sm:text-sm text-wad-slate dark:text-wad-nude/80 font-medium">
                    Planning a similar celebration?
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                      href={`/contact?inquiry=${encodeURIComponent(
                        selectedItem.title
                      )}`}
                      onClick={() => setSelectedItem(null)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-wad-wine hover:bg-wad-wine-dark text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM GALLERY INQUIRY BANNER                             */}
        {/* ========================================================= */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-wad-wine text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-wad-steel bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Your Milestone Next
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
              Inspired by what you see?
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans">
              Let&apos;s design a celebration tailored uniquely to your story.
              From intimate vows to grand summits, we hold every detail
              together with care and excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-wad-wine hover:bg-wad-nude text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
              >
                <span>Discuss Your Vision with Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/23490778881443?text=Hello%20WAD%20Events%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20planning%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
