import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Smile,
  Eye,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  Compass,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-wad-canvas dark:bg-wad-charcoal-dark py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HERO TITLE SECTION                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Philosophy &amp; Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-wad-charcoal dark:text-white leading-tight">
            Planned with Heart, Delivered with Excellence
          </h1>
          <p className="text-base sm:text-lg text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
            WAD Events was created on a single conviction: a host should never
            feel like an exhausted bystander at their own celebration.
          </p>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: THE WAD STORY & FOUNDER VISION                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 group">
              <Image
                src="/image/IMG_6472.PNG"
                alt="WAD Events couple celebrating in tranquility and joy"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card text-wad-charcoal dark:text-white">
                <p className="text-xs uppercase font-mono tracking-wider text-wad-wine dark:text-wad-steel font-semibold">
                  Our Core Belief
                </p>
                <p className="font-serif text-base italic text-wad-charcoal dark:text-wad-nude mt-1">
                  &ldquo;You do not have to carry every detail alone.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-wad-charcoal-card py-3 px-5 rounded-2xl shadow-xl border border-wad-nude/80 dark:border-white/10 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-wad-wine/10 dark:bg-wad-wine/20 flex items-center justify-center text-wad-wine dark:text-wad-steel">
                <Heart className="w-5 h-5 fill-wad-wine dark:fill-wad-steel" />
              </div>
              <div>
                <p className="text-xs text-wad-slate dark:text-wad-nude/60">Brand Promise</p>
                <p className="text-sm font-semibold text-wad-charcoal dark:text-white">
                  Care &amp; Structure
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
              Why We Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-wad-charcoal dark:text-white leading-tight">
              Behind every beautiful occasion are hundreds of decisions that can
              easily overwhelm the host.
            </h2>
            <div className="space-y-4 text-base text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
              <p>
                Whether you are planning a 500-guest luxury wedding in Lagos, an
                executive corporate leadership summit, or an intimate golden-hour
                birthday dinner, the moving parts are immense: contracts, vendor
                schedules, setup buffers, acoustic levels, and guest flow.
              </p>
              <p>
                Too often, clients reach their wedding day or gala exhausted,
                holding radios, fielding frantic vendor calls, and worrying about
                what is happening behind the scenes.
              </p>
              <p>
                Born out of a genuine love for structured planning and the joy of
                seeing people smile, <strong className="text-wad-charcoal dark:text-white">WAD Events</strong> was
                established to shoulder that pressure. We approach each occasion
                with a maternal touch—infusing protection, warmth, and meticulous
                logistical discipline into every detail so you can celebrate with
                pure, uninterrupted bliss.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-sm text-wad-charcoal dark:text-white font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-wad-wine dark:text-wad-steel" />
                <span>100% Client Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-wad-wine dark:text-wad-steel" />
                <span>Zero On-Site Stress</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-wad-wine dark:text-wad-steel" />
                <span>Transparent Budgeting</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: THE 3 CORE PILLARS                             */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
              The WAD Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-wad-charcoal dark:text-white leading-tight">
              Our Three Inviolable Pillars
            </h2>
            <p className="text-base text-wad-slate dark:text-wad-nude/80">
              The principles that govern every consultation, vendor contract, and
              event floorplan we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-wad-wine/40 dark:hover:border-wad-steel/40 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-wad-wine/10 dark:bg-white/10 flex items-center justify-center text-wad-wine dark:text-wad-steel mb-6 group-hover:scale-110 group-hover:bg-wad-wine group-hover:text-white transition-all duration-300">
                <Smile className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-wad-charcoal dark:text-white mb-4 group-hover:text-wad-wine dark:group-hover:text-wad-steel transition-colors">
                01. We Listen &amp; Prioritise
              </h3>
              <p className="text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed mb-4">
                We believe great events begin with empathy, not a checklist. Before
                touching vendor lists or spreadsheets, we listen to your personal
                story, family traditions, and what matters most to you.
              </p>
              <p className="text-xs font-medium text-wad-charcoal/70 dark:text-wad-nude/60">
                Result: A celebration that feels authentically yours, never cookie-cutter.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-wad-wine/40 dark:hover:border-wad-steel/40 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-wad-wine/10 dark:bg-white/10 flex items-center justify-center text-wad-wine dark:text-wad-steel mb-6 group-hover:scale-110 group-hover:bg-wad-wine group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-wad-charcoal dark:text-white mb-4 group-hover:text-wad-wine dark:group-hover:text-wad-steel transition-colors">
                02. We Take Full Responsibility
              </h3>
              <p className="text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed mb-4">
                We manage the pressure so you don&apos;t have to. From vendor arrival
                buffers and stage tech rehearsals to last-minute contingencies, our
                directors hold the line with calm, authoritative grace.
              </p>
              <p className="text-xs font-medium text-wad-charcoal/70 dark:text-wad-nude/60">
                Result: Total peace of mind to laugh, dance, and converse with loved ones.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-wad-wine/40 dark:hover:border-wad-steel/40 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-wad-wine/10 dark:bg-white/10 flex items-center justify-center text-wad-wine dark:text-wad-steel mb-6 group-hover:scale-110 group-hover:bg-wad-wine group-hover:text-white transition-all duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-wad-charcoal dark:text-white mb-4 group-hover:text-wad-wine dark:group-hover:text-wad-steel transition-colors">
                03. We Notice What Others Miss
              </h3>
              <p className="text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed mb-4">
                True luxury lives in the micro-details: the temperature of the
                ballroom, the timing of bridal entrances, dietary accommodations,
                elderly guest seating, and table lighting balance.
              </p>
              <p className="text-xs font-medium text-wad-charcoal/70 dark:text-wad-nude/60">
                Result: An environment where every single guest feels individually cared for.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 3: THE WAD PROMISE CALLOUT                        */}
        {/* ========================================================= */}
        <div className="mb-24 p-8 sm:p-16 rounded-3xl bg-wad-charcoal dark:bg-[#1E1B1C] text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-wad-steel bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              The WAD Promise
            </span>

            <blockquote className="font-serif text-2xl sm:text-4xl leading-snug">
              &ldquo;There is a lot to hold together when bringing people
              together. WAD Events helps you hold it all together, with care,
              structure and thoughtful execution.&rdquo;
            </blockquote>

            <p className="text-base text-wad-nude/90 max-w-xl mx-auto font-sans leading-relaxed">
              When you partner with us, you are not merely booking an event planner;
              you are bringing in a dedicated advocate who ensures your milestone is
              celebrated with dignity, joy, and uncompromising standards.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 4: CALL TO ACTION BANNER                          */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-14 rounded-3xl bg-wad-wine text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl font-serif">
              Let&apos;s Plan Something Memorable Together
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans">
              Explore our comprehensive services or connect directly with our
              planning team to discuss your upcoming date.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-wad-wine hover:bg-wad-nude text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full transition-all"
              >
                <span>Request a Quotation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
