# FluxOne Landing Page

Public-facing modern responsive landing page for the **FluxOne** B2B Intelligent Business Management & Point of Sale (POS) Platform.

## 📁 Folder Structure (As requested)

```
landing-page/
├── public/
├── src/
│   ├── api/
│   │   └── landingApi.js             # Mock API handlers for Package Requests & Contact Forms
│   ├── app/
│   │   ├── layout.jsx                # Next.js App Router root layout
│   │   └── page.jsx                  # Main page entry
│   ├── components/
│   │   ├── navbar/Navbar.jsx         # Section 1: Top Navigation Bar & Brand Logo
│   │   ├── hero/HeroSection.jsx      # Section 2: Hero with Dashboard & AI Previews
│   │   ├── overview/PlatformOverview.jsx # Section 3: Platform Architecture & Pillars
│   │   ├── industries/IndustriesSection.jsx # Section 4: 10 Supported Industries & Modal
│   │   ├── features/CoreFeaturesSection.jsx # Section 5: 9 Core Modules & Capabilities
│   │   ├── ai/AiFeaturesSection.jsx  # Section 6: 8 Autonomous AI Engines
│   │   ├── screenshots/ProductScreenshotsSection.jsx # Section 7: Interactive Product Screen Previews
│   │   ├── packages/SubscriptionPackagesSection.jsx # Section 8: Professional & Enterprise Packages
│   │   ├── packages/PackageRequestModal.jsx         # Section 8: Super Admin Request Form
│   │   ├── pricing/PricingSection.jsx               # Section 9: Pricing, Billing Toggle & Matrix
│   │   ├── testimonials/TestimonialsSection.jsx     # Section 10: Reviews & Success Stories
│   │   ├── faq/FaqSection.jsx                       # Section 11: Expand/Collapse FAQ Accordion
│   │   ├── contact/ContactUsSection.jsx             # Section 12: Direct Inquiry Contact Form
│   │   ├── footer/Footer.jsx                        # Section 13: Company Info, Links & Legal
│   │   └── ui/                                      # Reusable UI Primitives (Button, Modal, Badge, IconHelper)
│   ├── data/                                        # Static datasets for all 13 sections
│   │   ├── navigationData.js
│   │   ├── heroData.js
│   │   ├── overviewData.js
│   │   ├── industriesData.js
│   │   ├── coreFeaturesData.js
│   │   ├── aiFeaturesData.js
│   │   ├── screenshotsData.js
│   │   ├── packagesData.js
│   │   ├── pricingData.js
│   │   ├── testimonialsData.js
│   │   ├── faqData.js
│   │   ├── footerData.js
│   │   └── index.js
│   ├── hooks/                                       # Custom React Hooks
│   │   ├── useScrollPosition.js
│   │   ├── useActiveSection.js
│   │   └── useModal.js
│   ├── lib/
│   │   ├── constants.js                             # Brand constants, colors, business types
│   │   └── utils.js                                 # Helper functions (cn, formatters, smooth scroll)
│   ├── LandingPage.jsx                              # Full page assembly
│   ├── styles.css                                   # Tailwind animations & scrollbar styles
│   └── index.js                                     # Package barrel export
├── package.json
├── jsconfig.json
└── README.md
```

## 🚀 13 Implemented Sections

1. **Navigation Bar**: Logo, Slogan, Home, Features, Industries, Pricing, AI Features, Resources, Contact Us, Login, and Get Started CTA.
2. **Hero Section**: Main Heading, Short Description, Get Started & Request Demo buttons, Live Multi-Branch Dashboard Preview, AI Business Assistant Preview, and Trusted By Logos.
3. **Platform Overview**: About FluxOne, Platform Benefits, Multi-Industry Support, Cloud-Based Solution, and AI-Powered Management.
4. **Industries We Serve**: 10 Specialized Industries (Retail, Restaurant, Café, Pharmacy, Supermarket, Salon, Electronics, Fashion, Service, Wholesale) with detailed interactive modal exploration.
5. **Core Features**: 9 Platform Modules (POS, Inventory, CRM, Website Builder, Online Ordering, Customer Management, Finance Dashboard, Reports & Analytics, AI Assistant).
6. **AI Features Section**: 8 AI Engines (Sales Prediction, Inventory Forecast, Business Reports, Marketing Suggestions, Customer Insights, Product Recommendations, Website Content, Business Health).
7. **Product Screenshots**: Interactive tabbed screen tour (Executive Dashboard, POS Screen, Inventory Screen, CRM Screen, Website Builder Screen, Mobile App Preview).
8. **Subscription Packages**: Package 1 – Professional and Package 2 – Enterprise with interactive Super Admin Package Request Form (Business Owner Name, Business Email, Business Type selection).
9. **Pricing Section**: Monthly & Annual billing toggle with 20% savings badge, deep side-by-side feature comparison table, Request Now, and Contact Sales.
10. **Testimonials**: 6 Customer Reviews, Ratings, Avatars, and Verified Success Metrics.
11. **FAQ**: Expandable / collapsible accordion covering general onboarding, hardware compatibility, offline mode, multi-branch scaling, and security.
12. **Contact Us**: Interactive contact form (Name, Business Name, Email, Phone Number, Message, Submit Button) and HQ information cards.
13. **Footer**: Company background, module links, industry links, resources, documentation, privacy policy, terms, social links, and copyright.
