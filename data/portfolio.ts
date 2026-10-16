export type PortfolioCategory =
  | "all"
  | "weddings"
  | "corporate"
  | "celebrations"
  | "styling";

export interface PortfolioItem {
  id: string;
  title: string;
  category: "weddings" | "corporate" | "celebrations" | "styling";
  serviceScope: string;
  location: string;
  guestCount?: string;
  year?: string;
  image: string;
  description: string;
  featured?: boolean;
  tags: string[];
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Moments" },
  { id: "weddings", label: "Weddings & Love" },
  { id: "corporate", label: "Corporate & Conferences" },
  { id: "celebrations", label: "Private & Milestone Celebrations" },
  { id: "styling", label: "Styling & Decor Details" },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "olu-kemi-wedding",
    title: "The Olu & Kemi Grand Wedding Celebration",
    category: "weddings",
    serviceScope: "Full Planning & Spatial Styling",
    location: "Victoria Island, Lagos",
    guestCount: "450 Guests",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    description:
      "A breathtaking two-day celebration merging rich cultural traditions with contemporary luxury aesthetics, complete with bespoke floral arches and seamless guest management.",
    featured: true,
    tags: ["Full Planning", "Luxury Wedding", "Cultural Heritage"],
  },
  {
    id: "tech-future-summit",
    title: "Venture Pulse Annual Leadership Summit",
    category: "corporate",
    serviceScope: "End-to-End Production & Coordination",
    location: "Eko Convention Centre, Lagos",
    guestCount: "600 Attendees",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    description:
      "High-level pan-African corporate summit featuring precision-timed keynote transitions, live translation pods, and an executive VIP lounge.",
    featured: true,
    tags: ["Corporate Summit", "Production", "Executive Hospitality"],
  },
  {
    id: "faye-milestone-dinner",
    title: "An Intimate 40th Golden Hour Soirée",
    category: "celebrations",
    serviceScope: "Concept Design & Day-of Coordination",
    location: "Ikoyi, Lagos",
    guestCount: "60 Guests",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    description:
      "An enchanting private dinner under canopy fairy lights, curated wine pairings, and a customized acoustic stage.",
    featured: true,
    tags: ["Milestone Birthday", "Private Dinner", "Acoustic Evening"],
  },
  {
    id: "wine-nude-tablescape",
    title: "Bespoke Wine & Nude Palette Tablescape",
    category: "styling",
    serviceScope: "Art Direction & Floral Installation",
    location: "Lekki Peninsula, Lagos",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Custom velvet table linens, hand-blown glassware, tapered candlelight, and organic floral compositions harmonizing rich wine with soft nude undertones.",
    featured: true,
    tags: ["Floral Design", "Tablescape", "Brand Signature"],
  },
  {
    id: "david-amara-vows",
    title: "Amara & David Seaside Vow Exchange",
    category: "weddings",
    serviceScope: "Full Planning & Day-of Direction",
    location: "Ilaje Coastal Retreat, Lagos",
    guestCount: "180 Guests",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "An emotive coastal wedding defined by oceanic breeze, effortless rhythm, and heartfelt moments shielded from all on-site stress.",
    featured: false,
    tags: ["Destination Wedding", "Coastal Ceremony", "Day-of Direction"],
  },
  {
    id: "fintech-gala-night",
    title: "Apex Horizon Annual Gala & Awards",
    category: "corporate",
    serviceScope: "Event Flow, Staging & Hospitality",
    location: "Abuja Continental, Abuja",
    guestCount: "350 Guests",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    description:
      "A black-tie honors evening with synchronized red-carpet arrival, dynamic stage lighting cues, and elevated culinary service.",
    featured: false,
    tags: ["Gala Dinner", "Award Ceremony", "Black Tie"],
  },
  {
    id: "botanical-garden-shower",
    title: "The Botanical Garden Bridal Luncheon",
    category: "celebrations",
    serviceScope: "Styling & Full Coordination",
    location: "Victoria Island, Lagos",
    guestCount: "45 Guests",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sunlit conservatory luncheon featuring delicate garden blooms, personalized embroidered napkins, and relaxing live harpist melodies.",
    featured: false,
    tags: ["Bridal Shower", "Garden Luncheon", "Bespoke Styling"],
  },
  {
    id: "geometric-floral-arch",
    title: "Contemporary Minimalist Arch & Lighting",
    category: "styling",
    serviceScope: "Spatial Decor & Lighting Engineering",
    location: "Lagos Mainland, Lagos",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern architectural staging designed for dramatic evening transitions, framing keynote speakers and celebrants alike.",
    featured: false,
    tags: ["Installation", "Spatial Styling", "Stage Production"],
  },
];
