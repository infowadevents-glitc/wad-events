"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
}

export default function WhatsAppButton({
  message = "Hello WAD Events, I am interested in planning an event and would love to discuss your services.",
  phoneNumber = "23490778881443", // Official WAD Events business number
}: WhatsAppButtonProps) {
  const encodedText = encodeURIComponent(message);
  const href = phoneNumber
    ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedText}`
    : `https://wa.me/?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-2.5 hidden sm:group-hover:flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-wad-charcoal text-white text-xs font-medium py-1.5 px-3.5 rounded-lg shadow-lg border border-white/10">
          Chat with our planning team
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-wad-charcoal" />
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WAD Events on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Subtle breathing ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </div>
  );
}
