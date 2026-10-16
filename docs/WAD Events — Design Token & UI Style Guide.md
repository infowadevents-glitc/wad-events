# **WAD Events — Design Token & UI Style Guide**

**Document:** style-guide.md

**Brand:** WAD Events

**Version:** 1.0 (Web Implementation Standard)

## **1\. Color System & Design Tokens**

The palette is derived directly from the WAD Events Brand Guidelines. All interface elements must strictly adhere to these color definitions and assigned roles.

| Token Name | Hex Code | Tailwind Token | UI Role & Application PDF+ 1 |
| :---- | :---- | :---- | :---- |
| **Wine (Primary)**   | \#731823   | bg-wad-wine, text-wad-wine | Primary action buttons, prominent headings, borders, and brand accents.  |
| **Nude (Background/Neutral)**   | \#DBD2D1   | bg-wad-nude, border-wad-nude | Alternating section backgrounds, soft card surfaces, and subtle divider lines.  |
| **Charcoal (Dark Base)**   | \#231F20   | bg-wad-charcoal, text-wad-charcoal | High-contrast body typography, dark footers, and inverted sections.  |
| **Slate Gray (Muted Secondary)**   | \#4E525E   | text-wad-slate, border-wad-slate | Supporting descriptions, subheadings, placeholder text, and secondary icons.  |
| **Steel Blue (Accent)**   | \#B0C4DE   | bg-wad-steel, text-wad-steel | Feature tags, badges (e.g., campaign pills), and restrained highlights.  |
| **Soft Cream (Canvas)** | \#FAF8F6 | bg-wad-canvas | Main website background providing a warmer tone than stark white. |

## **2\. Typography Hierarchy**

The typography pairs an elegant, intentional serif for titles with a clean, highly legible sans-serif for structured content and interfaces.

### **Font Families**

* **Display / Headings:** Playfair Display or Cormorant Garamond (fallback: Georgia, serif). Used for main statements, section titles, and quotes.  
*   
* **Body / UI Elements:** Plus Jakarta Sans or Inter (fallback: system-ui, sans-serif). Used for paragraphs, navigation, labels, form controls, and metadata.  
* 

### **Type Scale & Hierarchy**

* **Display 1 (Hero Title):** text-4xl md:text-6xl font-serif font-medium leading-\[1.15\] text-wad-charcoal  
* 

*   
* **Heading 1 (Section Titles):** text-3xl md:text-4xl font-serif font-semibold text-wad-wine  
* 

*   
* **Heading 2 (Card / Sub-section Titles):** text-xl md:text-2xl font-serif font-semibold text-wad-charcoal  
* 

*   
* **Heading 3 (Eyebrow / Category Badges):** text-xs md:text-sm font-sans font-semibold uppercase tracking-widest text-wad-wine  
* 

*   
* **Body Lead (Intro Paragraphs):** text-lg md:text-xl font-sans text-wad-slate leading-relaxed  
* 

*   
* **Body Standard (Paragraphs / Cards):** text-base font-sans text-wad-charcoal/90 leading-normal  
* 

*   
* **Caption / Meta:** text-sm font-sans text-wad-slate  
* 

* 

## **3\. Brand Identity & Safe Zones**

* **Primary Logo:** Full horizontal lockup combining the petal brandmark and the "WAD EVENTS" logotype.  
*   
* **Clear Space Rule:** Ensure minimum clear space surrounding the logo equivalent to the height of the brandmark petal element ($2\text{px}$ proportion indicator in guidelines) to prevent interference with text or visuals.  
*   
* **Secondary Brandmark:** Use the standalone stylized peacock/petal emblem for mobile nav headers, favicons, and subtle watermark backgrounds.  
*   
* **Rule on Dark Backgrounds:** When rendering on Wine (\#731823) or Charcoal (\#231F20), the logo and emblem must be rendered in clean reverse white or \#DBD2D1.  
* 

## **4\. UI Components & Interaction States**

### **4.1 Buttons**

* **Primary Button:**  
* 

  * Style: bg-wad-wine text-white font-sans text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-\[\#5a121b\] hover:shadow-lg active:scale-\[0.98\]  
  * 

  *   
  * Usage: Primary calls to action (Let's Plan Your Event, Submit Quotation Request).  
  *   
* **Secondary / Outline Button:**  
* 

  * Style: border border-wad-wine text-wad-wine bg-transparent font-sans text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-wad-wine hover:text-white  
  * 

  *   
  * Usage: Exploratory navigation (Explore Our Services, View Gallery).  
  *   
* **WhatsApp Quick Action Button:**  
* 

  * Style: bg-\[\#25D366\] text-white font-sans text-sm font-medium px-5 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-\[\#20ba59\] transition-all  
  * 

  *   
  * Usage: Floating quick chat and instant direct contact cards.  
  * 

### **4.2 Cards & Surface Containers**

* **Service Cards:**  
* 

  * Structure: Warm off-white or nude tinted background (bg-white or bg-\[\#F7F4F2\]), soft corner radius (rounded-2xl), subtle border (border border-wad-nude/60), and subtle drop shadow on hover (hover:shadow-xl transition-all duration-300).  
  *   
  * Padding: Generous interior breathing room (p-8).  
  *   
* **Category Pills / Tags:**  
* 

  * Structure: Rounded badge (rounded-full px-3.5 py-1 text-xs font-medium).  
  *   
  * Default: bg-wad-nude/40 text-wad-slate.  
  *   
  * Active/Selected: bg-wad-wine text-white.  
  * 

### **4.3 Form Elements**

* **Input Fields & Select Boxes:**  
* 

  * Style: w-full bg-white border border-wad-nude rounded-xl px-4 py-3 text-wad-charcoal placeholder-wad-slate/60 text-sm focus:outline-none focus:ring-2 focus:ring-wad-wine/20 focus:border-wad-wine transition-colors.  
  *   
  * Error State: border-red-500 focus:border-red-500 focus:ring-red-200.  
  * 

## **5\. Imagery & Photography Guidelines**

* **Subject Matter:** Prioritize photographs of real guests, genuine smiles, emotional interactions, and moments of comfort over isolated, cold venue decor.  
*   
* **Color Balance:** Warm, natural lighting with soft shadows. Avoid oversaturated HDR or cold blue-heavy filters.  
*   
* **Aspect Ratios:**  
* 

  * Hero Images: 16:9 or 21:9 wide crop.  
  *   
  * Service Cards: 4:3 horizontal or 1:1 square.  
  *   
  * Gallery Cards: Masonry or uniform 4:5 vertical portraits to highlight event staging and people.

