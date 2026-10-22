export type PortfolioCategory =
  | "all"
  | "films"
  | "weddings"
  | "corporate"
  | "celebrations"
  | "styling";

export interface PortfolioItem {
  id: string;
  title: string;
  category: "weddings" | "corporate" | "celebrations" | "styling" | "films";
  serviceScope: string;
  location: string;
  guestCount?: string;
  year?: string;
  image: string;
  video?: string;
  description: string;
  featured?: boolean;
  tags: string[];
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Moments" },
  { id: "films", label: "Films & Motion Reels" },
  { id: "weddings", label: "Weddings & Love" },
  { id: "corporate", label: "Corporate & Conferences" },
  { id: "celebrations", label: "Private & Milestone Celebrations" },
  { id: "styling", label: "Styling & Decor Details" },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "evening-ambiance-film",
    title: "Evening Draped Reception & Candlelight Tablescape",
    category: "films",
    serviceScope: "Atmospheric Film & Decor Styling",
    location: "Victoria Island, Lagos",
    image: "/image/IMG_5474.JPG.jpeg",
    video: "/videos/IMG_3293.MP4",
    description:
      "A cinematic look into an enchanted candlelit dinner under custom canopy draping, highlighting floral centerpieces and ambient evening glow.",
    featured: false,
    tags: ["Motion Film", "Tablescape", "Ambient Styling"],
  },
  {
    id: "grand-celebration-recap",
    title: "Celebration Energy & Grand Reception Highlights",
    category: "films",
    serviceScope: "Event Flow & Live Atmosphere",
    location: "Lekki Peninsula, Lagos",
    image: "/image/6F160DCC-A405-46F8-8F48-18EC0D502775.JPG.jpeg",
    video: "/videos/IMG_0999.mp4",
    description:
      "Live event reel capturing the authentic joy, entrance choreography, and guest presence orchestrated by WAD Events.",
    featured: false,
    tags: ["Live Reel", "Full Planning", "Guest Experience"],
  },
  {
    id: "behind-the-scenes-styling",
    title: "Behind the Scenes: Precision Ballroom & Floral Transformation",
    category: "films",
    serviceScope: "Day-of Production & Spatial Styling",
    location: "Victoria Island, Lagos",
    image: "/image/IMG_5469.JPG.jpeg",
    video: "/videos/IMG_3986.mp4",
    description:
      "Go behind the scenes with our coordination team as bare spaces are transformed into magnificent, luxury event stages.",
    featured: false,
    tags: ["Behind the Scenes", "Spatial Styling", "Production"],
  },
  {
    id: "high-energy-entrance-motion",
    title: "High-Energy Crowd Celebration & Entrance Cues",
    category: "films",
    serviceScope: "Program Flow & MC Cueing",
    location: "Lagos Mainland, Lagos",
    image: "/image/7C054474-8958-4ACC-9172-6764BDBF5328.JPG.jpeg",
    video: "/videos/IMG_3987.mp4",
    description:
      "Vibrant motion clip capturing seamless stage timing, musical cue transitions, and contagious celebratory ecstasy.",
    featured: false,
    tags: ["Motion Reel", "Program Direction", "Celebration"],
  },
  {
    id: "first-dance-chandelier",
    title: "The Grand Royal First Dance & Chandelier Installation",
    category: "weddings",
    serviceScope: "Full Planning & Spatial Production",
    location: "Victoria Island, Lagos",
    guestCount: "500 Guests",
    year: "2026",
    image: "/image/A6871AC0-4697-41F8-BD40-AA398BD2D776.JPG.jpeg",
    description:
      "A breathtaking ballroom reception featuring an architectural crystal rain chandelier ceiling, synchronized lighting transitions, and seamless guest hospitality.",
    featured: true,
    tags: ["Full Planning", "Luxury Wedding", "Lighting Engineering"],
  },
  {
    id: "blueprint-leadership-summit",
    title: "Blueprint Interior Design & Real Estate Annual Summit",
    category: "corporate",
    serviceScope: "End-to-End Production & Coordination",
    location: "Federal Palace Hotel, Victoria Island, Lagos",
    guestCount: "400 Attendees",
    year: "2026",
    image: "/image/E81D08BD-ED01-44B0-A575-7AB149615178.JPG.jpeg",
    description:
      "Executive pan-African industry summit with precision-timed keynote speaker transitions, VIP banquet seating flow, and high-impact stage production.",
    featured: true,
    tags: ["Corporate Summit", "Production", "Executive Hospitality"],
  },
  {
    id: "golden-milestone-jubilee",
    title: "An Elegant 60th Golden Jubilee Celebration",
    category: "celebrations",
    serviceScope: "Event Flow, Styling & Day-of Direction",
    location: "Ikoyi, Lagos",
    guestCount: "250 Guests",
    year: "2025",
    image: "/image/089C4C11-EC98-4FE7-9612-D2E1A8859628.JPG.jpeg",
    description:
      "A joyous family milestone celebration infused with vibrant cultural traditions, gold and ruby aesthetics, bespoke catering logistics, and non-stop celebration.",
    featured: true,
    tags: ["Milestone Birthday", "Family Jubilee", "Day-of Direction"],
  },
  {
    id: "luxury-monochrome-tablescape",
    title: "Bespoke Monochrome & Gold Fine Dining Tablescape",
    category: "styling",
    serviceScope: "Art Direction & Floral Installation",
    location: "Lekki Peninsula, Lagos",
    guestCount: "120 Guests",
    year: "2026",
    image: "/image/IMG_5474.JPG.jpeg",
    description:
      "Bespoke fine-dining tablescaping featuring cascading white hydrangeas and roses, gold-rimmed china, tapered candlelight, and custom tasselled favor curation.",
    featured: true,
    tags: ["Floral Design", "Tablescape", "Luxury Styling"],
  },
  {
    id: "ifeanyi-traditional-wedding",
    title: "The Royal Igbo Traditional Wedding of Ifeanyi & His Bride",
    category: "weddings",
    serviceScope: "Full Planning & Cultural Coordination",
    location: "Enugu & Lagos",
    guestCount: "600 Guests",
    year: "2025",
    image: "/image/C481C71A-EDC2-4867-BEE8-209611EF45C7.PNG",
    description:
      "A grand celebration of rich Igbo cultural heritage, showcasing authentic red Akwete fabrics, heavy coral regalia, gold-carved thrones, and precision crowd management.",
    featured: false,
    tags: ["Traditional Wedding", "Cultural Heritage", "Full Planning"],
  },
  {
    id: "grand-reception-entrance",
    title: "Floral Arch Grand Reception Couple Entrance",
    category: "weddings",
    serviceScope: "On-the-Day Coordination & Direction",
    location: "Victoria Island, Lagos",
    guestCount: "450 Guests",
    year: "2026",
    image: "/image/6F160DCC-A405-46F8-8F48-18EC0D502775.JPG.jpeg",
    description:
      "An electrifying grand entrance with lush floral arches, confetti cues, and crowd anticipation executed with minute-by-minute timing.",
    featured: false,
    tags: ["Grand Entrance", "Day-of Direction", "Reception Flow"],
  },
  {
    id: "romantic-garden-vows",
    title: "Botanical Garden Vow Exchange & Intimate Romance",
    category: "weddings",
    serviceScope: "Full Planning & Day-of Coordination",
    location: "Lekki Conservation Sanctuary, Lagos",
    guestCount: "100 Guests",
    year: "2025",
    image: "/image/IMG_6472.PNG",
    description:
      "An intimate sun-dappled garden vow exchange flanked by fountains and lush botanical blooms, designed for authentic couple presence and tranquility.",
    featured: false,
    tags: ["Garden Wedding", "Intimate Vows", "Full Planning"],
  },
  {
    id: "starry-seaside-vows",
    title: "Starry Night Coastal Ceremony & Timber Pergola",
    category: "weddings",
    serviceScope: "Concept Design & Day-of Direction",
    location: "Ilaje Beachfront, Lagos",
    guestCount: "150 Guests",
    year: "2025",
    image: "/image/E44750E2-F094-4FB1-B956-A13DFD8EA569.JPG.jpeg",
    description:
      "Romantic twilight coastal vows framed by an illuminated timber arch, white blooms, organic pampas grass, and ocean breeze.",
    featured: false,
    tags: ["Coastal Wedding", "Night Ceremony", "Art Direction"],
  },
  {
    id: "bridal-radiance-portrait",
    title: "Crystalline Evening Bridal Couture & Canopy",
    category: "weddings",
    serviceScope: "Bridal Hospitality & Concierge",
    location: "Victoria Island, Lagos",
    year: "2026",
    image: "/image/3B48A8B9-4F5F-4052-91BA-FAF7B066FE02.JPG.jpeg",
    description:
      "Dedicated bridal escort and styling timeline management, ensuring the bride remained calm, hydrated, and radiant throughout her portraits.",
    featured: false,
    tags: ["Bridal Concierge", "Couture Styling", "Wedding Day"],
  },
  {
    id: "fine-art-bridal-couture",
    title: "Fine Art Cathedral Train Bridal Editorial",
    category: "weddings",
    serviceScope: "Day-of Bridal Management",
    location: "Ikoyi, Lagos",
    year: "2025",
    image: "/image/4C124A78-B8F7-4455-8EDB-0AE901CF6FC9.JPG.jpeg",
    description:
      "Flawless backstage dress handling, bridal suite schedule coordination, and cathedral veil placement for timeless bridal portraits.",
    featured: false,
    tags: ["Bridal Suite", "Editorial Styling", "Concierge"],
  },
  {
    id: "bridal-party-dance-entrance",
    title: "High-Energy Bridal Party & Groomsmen Entrance",
    category: "weddings",
    serviceScope: "Reception Program Direction",
    location: "Lagos Mainland, Lagos",
    guestCount: "350 Guests",
    year: "2026",
    image: "/image/7C054474-8958-4ACC-9172-6764BDBF5328.JPG.jpeg",
    description:
      "Choreographed bridal party entrance perfectly synchronized with the DJ, hypeman, and ambient lighting transitions.",
    featured: false,
    tags: ["Bridal Party", "Program Direction", "Entertainment"],
  },
  {
    id: "executive-keynote-stage",
    title: "Keynote Speaker Stage Production & Technical Cues",
    category: "corporate",
    serviceScope: "Stage Management & Audio-Visual Flow",
    location: "Federal Palace Ballroom, Lagos",
    guestCount: "500 Attendees",
    year: "2026",
    image: "/image/E852D51D-55DD-4DAE-A565-D28F324D49AA.JPG.jpeg",
    description:
      "Seamless stage manager cueing, presentation switching, and VIP stage hospitality for distinguished industry speakers.",
    featured: false,
    tags: ["Stage Management", "AV Production", "Conference"],
  },
  {
    id: "corporate-vip-banquet",
    title: "Corporate Leadership Luncheon & Table Design",
    category: "corporate",
    serviceScope: "Hospitality & Protocol Coordination",
    location: "Victoria Island, Lagos",
    guestCount: "180 Delegates",
    year: "2026",
    image: "/image/BE5FEAFE-D62F-4FA1-ABFF-3BA8CB4B6A01.JPG.jpeg",
    description:
      "Executive protocol-driven table arrangements, custom floral branding, and seamless multi-course culinary service for pan-African delegates.",
    featured: false,
    tags: ["Corporate Hospitality", "Protocol", "Banquet Flow"],
  },
  {
    id: "traditional-asoebi-carnival",
    title: "The Grand Aso Ebi Cultural Family Celebration",
    category: "celebrations",
    serviceScope: "Crowd Flow & Vendor Coordination",
    location: "Havilah Event Centre, Lagos",
    guestCount: "700 Guests",
    year: "2025",
    image: "/image/228CA0FB-FD32-4CB2-A6C8-738465B93A8B.JPG.jpeg",
    description:
      "Managing a spectacular 700-guest cultural celebration with designated family zones, synchronized buffet service, and zero bottlenecks.",
    featured: false,
    tags: ["Aso Ebi", "Crowd Coordination", "Cultural Festival"],
  },
  {
    id: "cultural-heritage-troupe",
    title: "Authentic Shekere Traditional Troupe Performance",
    category: "celebrations",
    serviceScope: "Entertainment Curation & Stage Logistics",
    location: "Ikeja, Lagos",
    guestCount: "300 Guests",
    year: "2025",
    image: "/image/9A51232F-5465-47E2-B15F-BD09A9F2B513.JPG.jpeg",
    description:
      "Live traditional percussionists and royal coral-crowned dancers welcoming guests and ushering celebrants with infectious joy.",
    featured: false,
    tags: ["Live Entertainment", "Traditional Dancers", "Cultural Welcoming"],
  },
  {
    id: "curated-cocktail-soiree",
    title: "Artisanal Canapés & Cocktail Reception Gastronomy",
    category: "celebrations",
    serviceScope: "Catering Curation & Service Flow",
    location: "Banana Island, Lagos",
    guestCount: "80 Guests",
    year: "2026",
    image: "/image/5A0F8C94-FD6B-4849-A938-B0C34B806DC2.JPG.jpeg",
    description:
      "Curated passed hors d'oeuvres, micro-greens, shooter desserts, and craft beverages served seamlessly during pre-dinner mingling.",
    featured: false,
    tags: ["Cocktail Reception", "Artisanal Catering", "Gastronomy"],
  },
  {
    id: "fluted-arch-architectural-stage",
    title: "Modern Matte Black Fluted Arch & Stepped Riser",
    category: "styling",
    serviceScope: "Spatial Decor & Architectural Fabrication",
    location: "Eko Atlantic City, Lagos",
    year: "2026",
    image: "/image/IMG_5469.JPG.jpeg",
    description:
      "Custom geometric fluted arch structures with organic ivory floral installations and floating tiered ceremony platforms.",
    featured: false,
    tags: ["Spatial Design", "Floral Installation", "Modern Architecture"],
  },
  {
    id: "gold-chafer-banquet-buffet",
    title: "Luxury Gold Roll-Top Chafer Culinary Presentation",
    category: "styling",
    serviceScope: "Catering Presentation & Service Architecture",
    location: "Victoria Island, Lagos",
    year: "2026",
    image: "/image/24EAB410-04CF-4418-B4C5-8D0E9CEBD461.JPG.jpeg",
    description:
      "Elevated Nigerian culinary service featuring polished gold roll-top chafers, temperature management, and immaculate food presentation.",
    featured: false,
    tags: ["Catering Logistics", "Buffet Presentation", "Hospitality"],
  },
  {
    id: "outdoor-hospitality-spread",
    title: "Open-Air Garden Lawn Hospitality & Chafer Station",
    category: "styling",
    serviceScope: "Outdoor Logistics & Culinary Service",
    location: "Ikoyi Club, Lagos",
    guestCount: "200 Guests",
    year: "2025",
    image: "/image/5348078B-13B2-4C18-9314-B2B84665275E.JPG.jpeg",
    description:
      "Garden lawn banquet logistics with dedicated replenishment teams, hot service stations, and sanitary guest flow.",
    featured: false,
    tags: ["Outdoor Catering", "Service Flow", "Banquet Logistics"],
  },
  {
    id: "intimate-couple-portrait",
    title: "Intimate Bridal Veil Embroidery & Couple Harmony",
    category: "styling",
    serviceScope: "WAD Couple Experience & Styling Curation",
    location: "Lekki Peninsula, Lagos",
    year: "2026",
    image: "/image/IMG_6473.PNG",
    description:
      "Intimate floral embroidery veil detail, coordinating groom vestment, and relaxed bridal preparation moments.",
    featured: false,
    tags: ["Bridal Styling", "Couple Experience", "Bespoke Details"],
  },
];
