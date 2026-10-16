"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Clock,
  ShieldCheck,
  Send,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/contact";

// Social Instagram icon component
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43c.48-.48.86-1.05 1.11-1.68.25-.63.38-1.3.37-1.98V8.78a8.17 8.17 0 0 0 4.25 1.25V6.69z" />
    </svg>
  );
}

const EVENT_TYPES = [
  "Wedding / Intimate Occasion",
  "Corporate Event / Conference",
  "Brand Launch / Activation",
  "Milestone Birthday / Private Celebration",
  "WAD Couple Experience (72-Hour Wedding Intensive)",
  "Planner Operational Support",
  "WAD Academy Enquiry",
  "Other Celebration",
];

const GUEST_COUNTS = [
  "Intimate (Up to 50 guests)",
  "50 – 150 guests",
  "150 – 300 guests",
  "300 – 600 guests",
  "600+ guests",
];

const SUPPORT_LEVELS = [
  { id: "full-planning", label: "Full Event Planning" },
  { id: "coordination", label: "Event Coordination" },
  { id: "day-of", label: "On-the-Day Coordination" },
  { id: "styling", label: "Event Styling & Aesthetics Only" },
  { id: "undecided", label: "Still Deciding / Need Guidance" },
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const inquiryParam = searchParams.get("inquiry");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "Wedding / Intimate Occasion",
    eventDate: "",
    guestCount: "150 – 300 guests",
    location: "",
    supportLevel: "Full Event Planning",
    vision: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill fields based on URL parameters
  useEffect(() => {
    if (serviceParam === "couple-experience") {
      setFormData((prev) => ({
        ...prev,
        eventType: "WAD Couple Experience (72-Hour Wedding Intensive)",
        supportLevel: "Full Event Planning",
      }));
    } else if (serviceParam === "full-planning") {
      setFormData((prev) => ({
        ...prev,
        supportLevel: "Full Event Planning",
      }));
    } else if (serviceParam === "event-coordination") {
      setFormData((prev) => ({
        ...prev,
        supportLevel: "Event Coordination",
      }));
    } else if (serviceParam === "day-of-coordination") {
      setFormData((prev) => ({
        ...prev,
        supportLevel: "On-the-Day Coordination",
      }));
    } else if (serviceParam === "event-styling") {
      setFormData((prev) => ({
        ...prev,
        supportLevel: "Event Styling & Aesthetics Only",
      }));
    } else if (serviceParam === "planner-support") {
      setFormData((prev) => ({
        ...prev,
        eventType: "Planner Operational Support",
      }));
    } else if (serviceParam === "academy") {
      setFormData((prev) => ({
        ...prev,
        eventType: "WAD Academy Enquiry",
      }));
    }

    if (inquiryParam) {
      setFormData((prev) => ({
        ...prev,
        vision: `Interested in event inspiration similar to: "${inquiryParam}".`,
      }));
    }
  }, [serviceParam, inquiryParam]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter a contact phone number or WhatsApp.";
    }
    if (!formData.eventDate.trim()) {
      errs.eventDate = "Please share an estimated date or month.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  // Generate WhatsApp prefilled message
  const handleWhatsAppDirect = () => {
    const message = `Hello WAD Events! I would like to request an event quotation:
• Name: ${formData.fullName || "Prospective Client"}
• Event: ${formData.eventType}
• Date: ${formData.eventDate || "TBD"}
• Guest Count: ${formData.guestCount}
• Location: ${formData.location || "Lagos / TBD"}
• Support Needed: ${formData.supportLevel}
${formData.vision ? `• Notes: ${formData.vision}` : ""}`;

    const url = BUSINESS_INFO.getWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-wad-canvas dark:bg-wad-charcoal-dark py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HEADER SECTION                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect &amp; Inquire</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-wad-charcoal dark:text-white leading-tight">
            Tell Us What You Are Planning
          </h1>
          <p className="text-base sm:text-lg text-wad-slate dark:text-wad-nude/80 leading-relaxed font-sans">
            We are here to help you hold it all together with care, comfort, and
            structure. Send us your requirements or reach out directly on
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: DIRECT CONTACT CARDS (4 cols)                */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* WhatsApp Quick Action Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-wad-charcoal dark:text-white">
                WhatsApp Messaging
              </h3>
              <p className="text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed">
                Chat directly with our planning directors for instant date checks, quick quotes, or event consultations:
              </p>
              <div className="p-3 rounded-2xl bg-wad-canvas dark:bg-white/5 border border-wad-nude/60 dark:border-white/10 font-mono text-sm text-wad-charcoal dark:text-white font-semibold">
                {BUSINESS_INFO.phoneFormatted}
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-medium py-3 px-5 rounded-full shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-wad-wine/10 dark:bg-white/10 flex items-center justify-center text-wad-wine dark:text-wad-steel">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-wad-charcoal dark:text-white">
                Direct Phone Call
              </h3>
              <p className="text-sm text-wad-slate dark:text-wad-nude/75 leading-relaxed">
                Prefer to speak over the phone? Call our lead planner directly:
              </p>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 bg-wad-wine hover:bg-wad-wine-dark text-white text-sm font-medium py-3 px-5 rounded-full shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-wad-charcoal-card border border-wad-nude/80 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-wad-wine/10 dark:bg-white/10 flex items-center justify-center text-wad-wine dark:text-wad-steel">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-wad-charcoal dark:text-white">
                Official Email Enquiries
              </h3>
              <p className="text-sm text-wad-slate dark:text-wad-nude/75">
                For detailed RFPs, vendor decks, and formal corporate event inquiries:
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-block text-sm font-semibold text-wad-wine dark:text-wad-steel hover:underline"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            {/* Social & Coverage Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-wad-charcoal dark:bg-[#1E1B1C] text-white border border-white/10 space-y-4">
              <h3 className="font-serif text-lg font-semibold text-white">
                Follow &amp; Connect
              </h3>
              <p className="text-xs text-wad-nude/80 leading-relaxed">
                See behind-the-scenes moments, client reviews, and live wedding
                updates:
              </p>
              <div className="space-y-2.5 text-xs">
                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-wad-steel hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram: {BUSINESS_INFO.instagram.handle}</span>
                </a>
                <a
                  href={BUSINESS_INFO.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-wad-steel hover:text-white transition-colors"
                >
                  <TikTokIcon className="w-4 h-4" />
                  <span>TikTok: {BUSINESS_INFO.tiktok.handle}</span>
                </a>
                <div className="flex items-center gap-2 text-wad-nude/80 pt-1">
                  <MapPin className="w-4 h-4 text-wad-steel shrink-0" />
                  <span>{BUSINESS_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: QUOTATION REQUEST FORM (8 cols)             */}
          {/* ========================================================= */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-wad-charcoal-card rounded-3xl border border-wad-nude/80 dark:border-white/10 p-6 sm:p-10 shadow-sm">
              {isSubmitted ? (
                /* ================= SUCCESS STATE ================= */
                <div className="py-12 text-center space-y-6 max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-wad-wine/10 dark:bg-white/10 text-wad-wine dark:text-wad-steel flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-wad-wine dark:text-wad-steel" />
                  </div>

                  <h2 className="font-serif text-3xl font-semibold text-wad-charcoal dark:text-white">
                    Thank you! We&apos;ve received your details.
                  </h2>

                  <p className="text-sm sm:text-base text-wad-slate dark:text-wad-nude/80 leading-relaxed">
                    A member of our planning team will review your event
                    requirements and get in touch within 24–48 hours with a
                    customized proposal roadmap.
                  </p>

                  <div className="p-4 rounded-2xl bg-wad-canvas dark:bg-white/5 border border-wad-nude dark:border-white/10 text-xs text-wad-slate dark:text-wad-nude/80">
                    If your event date is urgent, feel free to contact us
                    immediately on WhatsApp for priority scheduling.
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-wad-nude dark:border-white/20 text-wad-charcoal dark:text-wad-nude hover:bg-wad-canvas dark:hover:bg-white/10 text-xs sm:text-sm font-medium py-3 px-6 rounded-full transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-medium py-3 px-6 rounded-full transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                      <span>Open in WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* ================= FORM FIELDS ================= */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-wad-charcoal dark:text-white mb-1">
                      Event Quotation Form
                    </h2>
                    <p className="text-xs sm:text-sm text-wad-slate dark:text-wad-nude/75">
                      Please share the key parameters of your upcoming
                      celebration so we can craft an accurate proposal.
                    </p>
                  </div>

                  {/* 1. Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                        Your Full Name <span className="text-wad-wine dark:text-wad-steel">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Adaobi Adeleke"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full bg-white dark:bg-white/5 border ${
                          errors.fullName
                            ? "border-red-500 focus:ring-red-200"
                            : "border-wad-nude dark:border-white/15 focus:border-wad-wine dark:focus:border-wad-steel focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20"
                        } rounded-xl px-4 py-3 text-wad-charcoal dark:text-white placeholder-wad-slate/50 dark:placeholder-wad-nude/40 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                        Email Address <span className="text-wad-wine dark:text-wad-steel">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. adaobi@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full bg-white dark:bg-white/5 border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-200"
                            : "border-wad-nude dark:border-white/15 focus:border-wad-wine dark:focus:border-wad-steel focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20"
                        } rounded-xl px-4 py-3 text-wad-charcoal dark:text-white placeholder-wad-slate/50 dark:placeholder-wad-nude/40 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 2. Phone / WhatsApp & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                        Phone Number / WhatsApp{" "}
                        <span className="text-wad-wine dark:text-wad-steel">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full bg-white dark:bg-white/5 border ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-200"
                            : "border-wad-nude dark:border-white/15 focus:border-wad-wine dark:focus:border-wad-steel focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20"
                        } rounded-xl px-4 py-3 text-wad-charcoal dark:text-white placeholder-wad-slate/50 dark:placeholder-wad-nude/40 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                        Type of Event
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full bg-white dark:bg-wad-charcoal border border-wad-nude dark:border-white/15 rounded-xl px-4 py-3 text-wad-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20 focus:border-wad-wine dark:focus:border-wad-steel transition-all"
                      >
                        {EVENT_TYPES.map((type) => (
                          <option key={type} value={type} className="dark:bg-wad-charcoal dark:text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 3. Estimated Date & Guest Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                        Estimated Date / Month{" "}
                        <span className="text-wad-wine dark:text-wad-steel">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. November 2026 or Dec 15th"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className={`w-full bg-white dark:bg-white/5 border ${
                          errors.eventDate
                            ? "border-red-500 focus:ring-red-200"
                            : "border-wad-nude dark:border-white/15 focus:border-wad-wine dark:focus:border-wad-steel focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20"
                        } rounded-xl px-4 py-3 text-wad-charcoal dark:text-white placeholder-wad-slate/50 dark:placeholder-wad-nude/40 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.eventDate && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.eventDate}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestCount: e.target.value,
                          })
                        }
                        className="w-full bg-white dark:bg-wad-charcoal border border-wad-nude dark:border-white/15 rounded-xl px-4 py-3 text-wad-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20 focus:border-wad-wine dark:focus:border-wad-steel transition-all"
                      >
                        {GUEST_COUNTS.map((count) => (
                          <option key={count} value={count} className="dark:bg-wad-charcoal dark:text-white">
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 4. Location / City */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                      Event Location / Venue City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Victoria Island, Lagos / Abuja / Destination"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full bg-white dark:bg-white/5 border border-wad-nude dark:border-white/15 rounded-xl px-4 py-3 text-wad-charcoal dark:text-white placeholder-wad-slate/50 dark:placeholder-wad-nude/40 text-sm focus:outline-none focus:ring-2 focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20 focus:border-wad-wine dark:focus:border-wad-steel transition-all"
                    />
                  </div>

                  {/* 5. Level of Support Needed (Radio buttons) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-3">
                      Level of Support Needed
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SUPPORT_LEVELS.map((level) => {
                        const isChecked = formData.supportLevel === level.label;
                        return (
                          <label
                            key={level.id}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? "bg-wad-wine/10 dark:bg-white/10 border-wad-wine dark:border-wad-steel text-wad-wine dark:text-wad-steel font-medium"
                                : "bg-white dark:bg-white/5 border-wad-nude dark:border-white/10 text-wad-charcoal dark:text-wad-nude hover:bg-wad-canvas dark:hover:bg-white/10"
                            }`}
                          >
                            <input
                              type="radio"
                              name="supportLevel"
                              value={level.label}
                              checked={isChecked}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  supportLevel: e.target.value,
                                })
                              }
                              className="accent-wad-wine"
                            />
                            <span className="text-xs sm:text-sm">
                              {level.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* 6. Vision Textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-wad-charcoal/80 dark:text-wad-nude/80 mb-2">
                      Tell Us More About Your Vision
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share preliminary ideas, themes, desired color tones, questions, or specific expectations you have for your day..."
                      value={formData.vision}
                      onChange={(e) =>
                        setFormData({ ...formData, vision: e.target.value })
                      }
                      className="w-full bg-white dark:bg-white/5 border border-wad-nude dark:border-white/15 rounded-xl px-4 py-3 text-wad-charcoal dark:text-white placeholder-wad-slate/50 dark:placeholder-wad-nude/40 text-sm focus:outline-none focus:ring-2 focus:ring-wad-wine/20 dark:focus:ring-wad-steel/20 focus:border-wad-wine dark:focus:border-wad-steel transition-all"
                    />
                  </div>

                  {/* Dual Submit Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-wad-wine hover:bg-wad-wine-dark disabled:opacity-75 text-white text-sm font-semibold py-4 px-8 rounded-full shadow-lg shadow-wad-wine/20 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Quotation Request</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#25D366] text-[#128C7E] dark:text-[#25D366] hover:bg-[#25D366] hover:text-white text-sm font-medium py-4 px-6 rounded-full transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-wad-canvas dark:bg-wad-charcoal-dark">
          <div className="flex items-center gap-3 text-wad-wine dark:text-wad-steel">
            <Clock className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Loading quotation engine...</span>
          </div>
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
