\# WAD Events — Media & Asset Checklist

\*\*Document:\*\* \`asset-manifest.md\`

\*\*Brand:\*\* WAD Events

\*\*Version:\*\* 1.0

\*\*Purpose:\*\* Pre-development checklist of all brand files, photography, copy parameters, and third-party keys required to build and deploy the website.

\---

\#\# 1\. Brand Identity & Vector Assets

All vector assets must be provided in clean SVG format with transparent backgrounds.

| Asset Identifier | Asset File Name | Format | Specifications / Placement | Status |  
| \--- | \--- | \--- | \--- | \--- |  
| \*\*Primary Logo (Wine)\*\* | \`wad-logo-primary.svg\` | SVG | Full horizontal lockup (emblem \+ logotype in \`\#731823\`) for light headers.

 | Pending

 |  
| \*\*Reverse Logo (White)\*\* | \`wad-logo-white.svg\` | SVG | Inverted version in pure white (\`\#FFFFFF\`) or Nude (\`\#DBD2D1\`) for dark sections and footer.

 | Pending

 |  
| \*\*Brandmark Emblem\*\* | \`wad-brandmark.svg\` | SVG | Standalone stylized petal/peacock icon for mobile menu toggle and favicons.

 | Pending

 |  
| \*\*Favicon Package\*\* | \`favicon.ico\`, \`apple-touch-icon.png\` | ICO, PNG | 32x32, 180x180 px emblem icons for browser tabs and iOS home bookmarks. | Pending |

\---

\#\# 2\. Curated Photography Manifest

All images should be authentic event photos showing real guests, warmth, comfort, and human connections rather than generic stock imagery.

\#\#\# 2.1 Hero & Global Assets

\* \[ \] \*\*\`hero-main.jpg\`\*\* — Wide format (landscape \`16:9\` or \`21:9\`, min $1920\times 1080\text{px}$). Authentic, joyful event atmosphere showing people connecting.

\* \[ \] \*\*\`why-wad.jpg\`\*\* — Behind-the-scenes shot of planning in motion, vendor collaboration, or detail management.

\* \[ \] \*\*\`founder-portrait.jpg\`\*\* — Authentic, professional portrait of the founder to establish credibility and personal trust.

\#\#\# 2.2 Core Service Cover Images (\`4:3\` or \`1:1\`, min $800\times 600\text{px}$)

\* \[ \] \*\*\`service-full-planning.jpg\`\*\* — Detailed planning session, client consultation, or structured setup.

\* \[ \] \*\*\`service-coordination.jpg\`\*\* — Active event coordination in progress.

\* \[ \] \*\*\`service-day-of.jpg\`\*\* — Coordinator overseeing on-site venue schedule and transitions.

\* \[ \] \*\*\`service-couple-experience.jpg\`\*\* — Relaxed couple in consultation or reviewing a wedding roadmap.

\* \[ \] \*\*\`service-styling-decor.jpg\`\*\* — Elegant table layout, bespoke floral design, and curated aesthetics.

\* \[ \] \*\*\`service-planner-support.jpg\`\*\* — Workspace flatlay, planning timeline, binder, or laptop workflow.

\* \[ \] \*\*\`service-academy.jpg\`\*\* — Workshop, presentation, or interactive mentorship training session.

\#\#\# 2.3 Gallery Showcase Assets (Uniform \`4:5\` vertical or mixed masonry)

\* \[ \] \*\*Weddings & Love:\*\* 4–6 high-resolution photos highlighting couples, family moments, and ceremony setups.

\* \[ \] \*\*Corporate & Conferences:\*\* 3–4 photos showing professional staging, attendee engagement, and structured presentation spaces.

\* \[ \] \*\*Brand Launches & Runway Shows:\*\* 2–3 photos capturing energetic stage design, production, and milestone moments.

\* \[ \] \*\*Private Celebrations & Intimate Dinners:\*\* 3–4 photos of ambient dining, warm lighting, and guest smiles.

\---

\#\# 3\. Approved Content & Metadata Parameters

\* \[ \] \*\*Verified WhatsApp Number:\*\* International dialing format without spaces or symbols (e.g., \`+234...\`).

\* \[ \] \*\*Official Contact Email:\*\* Target destination address for quotation notifications (e.g., \`enquiries@wadevents.com\`).

\* \[ \] \*\*Instagram Handle:\*\* \`@Planwithwad\` (verified profile link).

\* \[ \] \*\*Physical Office / City Location:\*\* Primary operational base (e.g., Lagos, Nigeria) for local SEO schema.

\* \[ \] \*\*Client Testimonial Quotations:\*\* 2–3 verified quotes with client names and event categories.

\---

\#\# 4\. Third-Party Integrations & Environment Variables

| Variable Key | Purpose | Provider / Tool |  
| \--- | \--- | \--- |  
| \`NEXT\_PUBLIC\_WHATSAPP\_NUMBER\` | Target phone number for click-to-chat links

 | WhatsApp Business API / Direct URL

 |  
| \`RESEND\_API\_KEY\` or \`SMTP\_PASS\` | Sending incoming quotation submissions to the business email

 | Resend / Nodemailer / Formspree |  
| \`CONTACT\_RECEIVER\_EMAIL\` | Business inbox receiving quotation forms

 | Google Workspace or private domain mail |  
| \`NEXT\_PUBLIC\_SITE\_URL\` | Canonical domain for SEO and social sharing (e.g., \`\[https\://wadevents.com\](https\://wadevents.com)\`) | Vercel Deployment |  
