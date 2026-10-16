export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  tagline: string;
}

export interface CampaignData {
  tag: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  highlights: {
    day: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Tell Us Your Vision",
    description:
      "Share your event date, anticipated guest count, location, and desired support level through our simple inquiry form or a direct WhatsApp chat.",
    tagline: "Clarity from the first hello",
  },
  {
    step: "Step 02",
    number: "02",
    title: "Discovery Consultation",
    description:
      "We hold an in-depth consultation to understand your non-negotiables, design dreams, budget parameters, and any specific family or corporate expectations.",
    tagline: "We listen before we plan",
  },
  {
    step: "Step 03",
    number: "03",
    title: "Tailored Plan & Proposal",
    description:
      "You receive a clear, transparent blueprint outlining your event roadmap, recommended vendors, production milestones, and deliverables.",
    tagline: "Structure you can rely on",
  },
  {
    step: "Step 04",
    number: "04",
    title: "Effortless Execution",
    description:
      "On event day, our coordination directors take full command behind the scenes—managing timelines, vendor flow, and emergencies so you celebrate with pure joy.",
    tagline: "Be a guest at your own event",
  },
];

export const CAMPAIGN_72_HOURS: CampaignData = {
  tag: "Special Feature: WAD Couple Experience",
  headline: "Plan Your Wedding in 72 Hours",
  subheadline: "Eliminate decision fatigue and gain total wedding clarity in one structured sprint.",
  description:
    "Feeling overwhelmed by hundreds of vendor inquiries, conflicting opinions, and ballooning budgets? Our guided intensive condenses months of agonizing back-and-forth into 72 hours of decisive, confident progress.",
  ctaText: "Start Your 72-Hour Wedding Sprint",
  ctaHref: "/contact?service=couple-experience",
  highlights: [
    {
      day: "Hour 01 – 24",
      title: "Clarity & Financial Allocation",
      description:
        "Define your non-negotiables, establish your true budget allocation formula, and align on an authentic creative vision.",
    },
    {
      day: "Hour 25 – 48",
      title: "Vendor Vetting & Aesthetics",
      description:
        "Access our pre-vetted, trusted vendor shortlist tailored to your budget, and lock in your bespoke floral and styling direction.",
    },
    {
      day: "Hour 49 – 72",
      title: "Master Run Sheet & Action Blueprint",
      description:
        "Finalize your minute-by-minute order of events, floor plans, vendor responsibilities, and contingency protocols.",
    },
  ],
  benefits: [
    "Zero guesswork: proven frameworks tested across hundreds of guests",
    "Tailored vendor recommendations that respect your specific budget",
    "Direct strategic guidance from a seasoned wedding architect",
    "Complete actionable blueprint ready for coordination handover",
  ],
};
