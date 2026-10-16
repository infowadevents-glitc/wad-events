export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  eventType: string;
  location?: string;
  year?: string;
  rating?: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "tolu-michael",
    quote:
      "I was carrying so much anxiety about our wedding day. WAD Events didn't just coordinate our vendors; they gave us complete peace of mind. We were able to dance and enjoy our friends without worrying once about what was happening behind the scenes.",
    author: "Tolu & Michael",
    role: "Wedding Clients",
    eventType: "Full Wedding Planning & Direction",
    location: "Lagos, Nigeria",
    year: "2026",
    rating: 5,
  },
  {
    id: "corporate-summit",
    quote:
      "Precise, punctual, and remarkably calm under pressure. WAD Events handled our 300-guest summit flawlessly. Every transition was on time, and our executive team could focus on our stakeholders.",
    author: "Operations Director",
    role: "Pan-African Fintech Brand Summit",
    eventType: "Corporate Conference & Gala",
    location: "Eko Atlantic, Lagos",
    year: "2026",
    rating: 5,
  },
  {
    id: "chioma-birthday",
    quote:
      "Every detail felt intentional. From the warm welcoming of our guests to the stunning tablescape styling, WAD Events created an atmosphere where everyone felt genuinely loved and looked after.",
    author: "Dr. Chioma E.",
    role: "Milestone Celebrant",
    eventType: "Private Milestone Celebration",
    location: "Ikoyi, Lagos",
    year: "2025",
    rating: 5,
  },
  {
    id: "couple-sprint",
    quote:
      "The 'Plan Your Wedding in 72 Hours' experience saved us months of arguments and second-guessing. They cut through the noise, broke down our budget with honesty, and gave us an iron-clad roadmap.",
    author: "Kelechi & Nnamdi",
    role: "WAD Couple Experience Alumni",
    eventType: "Wedding Strategy Intensive",
    location: "Abuja, Nigeria",
    year: "2025",
    rating: 5,
  },
];
