# **WAD Events — Functional & Technical Specification**

**Document:** spec.md

**Target Application:** WAD Events Web Application

**Version:** 1.0 (Phase 1 MVP)

**Status:** Approved for Implementation

## **1\. System Architecture & Tech Stack**

### **1.1 Technology Decisions**

* **Framework:** Next.js (App Router, React 19 / modern server components).  
*   
* **Language:** TypeScript (strict: true) for type safety across form payloads, service definitions, and gallery metadata.  
*   
* **Styling:** Tailwind CSS v3 / v4 with customized design tokens adhering to brand guidelines.  
*   
* **Icons:** lucide-react (clean, minimal line icons aligned with the brand's requirement for soft, non-intrusive visuals).  
*   
* **Fonts:** next/font/google using a serif heading font (Cormorant Garamond or Playfair Display) and a modern sans-serif body font (Plus Jakarta Sans).  
*   
* **Hosting & Deployment:** Vercel (seamless edge routing, preview branches, and automatic HTTPS).  
* 

### **1.2 Database Exemption (Phase 1\)**

* **Rationale:** As outlined in the discovery phase, Phase 1 requires no relational or NoSQL database.  
*   
* **Data Layer:**  
* 

  * Services, client testimonials, and gallery items are stored as strongly typed static JSON / TypeScript objects inside src/data/.  
  *   
  * Allows instantaneous page loads, zero database maintenance costs, and edge caching.  
  * 

## **2\. Directory & Component Architecture**

Plaintext  
wad-events/  
├── public/  
│   ├── brand/  
│   │   ├── wad-logo-primary.svg     \# Primary wine logo\[cite: 4, 6\]  
│   │   ├── wad-logo-white.svg       \# Reverse white logo for dark sections\[cite: 4\]  
│   │   └── wad-brandmark.svg        \# Simplified petal emblem\[cite: 4, 5\]  
│   ├── images/  
│   │   ├── hero/  
│   │   ├── services/  
│   │   └── gallery/  
├── src/  
│   ├── app/  
│   │   ├── layout.tsx               \# Root layout: metadata, fonts, Navbar, Footer, WhatsApp floating CTA  
│   │   ├── page.tsx                 \# Home Page (all 8 strategic brief sections)  
│   │   ├── gallery/  
│   │   │   └── page.tsx             \# Interactive Filterable Gallery  
│   │   ├── contact/  
│   │   │   └── page.tsx             \# Contact & Quotation Request Page  
│   │   └── api/  
│   │       └── contact/  
│   │           └── route.ts         \# Serverless API endpoint for form handling & email forwarding  
│   ├── components/  
│   │   ├── common/  
│   │   │   ├── Navbar.tsx  
│   │   │   ├── Footer.tsx  
│   │   │   ├── Button.tsx  
│   │   │   └── SectionHeading.tsx  
│   │   ├── home/  
│   │   │   ├── HeroSection.tsx  
│   │   │   ├── WhyWADSection.tsx  
│   │   │   ├── ServicesGrid.tsx  
│   │   │   ├── OccasionsGrid.tsx  
│   │   │   ├── CoupleExperienceBanner.tsx  
│   │   │   ├── TestimonialsSection.tsx  
│   │   │   └── HowItWorksSection.tsx  
│   │   ├── gallery/  
│   │   │   ├── GalleryFilter.tsx  
│   │   │   └── GalleryCard.tsx  
│   │   └── contact/  
│   │       ├── ContactForm.tsx  
│   │       └── WhatsAppDirectCard.tsx  
│   ├── data/  
│   │   ├── services.ts              \# Definitions for the 7 core services  
│   │   ├── occasions.ts             \# Occasions handled  
│   │   ├── testimonials.ts  
│   │   └── gallery.ts               \# Image metadata and category tags  
│   ├── lib/  
│   │   └── utils.ts                 \# Class merging (clsx/twMerge) and WhatsApp URL builder  
│   └── styles/  
│       └── globals.css  
├── tailwind.config.ts  
├── tsconfig.json  
└── package.json

## **3\. Data Schemas & TypeScript Types**

### **3.1 Service Schema (**src/types/service.ts**)**

TypeScript  
export interface ServiceItem {  
  id: string;  
  number: string; // e.g., "01", "02"  
  title: string; // e.g., "Full Event Planning"  
  summary: string;  
  bestFor: string;  
  slug: string;  
  imageUrl?: string;  
  campaignBadge?: string; // e.g., "Plan Your Wedding in 72 Hours"  
}

### **3.2 Gallery Item Schema (**src/types/gallery.ts**)**

TypeScript  
export type EventCategory \=   
  | "all"   
  | "weddings"   
  | "corporate"   
  | "intimate"   
  | "styling";\[cite: 7, 8\]

export interface GalleryItem {  
  id: string;  
  title: string;  
  category: EventCategory;  
  categoryLabel: string;  
  location?: string;  
  imageUrl: string;  
  width: number;  
  height: number;  
  altText: string;  
}

### **3.3 Quotation Form Payload (**src/types/contact.ts**)**

TypeScript  
export interface QuotationRequestPayload {  
  fullName: string;  
  email: string;  
  phone: string;  
  eventType: string;\[cite: 8\]  
  estimatedDate: string;\[cite: 8\]  
  estimatedGuestCount: string;  
  location: string;\[cite: 8\]  
  supportNeeded: string\[\];\[cite: 8\]  
  notes?: string;  
}

## **4\. Functional Specifications & Behavioral Requirements**

### **4.1 Navigation & Layout**

* **Sticky Navigation Bar:**  
* 

  * Fixed on scroll with subtle background blur (backdrop-blur-md bg-white/90).  
  *   
  * Displays the WAD Events logo within the specified clear zone.  
  *   
  * Mobile view collapses into a slide-over menu containing all primary links and an instant "Call / WhatsApp" button.  
  *   
* **Floating WhatsApp Action:**  
* 

  * Fixed bottom-right element (z-index: 50).  
  *   
  * Automatically encodes user intent into a click-to-chat URL:  
  * \[https\://wa.me/\](https\://wa.me/){BUSINESS\_PHONE}?text={ENCODED\_MESSAGE}.  
  * 

### **4.2 Home Page Flow**

1. **Hero Area:** Immediate visual hook with primary CTA directing visitors to /contact, and secondary anchor jump to \#services.  
2.   
3. **The WAD Difference:** Emphasizes the emotional message ("You do not have to carry every detail alone") and core values.  
4.   
5. **Services Grid:** Renders all 7 defined service cards:  
6. 

   * *Full Event Planning*  
   * 

   *   
   * *Event Coordination*  
   * 

   *   
   * *On-the-Day Coordination*  
   * 

   *   
   * *WAD Couple Experience*  
   * 

   * \[cite: 7, 8\]  
   *   
   * *Event Design and Styling*  
   * 

   * \[cite: 7, 8\]  
   *   
   * *Planner Support*  
   * 

   * \[cite: 7, 8\]  
   *   
   * *WAD Academy*  
   * 

   * \[cite: 7, 8\]  
   *   
   * Each card features an enquiry link passing the service name as a URL parameter to the contact form (e.g., /contact?service=couple-experience).  
   *   
7. **Occasions Section:** Displays corporate, weddings, brand launches, concerts, awards, and intimate gatherings\[cite: 7, 8\].  
8.   
9. **Special Campaign Spotlight:** Highlights the "Plan Your Wedding in 72 Hours" intensive\[cite: 7, 8\].  
10.   
11. **Booking Workflow:** Step-by-step 4-stage roadmap (Enquiry $\rightarrow$ Discovery $\rightarrow$ Proposal $\rightarrow$ Flawless Day).  
12. 

### **4.3 Gallery Functionality (**/gallery**)**

* **State Management:** Client component using useState for active category tab.  
*   
* **Filtering:** Instant client-side filtering without page reloads.  
*   
* **Image Optimization:**  
* 

  * Powered by next/image using standard aspect ratios (4:3, 16:9, or 1:1) to prevent layout shift (CLS).  
  *   
  * Hover effects: smooth scaling (scale-105 transition-transform duration-500) with wine-tinted gradient overlays.  
  * 

### **4.4 Contact & Quotation Engine (**/contact**)**

* **Two-Column Split Layout:**  
* 

  1. **Left Column:** Direct communication methods (WhatsApp click-to-chat card, email, Instagram handle @Planwithwad, office hours).  
  2.   
  3. **Right Column:** Multi-field quotation form.  
  4.   
* **Form Submission Pipeline:**  
* 

  1. Client-side validation for required fields (Name, Phone, Event Type, Estimated Date)\[cite: 8\].  
  2.   
  3. POST request sent to /api/contact.  
  4.   
  5. API route sanitizes input and forwards payload using an edge-compatible provider (e.g., Resend, SendGrid, or Nodemailer).  
  6.   
  7. Instant fallback: provides a "Click to submit via WhatsApp instead" button that pre-formats the completed form inputs into a WhatsApp message.  
  8.   
  9. Form swaps to an in-place success confirmation banner without page reload.  
  10. 

## **5\. Non-Functional Requirements & Performance Standards**

* **Core Web Vitals:** Target Largest Contentful Paint (LCP) $\leq 1.8\text{s}$, First Input Delay (FID) / INP $\leq 100\text{ms}$, Cumulative Layout Shift (CLS) $\leq 0.05$.  
*   
* **SEO & Metadata:**  
* 

  * Structured OpenGraph and Twitter card metadata on every route.  
  *   
  * Local business schema (JSON-LD) for event planning services in Lagos/Nigeria.  
  *   
* **Brand Integrity Constraints:**  
* 

  * Strictly avoid using generic, harsh corporate blues; only use the approved palette: Wine (\#731823), Nude (\#dbd2d1), Charcoal (\#231f20), Slate (\#4e525e), and Steel Blue (\#b0c4de).  
  *   
  * Adhere to logo safe zones (minimum padding equivalent to emblem height).

