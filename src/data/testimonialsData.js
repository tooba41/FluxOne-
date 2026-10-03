export const testimonialsData = {
  badge: 'Customer Success & Trust',
  title: 'Trusted by Industry Leaders',
  subtitle:
    'Explore verified enterprise case studies and see how FluxOne transforms businesses across retail, dining, pharmacy, and services.',
  stats: [
    { metric: '4.9 ★', label: 'Average Rating', subtext: 'Based on 800+ reviews' },
    { metric: '2,500+', label: 'Customers Served', subtext: 'Across 18 countries' },
    { metric: '30+', label: 'Industries Supported', subtext: 'Specialized workflows' },
    { metric: '$250M+', label: 'Transactions Processed', subtext: '100% uptime sync' },
  ],
  testimonials: [
    {
      id: 'test-1',
      name: 'Tariq Al-Mansoor',
      role: 'Managing Director',
      company: 'Apex Retail Group',
      industry: 'Multi-Branch Fashion & Apparel',
      rating: 5,
      avatarInitials: 'TA',
      avatarBg: 'bg-purple-100 text-[#8E238F]',
      successMetric: '+42% Multi-Branch Revenue',
      quote:
        'FluxOne changed the game for our 14 retail branches. We used to spend 3 hours every evening reconciling cashiers and stock. With FluxOne, everything updates live in the central dashboard, and the AI stockout forecast saved us over $40,000 in lost seasonal sales in our very first quarter.',
      location: 'Dubai & Riyadh',
      challenge:
        'Reconciling end-of-day cash and stock across 14 fragmented retail locations caused 3+ hours of nightly admin delay and significant inventory shrink.',
      solution:
        'Implemented FluxOne Multi-Branch Cloud Sync and AI Demand Forecasting with instant lane settlement and centralized HQ oversight.',
      results: [
        { label: 'Revenue Expansion', value: '+42%', iconName: 'TrendingUp', color: 'text-emerald-600' },
        { label: 'Time Saved / Day', value: '3.4 hrs', iconName: 'Clock', color: 'text-purple-600' },
        { label: 'Seasonal Waste Drop', value: '-85%', iconName: 'TrendingDown', color: 'text-rose-600' },
        { label: 'Inventory Accuracy', value: '99.8%', iconName: 'CheckCircle2', color: 'text-teal-600' },
      ],
    },
    {
      id: 'test-2',
      name: 'Elena Rostova',
      role: 'Executive Chef & Owner',
      company: 'Bistro Gourmet Chain',
      industry: 'Fine Dining & Quick Service',
      rating: 5,
      avatarInitials: 'ER',
      avatarBg: 'bg-amber-100 text-amber-800',
      successMetric: 'Zero Table-to-Kitchen Lag',
      quote:
        'The restaurant table map and kitchen display integration are flawless. Waiters take orders on handheld tablets, and the kitchen gets tickets in under a second. Recipe-level inventory deduction gives us the exact food cost per dish in real time—our waste dropped by 28%.',
      location: 'London & Manchester',
      challenge:
        'Paper ticket delays between dining room and kitchen resulted in order mix-ups, slow table turnover, and uncontrolled ingredient food wastage.',
      solution:
        'Deployed FluxOne Kitchen Display System (KDS), tablet POS ordering, and automatic recipe-level ingredient cost deduction.',
      results: [
        { label: 'Order-to-Kitchen Lag', value: '< 1 sec', iconName: 'Zap', color: 'text-amber-600' },
        { label: 'Table Turnover Rate', value: '+35%', iconName: 'TrendingUp', color: 'text-emerald-600' },
        { label: 'Food Waste Reduction', value: '-28%', iconName: 'TrendingDown', color: 'text-teal-600' },
        { label: 'Recipe Margin Control', value: '100%', iconName: 'CheckCircle2', color: 'text-purple-600' },
      ],
    },
    {
      id: 'test-3',
      name: 'Dr. Harris Vance',
      role: 'Chief Pharmacist',
      company: 'PharmaCare Network',
      industry: 'Healthcare & Retail Pharmacy',
      rating: 5,
      avatarInitials: 'HV',
      avatarBg: 'bg-emerald-100 text-emerald-800',
      successMetric: '100% Expiry Compliance',
      quote:
        'In our pharmacy network, regulatory compliance and expiration tracking are critical. FluxOne’s batch tracking and FEFO dispatch warnings prevented expired stock issues completely. The speed at the checkout counter is unbeatable even with prescription barcodes.',
      location: 'Toronto & Vancouver',
      challenge:
        'Manual medicine batch expiration logs risked regulatory compliance non-conformities and slow prescription checkout processing.',
      solution:
        'Adopted FluxOne Automated FEFO Batch Tracking with optical barcode scanner integration and regulatory compliance audit trail.',
      results: [
        { label: 'Expiry Compliance', value: '100%', iconName: 'ShieldCheck', color: 'text-emerald-600' },
        { label: 'Checkout Duration', value: '< 15s', iconName: 'Zap', color: 'text-blue-600' },
        { label: 'Audit Preparation', value: '0 hrs', iconName: 'Clock', color: 'text-teal-600' },
        { label: 'Prescription Accuracy', value: '99.9%', iconName: 'CheckCircle2', color: 'text-purple-600' },
      ],
    },
    {
      id: 'test-4',
      name: 'Sarah Jenkins',
      role: 'Founder & CEO',
      company: 'Moda Luxe Boutiques',
      industry: 'Omnichannel Fashion',
      rating: 5,
      avatarInitials: 'SJ',
      avatarBg: 'bg-pink-100 text-pink-800',
      successMetric: '+65% Online Sales Sync',
      quote:
        'Connecting our physical boutique counters with our online store was a nightmare before FluxOne. The no-code website builder synced our entire catalog in minutes. When a dress sells in-store, online stock drops instantly—no more accidental overselling.',
      location: 'New York & Miami',
      challenge:
        'Disconnected in-store physical inventories and online e-commerce platforms caused frequent double-selling and manual catalog maintenance.',
      solution:
        'Unified store POS counters with the FluxOne Omnichannel Store Builder, real-time shared matrix variants, and automated stock holds.',
      results: [
        { label: 'Online Sales Sync', value: '+65%', iconName: 'TrendingUp', color: 'text-purple-600' },
        { label: 'Double-Sell Incidents', value: '0', iconName: 'ShieldCheck', color: 'text-emerald-600' },
        { label: 'Catalog Sync Speed', value: 'Instant', iconName: 'Zap', color: 'text-teal-600' },
        { label: 'Multi-Variant SKUs', value: '12,000+', iconName: 'Layers', color: 'text-blue-600' },
      ],
    },
    {
      id: 'test-5',
      name: 'Malik Khan',
      role: 'Operations Head',
      company: 'Grand HyperMart Superstores',
      industry: 'Supermarket & Groceries',
      rating: 5,
      avatarInitials: 'MK',
      avatarBg: 'bg-blue-100 text-blue-800',
      successMetric: '30,000+ SKUs Synchronized',
      quote:
        'Processing thousands of supermarket shoppers daily requires immense stability. FluxOne never stalls or freezes during peak weekend rush hours. The multi-lane scale integration and volume discount rules handle our peak traffic effortlessly.',
      location: 'Singapore & Kuala Lumpur',
      challenge:
        'High cashier lane traffic jams during peak weekend rushes with laggy barcoded scale lookups and uncoordinated multi-buy discount rules.',
      solution:
        'Deployed FluxOne Ultra-High Throughput POS lanes with offline caching fallback, weighing scale protocols, and tiered promotions engine.',
      results: [
        { label: 'Synchronized SKUs', value: '30,000+', iconName: 'Layers', color: 'text-blue-600' },
        { label: 'Peak Cashier Uptime', value: '100%', iconName: 'ShieldCheck', color: 'text-emerald-600' },
        { label: 'Lane Queue Reduction', value: '-45%', iconName: 'TrendingDown', color: 'text-rose-600' },
        { label: 'Discrepancy Rate', value: '< 0.01%', iconName: 'CheckCircle2', color: 'text-teal-600' },
      ],
    },
    {
      id: 'test-6',
      name: 'Claire Dupont',
      role: 'Managing Partner',
      company: 'Velvet Salon & Day Spa',
      industry: 'Beauty, Wellness & Salon',
      rating: 5,
      avatarInitials: 'CD',
      avatarBg: 'bg-fuchsia-100 text-fuchsia-800',
      successMetric: '96% Client Rebooking Rate',
      quote:
        'Our stylists love how easy it is to manage client treatment notes, commission splits, and automated WhatsApp appointment reminders. It eliminated no-shows and made our front desk look ultra-modern and professional.',
      location: 'Paris & Lyon',
      challenge:
        'High appointment no-show rates and tedious manual commission distribution among 20+ specialized therapists and stylists.',
      solution:
        'Implemented FluxOne Automated WhatsApp reminders, visual chair booking calendar, and real-time commission split calculation.',
      results: [
        { label: 'Client Rebooking', value: '96%', iconName: 'TrendingUp', color: 'text-fuchsia-600' },
        { label: 'Appointment No-Shows', value: '-80%', iconName: 'TrendingDown', color: 'text-emerald-600' },
        { label: 'Commission Run Time', value: '< 2 mins', iconName: 'Clock', color: 'text-purple-600' },
        { label: 'Client Retention', value: '94%', iconName: 'Users', color: 'text-teal-600' },
      ],
    },
  ],
}

export default testimonialsData
