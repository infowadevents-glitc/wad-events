import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Layers,
  Clock,
  HeartHandshake,
  Palette,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SERVICES, OCCASIONS } from "@/data/services";
import { HOW_IT_WORKS_STEPS, CAMPAIGN_72_HOURS } from "@/data/campaign";

// Icon mapping helper
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
  Layers: <Layers className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
  Clock: <Clock className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
  Palette: <Palette className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
  Briefcase: <Briefcase className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
  GraduationCap: <GraduationCap className="w-7 h-7 text-wad-wine dark:text-wad-steel" />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-wad-canvas dark:bg-wad-charcoal-dark py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HERO TITLE SECTION                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-wad-charcoal dark:text-white leading-tight">
            Support for Every Stage of Your Event Journey
          </h1>
          <p className="text-base sm:text-lg text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
            Whether you need comprehensive end-to-end guidance from day one or an
            authoritative director on the day itself, we bring clarity,
            structure, and peace of mind.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CORE SERVICES DETAILED CARDS                              */}
        {/* ========================================================= */}
        <div className="space-y-12 mb-24">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title & Short Summary (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-bold text-wad-wine dark:text-wad-steel bg-wad-wine/10 dark:bg-white/10 px-3 py-1 rounded-full">
                        {service.number}
                      </span>
                      {service.highlight && (
                        <span className="text-xs font-semibold bg-wad-wine dark:bg-wad-steel text-white dark:text-wad-charcoal px-3 py-1 rounded-full shadow-sm">
                          {service.highlight}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-wad-nude-light dark:bg-white/10 flex items-center justify-center shrink-0">
                        {SERVICE_ICONS[service.icon] || (
                          <Sparkles className="w-7 h-7 text-wad-wine dark:text-wad-steel" />
                        )}
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-wad-charcoal dark:text-white">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
                      {service.fullDescription}
                    </p>

                    <div className="p-4 rounded-2xl bg-wad-canvas dark:bg-white/5 border border-wad-nude/60 dark:border-white/10 text-xs sm:text-sm text-wad-slate dark:text-wad-nude/70">
                      <strong className="text-wad-charcoal dark:text-white font-medium">Best for:</strong>{" "}
                      {service.bestFor}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={service.ctaHref}
                        className="inline-flex items-center gap-2 bg-wad-wine hover:bg-wad-wine-dark text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all group"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Image Preview + Key Inclusions (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    {service.image && (
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-wad-nude/70 dark:border-white/10 group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 450px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                      </div>
                    )}

                    <div className="p-6 rounded-2xl bg-wad-canvas/70 dark:bg-white/5 border border-wad-nude/60 dark:border-white/10 space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/70">
                        Key Inclusions &amp; Deliverables:
                      </h3>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-wad-slate dark:text-wad-nude/80"
                          >
                            <CheckCircle2 className="w-4 h-4 text-wad-wine dark:text-wad-steel shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 72-HOUR WEDDING SPRINT FEATURE SPOTLIGHT                  */}
        {/* ========================================================= */}
        <div id="72-hours" className="mb-24 p-8 sm:p-14 rounded-3xl bg-wad-charcoal dark:bg-[#1E1B1C] text-white relative overflow-hidden shadow-2xl border border-white/10 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-wad-steel bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {CAMPAIGN_72_HOURS.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif">
                {CAMPAIGN_72_HOURS.headline}
              </h2>

              <p className="text-sm sm:text-base text-wad-nude/80 leading-relaxed font-sans">
                {CAMPAIGN_72_HOURS.description}
              </p>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 my-4">
                <Image
                  src="/image/E44750E2-F094-4FB1-B956-A13DFD8EA569.JPG.jpeg"
                  alt="Couple experiencing seamless wedding planning"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-serif italic text-xs text-wad-nude">
                    &ldquo;72 hours to clarity, confidence, and zero wedding stress.&rdquo;
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2">
                {CAMPAIGN_72_HOURS.benefits.map((benefit, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-wad-nude/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-wad-steel shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href={CAMPAIGN_72_HOURS.ctaHref}
                  className="inline-flex items-center gap-2 bg-wad-wine hover:bg-wad-wine-light text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
                >
                  <span>Start Your 72-Hour Sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {CAMPAIGN_72_HOURS.highlights.map((item, hIdx) => (
                <div
                  key={hIdx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1"
                >
                  <div className="flex items-center justify-between text-xs text-wad-steel font-mono font-semibold">
                    <span>{item.day}</span>
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-wad-nude/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* OCCASIONS WE HANDLE                                       */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
              Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-wad-charcoal dark:text-white leading-tight">
              Occasions Deserving More Than Just Organisation
            </h2>
            <p className="text-base text-wad-slate dark:text-wad-nude/80">
              From intimate milestones to grand productions, we bring warmth and
              excellence to every celebration format.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OCCASIONS.map((occasion) => (
              <div
                key={occasion.id}
                className="group overflow-hidden rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {occasion.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-wad-charcoal/5 dark:bg-black/20">
                    <Image
                      src={occasion.image}
                      alt={occasion.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wad-charcoal/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-wad-charcoal dark:text-white px-3 py-1 rounded-full bg-white/95 dark:bg-wad-charcoal/90 backdrop-blur-sm shadow-sm">
                        {occasion.tag}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  {!occasion.image && (
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-wad-slate dark:text-wad-steel px-2.5 py-0.5 rounded-full bg-wad-canvas dark:bg-white/10 border border-wad-nude dark:border-white/10">
                      {occasion.tag}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-semibold text-wad-charcoal dark:text-white mt-1 mb-2 group-hover:text-wad-wine dark:group-hover:text-wad-steel transition-colors">
                    {occasion.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-wad-slate dark:text-wad-nude/70 leading-relaxed">
                    {occasion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* THE 4-STEP PROCESS                                        */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-wad-wine dark:text-wad-steel font-sans">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-wad-charcoal dark:text-white leading-tight">
              A Simple, Stress-Free Path to Your Event
            </h2>
            <p className="text-base text-wad-slate dark:text-wad-nude/80">
              Our 4-step framework guarantees total transparency and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-wad-wine dark:text-wad-steel">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-wad-slate dark:text-wad-nude/60">
                      {step.tagline}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-wad-charcoal dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-wad-slate dark:text-wad-nude/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CALL TO ACTION BANNER                                     */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-14 rounded-3xl bg-wad-wine text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl font-serif">
              Ready to Discuss Your Celebration?
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans">
              Share your date, location, and guest expectations. We will guide
              you to the exact level of support that fits your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-wad-wine hover:bg-wad-nude text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/23490778881443?text=Hello%20WAD%20Events%2C%20I%20reviewed%20your%20services%20and%20would%20love%20to%20discuss%20planning%20an%20event."
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
