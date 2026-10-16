export const BUSINESS_INFO = {
  name: "WAD Events",
  tagline: "Planned with heart, delivered with excellence.",
  email: "info.wadevents@gmail.com",
  phoneRaw: "090778881443",
  phoneFormatted: "+234 907 788 81443",
  phoneTel: "tel:+23490778881443",
  whatsappNumber: "23490778881443",
  getWhatsAppUrl: (message?: string) => {
    const defaultMsg =
      "Hello WAD Events, I am interested in planning an event and would love to discuss your services.";
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/23490778881443?text=${text}`;
  },
  instagram: {
    handle: "@planwithwad",
    url: "https://www.instagram.com/planwithwad",
  },
  tiktok: {
    handle: "@planwithwad",
    url: "https://www.tiktok.com/@planwithwad",
  },
  location: "Available for Lagos & Destination Celebrations",
  hashtags: ["#WADEvents", "#PlanwithWAD", "#CelebrateWithCare"],
};
