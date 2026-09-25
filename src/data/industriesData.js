export const industriesData = {
  badge: 'Tailored Industry Solutions',
  title: 'Built to Power Every Retail, Dining & Service Sector',
  subtitle:
    'No two industries operate the same way. FluxOne provides specialized configurations, workflows, and terminology tailored directly to your operational model.',
  industries: [
    {
      id: 'retail',
      name: 'Retail Store',
      tagline: 'Modern checkout, barcode matrix & smart inventory replenishment',
      iconName: 'ShoppingBag',
      color: '#8E238F',
      description:
        'Fast barcode scanning, stock variations (size, color, brand), supplier tracking, and customer loyalty programs for boutique and multi-counter retail.',
      highlights: [
        'Lightning-fast barcode & QR scanner checkout',
        'Multi-variant product catalog management',
        'Automatic low-stock supplier reordering',
        'Customer purchase history and points balance',
      ],
      details: {
        summary: 'Designed for boutique retailers, gift shops, convenience stores, and department stores needing rapid inventory turns and fast barcode transactions.',
        posFeatures: ['Thermal receipt printing', 'Cash drawer & barcode scanner integration', 'Multi-currency payment handling'],
        inventoryFeatures: ['SKU & barcode auto-generator', 'Stock transfer between branches', 'Supplier re-order triggers'],
      },
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      tagline: 'Table layout, kitchen display system (KDS) & recipe costing',
      iconName: 'UtensilsCrossed',
      color: '#E11D48',
      description:
        'Seamless floor management, table reservations, KDS order routing, split bill calculation, recipe cost tracking, and waiter tablet ordering.',
      highlights: [
        'Interactive visual table floor map & status',
        'Kitchen Display System (KDS) ticket routing',
        'Modifier management (toppings, spice levels)',
        'Recipe-based ingredient inventory deduction',
      ],
      details: {
        summary: 'Ideal for fine dining, casual eateries, bistros, and restaurant chains requiring smooth coordination between waiters, kitchen, and cashier.',
        posFeatures: ['Split bill by item or person', 'Tip calculation and server shift reporting', 'Dine-in, takeaway, & delivery separation'],
        inventoryFeatures: ['Raw ingredients batch deduction', 'Waste and spoilage tracking', 'Supplier delivery verification'],
      },
    },
    {
      id: 'cafe',
      name: 'Café',
      tagline: 'Rapid drink queueing, customer loyalty & combo pricing',
      iconName: 'Coffee',
      color: '#D97706',
      description:
        'Quick-tap order modifiers (milk substitutes, syrups, sizes), loyalty drink cards, peak-hour rush mode, and digital customer display.',
      highlights: [
        'Quick-modifier selector for milk & syrup choices',
        'Pre-paid customer digital wallet & stamps',
        'Rush-hour speed checkout mode',
        'Peak hours performance analytics',
      ],
      details: {
        summary: 'Engineered for coffee shops, bakeries, juice bars, and quick-service cafes handling hundreds of morning transactions with zero lag.',
        posFeatures: ['Quick-tap product grid', 'Customer facing display support', 'Direct contactless NFC payment'],
        inventoryFeatures: ['Coffee bean & milk stock tracking', 'Daily freshness countdowns', 'Automated restock alerts'],
      },
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      tagline: 'Prescription logs, batch tracking & expiry date surveillance',
      iconName: 'Pill',
      color: '#059669',
      description:
        'Automated expiration tracking, batch/lot management, doctor prescription archive, dosage instructions, and regulatory compliance logs.',
      highlights: [
        'Batch number and expiry date surveillance',
        'Prescription digital archiving & doctor records',
        'First-Expire First-Out (FEFO) stock dispatch',
        'Controlled drug dispensing audit trail',
      ],
      details: {
        summary: 'Fully compliant pharmaceutical POS and inventory management safeguarding patient safety with rigorous batch monitoring.',
        posFeatures: ['Prescription lookup by patient ID', 'Dosage note printing on receipts', 'Insurance co-pay logging'],
        inventoryFeatures: ['FEFO inventory priority allocation', 'Expiration alert dashboard', 'Supplier drug recall management'],
      },
    },
    {
      id: 'supermarket',
      name: 'Supermarket',
      tagline: 'High-speed multi-lane lanes, scale sync & bulk inventory',
      iconName: 'Store',
      color: '#2563EB',
      description:
        'Multi-lane cashier synchronization, electronic scale integration, wholesale volume discounts, promotional bundles, and bulk product imports.',
      highlights: [
        'Certified electronic weighing scale connectivity',
        'Dynamic multi-tier bulk pricing & bundles',
        'Unlimited product catalog with rapid fuzzy search',
        'Offline cashier lane continuity',
      ],
      details: {
        summary: 'Built for grocery stores, hypermarkets, and mini-marts processing tens of thousands of SKUs and heavy continuous shopper traffic.',
        posFeatures: ['Weigh-scale barcode reading', 'Multi-lane lane master sync', 'Price override supervisor authorization'],
        inventoryFeatures: ['Fast bulk CSV/Excel product imports', 'Pallet & carton quantity conversion', 'Shrinkage monitoring'],
      },
    },
    {
      id: 'salon',
      name: 'Salon',
      tagline: 'Appointment scheduler, stylist commissions & package credits',
      iconName: 'Sparkles',
      color: '#DB2777',
      description:
        'Visual appointment booking calendar, staff commission splits, service packages, client beauty preferences, and automated SMS reminders.',
      highlights: [
        'Multi-staff visual appointment calendar',
        'Automatic commission calculation on services & products',
        'Client profile with past treatments & formulas',
        'Service bundle and gift voucher redemption',
      ],
      details: {
        summary: 'Tailored for hair salons, nail studios, barbershops, and luxury day spas seeking seamless client bookings and commission tracking.',
        posFeatures: ['Combined service & product checkout', 'Stylist commission assignment', 'Tip distribution report'],
        inventoryFeatures: ['Backbar consumption vs retail shelf tracking', 'Salon chemical supply alerts', 'Brand supplier catalog sync'],
      },
    },
    {
      id: 'electronics',
      name: 'Electronics Store',
      tagline: 'Serial / IMEI tracking, warranty tracking & repair tickets',
      iconName: 'Tv',
      color: '#4F46E5',
      description:
        'Individual unit serial number tracking, warranty period management, after-sales repair ticketing, and trade-in valuation.',
      highlights: [
        'Unique serial/IMEI tracking per sold item',
        'Automated warranty certificate printing',
        'Device repair status tracking & customer SMS',
        'Trade-in and refurbished item management',
      ],
      details: {
        summary: 'Specialized for smartphone shops, computer stores, appliance dealers, and repair centers managing serial numbers and warranty claims.',
        posFeatures: ['Serial scan validation on sale', 'Warranty card generation', 'Deposit and repair quote billing'],
        inventoryFeatures: ['Serial history and returns trail', 'Supplier RMA claim workflow', 'Spare parts component tracking'],
      },
    },
    {
      id: 'fashion',
      name: 'Fashion Store',
      tagline: 'Matrix grid (Size/Color/Fit), seasonal sales & lookbooks',
      iconName: 'Shirt',
      color: '#9333EA',
      description:
        'Multi-dimensional matrix for sizes, colors, and cuts. Create seasonal sales, track brand performance, and synchronize boutique web storefronts.',
      highlights: [
        'Matrix variant grid for instant size/color lookup',
        'Seasonal catalog transitions & markdown engine',
        'Integrated boutique online storefront sync',
        'VIP customer fitting preference tags',
      ],
      details: {
        summary: 'Ideal for clothing boutiques, shoe stores, luxury fashion houses, and apparel chains seeking stylish presentation and matrix control.',
        posFeatures: ['Instant variant switcher on POS screen', 'Fitting room hold carts', 'Discount rules for seasonal clearance'],
        inventoryFeatures: ['Color & size matrix bulk stock adjustments', 'Warehouse to store transfers', 'Slow-moving style alerts'],
      },
    },
    {
      id: 'service',
      name: 'Service Business',
      tagline: 'Job ticketing, billable hours, estimates & invoices',
      iconName: 'Wrench',
      color: '#0D9488',
      description:
        'Manage service jobs, client work orders, technician dispatch, quote-to-invoice pipeline, recurring contracts, and milestone payments.',
      highlights: [
        'Quote-to-Invoice one-click conversion',
        'Job ticket workflow with technician assignment',
        'Milestone billing & retainer tracking',
        'Automated payment follow-ups & reminders',
      ],
      details: {
        summary: 'Designed for consulting firms, maintenance providers, HVAC, auto-repair, cleaning services, and agencies managing billable workflows.',
        posFeatures: ['Custom line item quotes', 'Digital signature capture on invoice', 'Advance deposit collection'],
        inventoryFeatures: ['Consumables & tools allocation', 'Service kit bundling', 'Job-specific expense tracking'],
      },
    },
    {
      id: 'wholesale',
      name: 'Wholesale Business',
      tagline: 'Tiered client pricing, debtor ledger, credit terms & dispatch',
      iconName: 'Truck',
      color: '#EA580C',
      description:
        'Custom customer pricing tiers, debtor accounts with credit limits, bulk purchase orders, packing slip generation, and multi-warehouse dispatch.',
      highlights: [
        'Custom price tier matrix per distributor/client',
        'Customer credit limits & aging invoice reports',
        'Multi-warehouse batch packing & dispatch notes',
        'Sales representative mobile order booking',
      ],
      details: {
        summary: 'Heavy-duty B2B wholesale distribution platform handling pallet orders, multi-step credit approval, and bulk freight dispatches.',
        posFeatures: ['B2B tax invoicing with VAT/GST', 'Credit term terms (Net 30/60)', 'Partial payment & ledger settlement'],
        inventoryFeatures: ['Multi-warehouse dispatch routing', 'Container & carton stock breakdown', 'Back-order reservation engine'],
      },
    },
  ],
}
