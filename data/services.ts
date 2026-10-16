export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bestFor: string;
  ctaText: string;
  ctaHref: string;
  icon: string;
  highlight?: string;
  features: string[];
}

export interface OccasionCategory {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "full-planning",
    number: "01",
    title: "Full Event Planning",
    shortDescription:
      "The complete planning journey from start to finish, including vendor sourcing, contracts, logistics, and total execution oversight.",
    fullDescription:
      "We step in from day one to translate your initial thoughts into an impeccably designed and flawlessly orchestrated celebration. We manage budgeting, venue selection, vendor negotiations, design concepts, and scheduling so you can relax entirely.",
    bestFor: "Clients who want comprehensive, end-to-end guidance and hands-off ease.",
    ctaText: "Inquire About Full Planning",
    ctaHref: "/contact?service=full-planning",
    icon: "Sparkles",
    features: [
      "End-to-end timeline & budget management",
      "Curated vendor recommendations & negotiations",
      "Design concept, mood boards & aesthetic curation",
      "Guest logistics & RSVP coordination",
      "Full on-site team on the event day",
    ],
  },
  {
    id: "event-coordination",
    number: "02",
    title: "Event Coordination",
    shortDescription:
      "Bringing existing plans together, synchronising vendors, confirming responsibilities, and keeping processes running seamlessly on schedule.",
    fullDescription:
      "If you've already booked your core vendors and selected your venue, our coordination service bridges the gap between planning and execution. We step in weeks in advance to streamline vendor communications, build master run sheets, and conduct venue walkthroughs.",
    bestFor: "Clients who have started planning but need professional structure to cross the finish line.",
    ctaText: "Inquire About Coordination",
    ctaHref: "/contact?service=event-coordination",
    icon: "Layers",
    features: [
      "Vendor contract review & handover",
      "Minute-by-minute production schedules",
      "Logistics walkthrough & seating floorplans",
      "Vendor rehearsal & briefing meetings",
      "On-site coordination lead and team",
    ],
  },
  {
    id: "day-of-coordination",
    number: "03",
    title: "On-the-Day Coordination",
    shortDescription:
      "Dedicated on-site management overseeing vendor arrivals, floor transitions, schedules, and any unexpected hiccups.",
    fullDescription:
      "You have planned every detail—now be a guest at your own party. Our specialized on-the-day directors oversee setup, manage cue-to-cue transitions, handle guest flow, and resolve any impromptu situations with calm poise.",
    bestFor: "Clients who handled the planning themselves but want to relax and celebrate as guests at their own event.",
    ctaText: "Book Day-of Coordination",
    ctaHref: "/contact?service=day-of-coordination",
    icon: "Clock",
    features: [
      "Comprehensive timeline execution",
      "Vendor arrival & setup supervision",
      "Program & MC transition cueing",
      "Emergency problem resolution & kit",
      "Tear-down & load-out oversight",
    ],
  },
  {
    id: "couple-experience",
    number: "04",
    title: "WAD Couple Experience",
    shortDescription:
      "A guided wedding-planning intensive helping couples clarify priorities, make decisive choices, and establish a clear roadmap.",
    fullDescription:
      "Cut through the endless noise, vendor overwhelm, and conflicting family opinions. Our high-touch intensive guides engaged couples through decisive milestone planning, unlocking clarity and saving weeks of agonizing indecision.",
    highlight: "Plan Your Wedding in 72 Hours",
    bestFor: "Engaged couples seeking clarity without decision fatigue.",
    ctaText: "Start Your Journey",
    ctaHref: "/contact?service=couple-experience",
    icon: "HeartHandshake",
    features: [
      "72-hour guided wedding sprint",
      "Priority alignment & budget allocation formula",
      "Targeted vendor shortlist tailored to your budget",
      "Custom wedding production playbook",
      "One-on-one strategy sessions with senior planner",
    ],
  },
  {
    id: "event-design",
    number: "05",
    title: "Event Design & Styling",
    shortDescription:
      "Creative concepts, bespoke color palettes, and curated decor styling to bring your personal aesthetic to life with elegance.",
    fullDescription:
      "Transforming blank spaces into emotionally resonant environments. We curate floral arrangements, spatial lighting, luxury tableware, custom stage backdrops, and sensorial atmospheres tailored to your story.",
    bestFor: "Clients seeking a distinctive, cohesive, and memorable look.",
    ctaText: "Explore Event Styling",
    ctaHref: "/contact?service=event-styling",
    icon: "Palette",
    features: [
      "Bespoke spatial layout & 3D mood boards",
      "Color theory, floral styling & tablescapes",
      "Custom installations & stage production",
      "Lighting design & atmospheric accents",
      "Print collateral & personalized signage styling",
    ],
  },
  {
    id: "planner-support",
    number: "06",
    title: "Planner Support",
    shortDescription:
      "Practical operational support for fellow planners—streamlining proposals, documentation, timelines, follow-ups, and back-office workflows.",
    fullDescription:
      "Even seasoned planners need trusted back-office leverage. We provide operational assistance, timeline drafting, client intake systems, budget audits, and on-the-ground staffing reinforcement for your high-stakes event seasons.",
    bestFor: "Independent event planners and emerging planning businesses.",
    ctaText: "Get Operational Support",
    ctaHref: "/contact?service=planner-support",
    icon: "Briefcase",
    features: [
      "Standard operating procedure (SOP) templates",
      "Proposal & client quotation systems",
      "Run-of-show & production spreadsheet kits",
      "Associate planner on-site reinforcement",
      "Vendor database & contract templates",
    ],
  },
  {
    id: "wad-academy",
    number: "07",
    title: "WAD Academy",
    shortDescription:
      "Practical, hands-on training and mentorship designed to equip aspiring planners with real-world skills and professional standards.",
    fullDescription:
      "Step into professional event leadership. Our masterclasses and cohort mentorships bridge the gap between passion and profitable, structured event mastery, covering real-world client handling, vendor contracts, crisis resolution, and financial viability.",
    bestFor: "Emerging planners wanting to master the business and art of events.",
    ctaText: "Discover Academy Programs",
    ctaHref: "/contact?service=academy",
    icon: "GraduationCap",
    features: [
      "Practical, field-tested masterclass modules",
      "Live event shadowing opportunities",
      "Contract negotiation & pricing masteries",
      "WAD alumni network & ongoing community",
      "Certificate of professional completion",
    ],
  },
];

export const OCCASIONS: OccasionCategory[] = [
  {
    id: "weddings",
    title: "Weddings & Intimate Occasions",
    description:
      "From traditional celebrations to modern vow exchanges, we orchestrate love stories with warmth, elegance, and unflinching attention to family traditions.",
    tag: "Romance & Milestone",
  },
  {
    id: "corporate",
    title: "Corporate Events & Conferences",
    description:
      "Professional summits, annual general meetings, and multi-day executive retreats delivered with punctuality, tech precision, and polished hospitality.",
    tag: "Business & Summits",
  },
  {
    id: "launches",
    title: "Brand Launches & Activations",
    description:
      "High-impact media gatherings, influencer dinners, and brand unveilings designed to generate excitement, press coverage, and memorable consumer touchpoints.",
    tag: "PR & Brand Experience",
  },
  {
    id: "galas",
    title: "Concerts, Galas & Award Shows",
    description:
      "Large-scale productions featuring stage choreography, VIP hospitality suites, lighting programming, and seamless red-carpet operations.",
    tag: "High Production",
  },
  {
    id: "fashion",
    title: "Fashion Shows & Runway Productions",
    description:
      "Runway curation, backstage lineup coordination, lighting transitions, and guest front-row seating managed with dynamic finesse.",
    tag: "Editorial & Runway",
  },
  {
    id: "private",
    title: "Private Celebrations & Milestone Dinners",
    description:
      "Curated milestone birthdays, bridal showers, anniversaries, and private dinners infused with intimacy, bespoke touches, and celebratory ease.",
    tag: "Intimate Gathering",
  },
];
