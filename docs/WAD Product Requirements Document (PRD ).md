Product Requirements Document (PRD)

\*\*Project Name:\*\* WAD Events Web Application

\*\*Document Version:\*\* 1.0

\*\*Target Release:\*\* Q4 2026

\*\*Document Owner:\*\* Lead Product Strategist & Frontend Architect

\*\*Status:\*\* Approved for Implementation

\---

\#\# 1\. Executive Summary & Product Vision

\#\#\# 1.1 Product Overview

WAD Events is a boutique event planning, coordination, and styling firm. The primary deliverable is an elegant, mobile-first, conversion-focused web application designed to showcase the company's past work, establish credibility, communicate brand values, and drive direct client inquiries via a quotation request pipeline and instant WhatsApp routing.

\#\#\# 1.2 Core Problem Statement

Prospective clients planning weddings, corporate summits, or intimate gatherings often face decision fatigue, fragmented logistics, and the stress of managing event details alone. Standard event websites often function as generic brochures that list vendor features without communicating care or building emotional trust.

\#\#\# 1.3 Value Proposition & Brand Mission

\* \*\*Company Purpose:\*\* To create stress-free, joy-filled, and seamlessly executed events that leave a lasting emotional imprint on every client.

\* \*\*Core Brand Idea:\*\* "There is a lot to hold together when bringing people together. WAD Events helps you hold it all together, with care, structure and thoughtful execution."

\* \*\*Emotional Message:\*\* "You do not have to carry every detail alone."

\* \*\*Practical Promise:\*\* Care, structure, and intentionality across planning and execution.

\---

\#\# 2\. Target User Personas & Stakeholders

| Persona Profile | Core Motivations & Needs | Primary Site Action |  
| \--- | \--- | \--- |  
| \*\*Engaged Couple (e.g., Ada & Tunde)\*\* | Overwhelmed by vendor sourcing and timelines; seeks emotional calm and an organized roadmap.

 | Reviews Wedding gallery; engages with "Plan Your Wedding in 72 Hours"; initiates WhatsApp inquiry.

 |  
| \*\*Corporate Event Lead\*\* | Needs strict scheduling, punctual transitions, and clear logistics management.

 | Inspects the Corporate portfolio; submits a formal multi-field quotation request.

 |  
| \*\*Independent / Emerging Planner\*\* | Needs back-office systems, templates, workflows, or professional mentoring.

 | Explores Planner Support and WAD Academy offerings; submits an inquiry.

 |  
| \*\*WAD Business Owner & Team\*\* | Needs qualified inbound leads with complete event parameters (date, venue, budget, scope).

 | Receives formatted notifications via email and direct WhatsApp messages.

 |

\---

\#\# 3\. Scope of Work (Release Phases)

\#\#\# Phase 1 (MVP — In Scope)

\* High-performance 3-page web application: \*\*Home (\`/\`)\*\*, \*\*Gallery (\`/gallery\`)\*\*, and \*\*Contact & Quotation (\`/contact\`)\*\*.  
\* Interactive category filtering for the portfolio gallery.

\* Lead capture engine featuring client-side validated quotation forms.

\* Direct WhatsApp click-to-chat integration with dynamic message encoding.

\* Serverless transactional email forwarding for quote submissions.

\* Full responsive UI matching brand guidelines and typography rules.

\#\#\# Phase 2 (Future Scope — Out of Scope for MVP)

\* Headless CMS integration (Sanity / Strapi) for real-time portfolio management.  
\* Client booking and calendar availability scheduling.  
\* Payment gateway integration for deposits and Academy tuition.  
\* Password-protected client portal for live timeline tracking.

\---

\#\# 4\. Functional Requirements & Page Specifications

\#\#\# 4.1 Global Elements & Navigation

\* \*\*FR-GL-01 (Sticky Header):\*\* Glassmorphism navbar (\`backdrop-blur-md bg-white/90\`) displaying the WAD Events primary logo, navigation anchors (\`Home\`, \`Services\`, \`Gallery\`, \`About\`, \`Contact\`), and a \`Plan Your Event\` button.

\* \*\*FR-GL-02 (Mobile Menu):\*\* Responsive slide-out drawer providing full navigation access on screens \$\< 768\\text{px}\$.  
\* \*\*FR-GL-03 (Persistent WhatsApp Trigger):\*\* Fixed floating button (bottom-right) opening a pre-filled WhatsApp conversation.

\* \*\*FR-GL-04 (Global Footer):\*\* Brand identity block with logo, mission statement, social handle (\`@Planwithwad\`), hashtags (\`\#WADEvents\`, \`\#PlanwithWAD\`, \`\#CelebrateWithCare\`), and legal copyright notice.

\---

\#\#\# 4.2 Home Page (\`/\`)

The home page must guide visitors through an 8-stage conversion funnel:

\* \*\*FR-HP-01 (Hero Section):\*\*  
\* Displays campaign headline: \*"You have enough to think about. Let us take care of the details."\*

\* Supporting brand copy.

\* Primary CTA: \`Let's Plan Your Event\` (redirects to \`/contact\`).

\* Secondary CTA: \`Explore Our Services\` (scrolls to \`\#services\`).

\* \*\*FR-HP-02 (The WAD Difference):\*\* Explains the behind-the-scenes reality of event management and highlights the three core pillars: listening, taking responsibility, and noticing unseen details.

\* \*\*FR-HP-03 (Services Grid):\*\* Displays structured cards for all 7 verified service categories:

1\. \*Full Event Planning\*

2\. \*Event Coordination\*

3\. \*On-the-Day Coordination\*

4\. \*WAD Couple Experience\*

5\. \*Event Design & Styling\*

6\. \*Planner Support\*

7\. \*WAD Academy\*

\* Each card includes a title, benefit-led description, target audience badge, and an inquiry link pre-selecting the service in the contact form.

\* \*\*FR-HP-04 (Occasions Handled):\*\* Highlights the scope of events produced: Weddings, Corporate Conferences, Brand Launches, Concerts & Awards, Runway Shows, and Private Dinners.

\* \*\*FR-HP-05 (Campaign Spotlight):\*\* Dedicated feature banner highlighting the \*WAD Couple Experience\* ("Plan Your Wedding in 72 Hours") with a direct CTA button.

\* \*\*FR-HP-06 (Social Proof):\*\* Client testimonial cards focusing on peace of mind, relief from stress, and execution reliability.

\* \*\*FR-HP-07 (Meet WAD Events):\*\* Introduces the founder, the "mother's touch" philosophy of care, and dedication to guest unity.

\* \*\*FR-HP-08 (How It Works):\*\* 4-step booking workflow: \*01. Inquire \$\\rightarrow\$ 02\. Consultation \$\\rightarrow\$ 03\. Tailored Proposal \$\\rightarrow\$ 04\. Execution & Peace of Mind\*.

\---

\#\#\# 4.3 Gallery Page (\`/gallery\`)

\* \*\*FR-GA-01 (Category Filter Bar):\*\* Interactive tab list (\`All\`, \`Weddings\`, \`Corporate\`, \`Intimate\`, \`Styling\`) with instantaneous client-side re-rendering.

\* \*\*FR-GA-02 (Responsive Grid):\*\* 3-column desktop / 2-column tablet / 1-column mobile image display with uniform aspect ratios (\`4:5\` portrait or \`16:9\` landscape).  
\* \*\*FR-GA-03 (Hover Overlay & Metadata):\*\* On hover, displays an image title, category tag, event location, and zoom effect.  
\* \*\*FR-GA-04 (Inquiry Prompt):\*\* Bottom banner encouraging visitors who like the visual work to discuss their event vision.

\---

\#\#\# 4.4 Contact & Quotation Page (\`/contact\`)

\* \*\*FR-CO-01 (Direct Channels Card):\*\* Click-to-chat WhatsApp button, official email link, and Instagram link to \`@Planwithwad\`.

\* \*\*FR-CO-02 (Form Input Specification):\*\*  
\* Full Name (required, text)

\* Email Address (required, email format)

\* Phone / WhatsApp Number (required, telephone format)

\* Event Type (required, dropdown: \*Wedding, Corporate, Brand Launch, Intimate Occasion, Couple Experience, Planner Support, Academy\*)

\* Estimated Event Date (required, date or text)

\* Estimated Guest Count (optional, select range)  
\* Event City / Location (required, text)

\* Scope of Service Needed (required, multi-select checkboxes: \*Full Planning, Coordination, Day-of, Styling Only, Undecided\*)

\* Notes / Event Vision (optional, textarea)

\* \*\*FR-CO-03 (Form Submission Handling):\*\*  
\* Submits via asynchronous \`POST\` to \`/api/contact\`.  
\* Renders a success state without a full page reload upon receipt.  
\* In the event of network failure, displays a fallback button: \*"Submit via WhatsApp instead"\* that passes form data into a pre-filled WhatsApp chat link.

\---

\#\# 5\. Non-Functional Requirements (NFRs)

\#\#\# 5.1 Performance & Core Web Vitals

\* \*\*Largest Contentful Paint (LCP):\*\* \$\< 2.0\\text{s}\$ on standard 4G mobile connections.  
\* \*\*Cumulative Layout Shift (CLS):\*\* \$\< 0.05\$ across all responsive breakpoints.  
\* \*\*Interaction to Next Paint (INP):\*\* \$\< 150\\text{ms}\$.  
\* \*\*Image Delivery:\*\* Powered by Next.js \`next/image\` using automated WebP/AVIF compression, \`sizes\` definition, and \`priority\` tags on above-the-fold hero elements.

\#\#\# 5.2 Accessibility & Usability (WCAG 2.1 AA)

\* Contrast ratios between text and backgrounds must exceed \$4.5:1\$ (e.g., Wine \`\#731823\` on White is \$\\approx 9.2:1\$; Charcoal \`\#231F20\` on Nude \`\#DBD2D1\` is \$\\approx 10.4:1\$).

\* Screen reader accessible form labels (\`aria-label\`, \`\<label htmlFor="..."\>\`).  
\* Keyboard-navigable tab indices across all forms and interactive gallery tabs.

\#\#\# 5.3 Brand Consistency & Design Rules

\* Strict adherence to approved palette: Wine (\`\#731823\`), Nude (\`\#DBD2D1\`), Charcoal (\`\#231F20\`), Slate (\`\#4E525E\`), and Steel Blue (\`\#B0C4DE\`).

\* Clear safe-zone protection around the logo.

\* Typography standard: Serif headings and Sans-serif body copy.

\---

\#\# 6\. Success Metrics & Key Performance Indicators (KPIs)

1\. \*\*Quotation Conversion Rate:\*\* \$\\ge 4.5\\%\$ of unique visitors submitting a form or clicking a WhatsApp inquiry button.

2\. \*\*Lead Completeness:\*\* \$\\ge 90\\%\$ of inquiries containing verified date, guest count, and service scope.

3\. \*\*Engagement:\*\* Average time-on-page \$\> 1\\text{m } 45\\text{s}\$ on the Gallery and Services sections.

4\. \*\*Mobile Usability:\*\* \$\\ge 70\\%\$ of mobile visitors navigating smoothly without layout shift or UI drop-off.  
