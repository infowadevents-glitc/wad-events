"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Star,
  ShieldCheck,
  Smile,
  Eye,
  Heart,
  MessageCircle,
  Play,
  Pause,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";

// Icon mapping helper for services
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-wad-wine dark:text-wad-steel" />,
  Layers: <Layers className="w-6 h-6 text-wad-wine dark:text-wad-steel" />,
  Clock: <Clock className="w-6 h-6 text-wad-wine dark:text-wad-steel" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-wad-wine dark:text-wad-steel" />,
};

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Home page teasers: Top 3 services and 4 featured portfolio items
  const featuredServices = SERVICES.slice(0, 3);
  const featuredPortfolio = PORTFOLIO_ITEMS.filter((item) => item.featured).slice(0, 4);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION WITH BACKGROUND EVENT VIDEO & MOTION      */}
      {/* ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 md:py-24 overflow-hidden">
        {/* Background Event Video Element */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          >
            <source src="/videos/hero-event-loop.mp4" type="video/mp4" />
            <source
              src="https://assets.mixkit.co/videos/42795/42795-720.mp4"
              type="video/mp4"
            />
          </video>

          {/* Luxury Event Ambient Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-wad-canvas/95 via-wad-canvas/85 to-wad-canvas/60 dark:from-wad-charcoal-dark/95 dark:via-wad-charcoal-dark/85 dark:to-wad-charcoal-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-wad-canvas dark:from-wad-charcoal-dark via-transparent to-transparent opacity-90" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wad-wine/10 dark:bg-wad-wine/20 rounded-full blur-3xl pointer-events-none z-0 animate-subtle-pulse" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-wad-steel/20 dark:bg-wad-steel/15 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow Badge with subtle shimmer */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wad-wine/10 dark:bg-white/10 border border-wad-wine/20 dark:border-white/15 text-wad-wine dark:text-wad-steel text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Boutique Event Planning, Coordination &amp; Styling</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-wad-charcoal dark:text-white leading-[1.15] tracking-tight drop-shadow-sm">
                You have enough to think about.{" "}
                <span className="italic font-normal text-wad-wine dark:text-wad-steel block mt-1">
                  Let us take care of the details.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-wad-slate dark:text-wad-nude/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
                WAD Events helps individuals, couples, and organisations plan,
                coordinate, and execute events with care, structure, and
                thoughtful attention to detail. You don&apos;t have to carry
                every detail alone.
              </p>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-wad-wine text-white text-base font-medium px-8 py-4 rounded-full shadow-lg shadow-wad-wine/30 hover:bg-wad-wine-dark hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shimmer-btn group"
                >
                  <span>Let&apos;s Plan Your Event</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-wad-wine/40 dark:border-white/20 text-wad-wine dark:text-wad-nude bg-white/70 dark:bg-white/5 backdrop-blur-sm hover:bg-wad-wine hover:text-white dark:hover:bg-white/20 text-base font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-wad-nude/60 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-wad-slate dark:text-wad-nude/80 font-medium">
                <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                  <CheckCircle2 className="w-4 h-4 text-wad-wine dark:text-wad-steel shrink-0" />
                  <span>Structured Timelines</span>
                </div>
                <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                  <CheckCircle2 className="w-4 h-4 text-wad-wine dark:text-wad-steel shrink-0" />
                  <span>Bespoke Styling</span>
                </div>
                <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                  <CheckCircle2 className="w-4 h-4 text-wad-wine dark:text-wad-steel shrink-0" />
                  <span>Calm On-Site Leadership</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Collage & Floating Badges (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card Container */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-white/10 group">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                    alt="Joyful wedding celebration by WAD Events"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/70 via-transparent to-transparent" />

                  {/* Overlaid Bottom Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card text-wad-charcoal dark:text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-xs uppercase font-mono tracking-wider text-wad-wine dark:text-wad-steel font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-wad-wine dark:bg-wad-steel animate-ping" />
                      Client Experience
                    </p>
                    <p className="font-serif text-base italic text-wad-charcoal dark:text-wad-nude mt-1">
                      &ldquo;We danced without worrying once about what was
                      happening behind the scenes.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Floating Decorative Pill with Float Animation */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-wad-charcoal-card py-2.5 px-4 rounded-2xl shadow-xl border border-wad-nude/80 dark:border-white/10 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-full bg-wad-wine/10 dark:bg-wad-wine/20 flex items-center justify-center text-wad-wine dark:text-wad-steel">
                    <Heart className="w-5 h-5 fill-wad-wine dark:fill-wad-steel" />
                  </div>
                  <div>
                    <p className="text-xs text-wad-slate dark:text-wad-nude/60">Commitment</p>
                    <p className="text-sm font-semibold text-wad-charcoal dark:text-white">
                      Planned with Heart
                    </p>
                  </div>
                </div>

                {/* Floating Metric Badge with Slow Float Animation */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-wad-charcoal dark:bg-[#1E1B1C] text-white py-3 px-5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-full bg-wad-wine flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-wad-nude">Peace of Mind</p>
                    <p className="text-sm font-semibold text-white">
                      Flawless Execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Motion Ambient Control Button */}
        <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={toggleVideoPlayback}
            aria-label={isVideoPlaying ? "Pause background video" : "Play background video"}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md border border-wad-nude/80 dark:border-white/15 text-xs text-wad-slate dark:text-wad-nude hover:text-wad-wine dark:hover:text-white shadow-sm transition-all duration-200 cursor-pointer"
          >
            {isVideoPlaying ? (
              <>
                <Pause className="w-3 h-3 text-wad-wine dark:text-wad-steel" />
                <span className="font-mono text-[11px]">Motion Active</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-wad-wine dark:text-wad-steel" />
                <span className="font-mono text-[11px]">Play Video</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT US TEASER (STANDALONE TEASER LINKING TO /about)  */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-white dark:bg-wad-charcoal border-y border-wad-nude/50 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual preview */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border-2 border-wad-nude/80 dark:border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85"
                  alt="WAD Events team in coordination"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card text-wad-charcoal dark:text-white">
                  <p className="font-serif italic text-sm text-wad-charcoal dark:text-wad-nude">
                    &ldquo;Planned with heart, delivered with excellence.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Teaser Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel text-xs font-semibold uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5" />
                <span>The WAD Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-wad-charcoal dark:text-white leading-tight">
                Every event has more happening behind the scenes than people see.
              </h2>

              <p className="text-base sm:text-lg text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
                Behind every celebration are hundreds of micro-decisions, vendor
                contracts, logistics timelines, and setup buffers. When you partner
                with WAD Events, we shoulder the pressure so you can be completely
                present in the moment.
              </p>

              {/* 3 Quick Pillar Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-wad-canvas dark:bg-wad-charcoal-card border border-wad-nude/60 dark:border-white/10">
                  <Smile className="w-5 h-5 text-wad-wine dark:text-wad-steel mb-2" />
                  <p className="font-serif font-semibold text-sm text-wad-charcoal dark:text-white">
                    Listen &amp; Prioritise
                  </p>
                  <p className="text-xs text-wad-slate dark:text-wad-nude/70 mt-1">
                    Your vision and family values lead every choice.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-wad-canvas dark:bg-wad-charcoal-card border border-wad-nude/60 dark:border-white/10">
                  <ShieldCheck className="w-5 h-5 text-wad-wine dark:text-wad-steel mb-2" />
                  <p className="font-serif font-semibold text-sm text-wad-charcoal dark:text-white">
                    Full Responsibility
                  </p>
                  <p className="text-xs text-wad-slate dark:text-wad-nude/70 mt-1">
                    Calm, authoritative on-site vendor management.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-wad-canvas dark:bg-wad-charcoal-card border border-wad-nude/60 dark:border-white/10">
                  <Eye className="w-5 h-5 text-wad-wine dark:text-wad-steel mb-2" />
                  <p className="font-serif font-semibold text-sm text-wad-charcoal dark:text-white">
                    Noticing Details
                  </p>
                  <p className="text-xs text-wad-slate dark:text-wad-nude/70 mt-1">
                    Every delicate nuance orchestrated with care.
                  </p>
                </div>
              </div>

              {/* Dedicated Page Link */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-wad-wine hover:bg-wad-wine-dark text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-md transition-all group"
                >
                  <span>Read Our Full Story &amp; Philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SIGNATURE SERVICES PREVIEW (TEASER LINKING TO /services) */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-wad-canvas dark:bg-wad-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
                Tailored Support
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-wad-charcoal dark:text-white leading-tight">
                Support for Every Stage of Your Event
              </h2>
              <p className="text-base text-wad-slate dark:text-wad-nude/80 max-w-xl">
                From full end-to-end planning to day-of coordination, we bring
                clarity, structure, and calm execution.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-wad-wine dark:text-wad-steel hover:text-wad-wine-dark dark:hover:text-white transition-colors self-start md:self-auto group"
            >
              <span>View All 7 Services &amp; Packages</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured 3 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/70 dark:border-white/10 hover:-translate-y-2 hover:shadow-2xl hover:border-wad-wine/50 dark:hover:border-wad-steel/50 transition-all duration-300 group"
              >
                {service.highlight && (
                  <span className="absolute -top-3 left-8 text-xs font-semibold bg-wad-wine dark:bg-wad-steel dark:text-wad-charcoal text-white px-3.5 py-1 rounded-full shadow-md animate-subtle-pulse">
                    {service.highlight}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-wad-slate/60 dark:text-wad-nude/40">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-wad-nude-light dark:bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-wad-wine/15 dark:group-hover:bg-white/20 transition-all duration-300">
                      {SERVICE_ICONS[service.icon] || (
                        <Sparkles className="w-6 h-6 text-wad-wine dark:text-wad-steel" />
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-wad-charcoal dark:text-white mb-3 group-hover:text-wad-wine dark:group-hover:text-wad-steel transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-wad-nude/50 dark:border-white/10 space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-wad-charcoal/70 dark:text-wad-nude/60">
                      Highlights:
                    </p>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-wad-slate dark:text-wad-nude/70"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-wad-wine dark:text-wad-steel shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-wad-wine dark:text-wad-steel hover:text-wad-wine-dark dark:hover:text-white group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>Learn More About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner linking to full services page */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-wad-charcoal dark:bg-white/10 text-white hover:bg-wad-charcoal/90 text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Explore All 7 Services, Occasions &amp; 72-Hour Wedding Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CURATED PORTFOLIO HIGHLIGHTS                           */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-white dark:bg-wad-charcoal border-y border-wad-nude/50 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-wad-charcoal dark:text-white leading-tight">
                Moments Crafted with Intentionality
              </h2>
              <p className="text-base text-wad-slate dark:text-wad-nude/80 max-w-xl">
                A glimpse into the celebrations, summits, and milestones we&apos;ve
                had the honour of executing.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-wad-wine dark:text-wad-steel hover:text-wad-wine-dark dark:hover:text-white transition-colors self-start md:self-auto group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Grid of Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-wad-charcoal-card border border-wad-nude dark:border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/85 via-wad-charcoal/20 to-transparent transition-opacity duration-300" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider bg-white/90 dark:bg-wad-charcoal/90 text-wad-charcoal dark:text-white px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                      {item.serviceScope}
                    </span>
                  </div>

                  {/* Overlaid Bottom Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-xs text-wad-nude flex items-center gap-1.5 mb-1">
                      <span>{item.location}</span>
                      {item.guestCount && (
                        <>
                          <span>•</span>
                          <span>{item.guestCount}</span>
                        </>
                      )}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-sm text-wad-slate dark:text-wad-nude/80 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-wad-canvas dark:bg-white/5 text-wad-slate dark:text-wad-nude/70 px-2.5 py-1 rounded-lg border border-wad-nude/60 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CLIENT TESTIMONIALS & SOCIAL PROOF                     */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-wad-canvas dark:bg-wad-charcoal-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-wad-charcoal dark:text-white leading-tight">
              Care You Can Feel, Execution You Can Trust
            </h2>
            <p className="text-base sm:text-lg text-wad-slate dark:text-wad-nude/80">
              Words from couples, corporate directors, and milestone hosts who
              trusted us to hold their moments together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-wad-wine dark:fill-amber-400 text-wad-wine dark:text-amber-400 transition-transform duration-200 group-hover:scale-110"
                      />
                    ))}
                  </div>

                  <p className="font-serif italic text-base sm:text-lg text-wad-charcoal/90 dark:text-wad-nude-light leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-wad-nude/70 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-sans font-semibold text-sm text-wad-charcoal dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-wad-slate dark:text-wad-nude/60">{testimonial.role}</p>
                  </div>
                  <span className="text-xs font-mono bg-wad-canvas dark:bg-white/10 px-2.5 py-1 rounded-md border border-wad-nude dark:border-white/10 text-wad-slate dark:text-wad-nude">
                    {testimonial.eventType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION BANNER                                  */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-white dark:bg-wad-charcoal border-t border-wad-nude/50 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-wad-wine text-white text-center relative overflow-hidden shadow-2xl">
            {/* Ambient pulse orb */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-subtle-pulse pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
                Ready to celebrate with peace of mind?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans">
                Tell us about your upcoming date, guest count, and vision. We will
                guide you through the next steps with warmth and clarity.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-wad-wine hover:bg-wad-nude text-base font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 shimmer-btn group"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://wa.me/?text=Hello%20WAD%20Events%2C%20I%20am%20interested%20in%20planning%20an%20event%20and%20would%20love%20to%20discuss%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-base font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
