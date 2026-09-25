export const faqData = {
  badge: 'Answers & Guidance',
  title: 'Frequently Asked Questions',
  subtitle:
    'Everything you need to know about getting started, hardware setup, multi-branch scaling, and FluxOne AI capabilities.',
  categories: [
    {
      category: 'General & Getting Started',
      faqs: [
        {
          question: 'What is FluxOne and who is it designed for?',
          answer:
            'FluxOne is a unified cloud-native B2B business management and Point of Sale (POS) platform. It is engineered for retail stores, restaurants, cafes, pharmacies, supermarkets, salons, electronics shops, fashion boutiques, service businesses, and wholesale distributors seeking to manage sales, stock, CRM, accounting, and AI analytics in one workspace.',
        },
        {
          question: 'How quickly can my business go live with FluxOne?',
          answer:
            'Most businesses go live within 24 to 48 hours. Our setup wizard allows you to import product catalogs, customer databases, and supplier records via CSV or Excel in minutes. Our onboarding team provides guided setup for multi-branch enterprises.',
        },
        {
          question: 'Can I use my existing POS hardware (printers, barcode scanners, cash drawers)?',
          answer:
            'Yes! FluxOne is built to work seamlessly with standard ESC/POS thermal receipt printers (USB, Bluetooth, Ethernet/WiFi), barcode/QR scanners, USB weighing scales, and standard 24V RJ11/RJ12 cash drawers. No proprietary hardware lock-in.',
        },
      ],
    },
    {
      category: 'Multi-Branch & Inventory',
      faqs: [
        {
          question: 'How does FluxOne handle multi-branch and multi-warehouse operations?',
          answer:
            'With the Enterprise package, you can add unlimited branches, physical outlets, and central warehouses. Inventory transfers, inter-branch purchase requests, centralized pricing policies, and comparative branch revenue metrics are updated in real time across the entire network.',
        },
        {
          question: 'What happens if my internet connection goes down during store hours?',
          answer:
            'FluxOne features an offline buffer engine. Cashiers can continue scanning items, taking cash payments, and printing receipts uninterrupted. As soon as connectivity is restored, all offline transactions automatically sync back to the central cloud ledger.',
        },
        {
          question: 'How does the AI Assistant forecast sales and inventory?',
          answer:
            'The AI engine continuously evaluates your historical sales trajectories, item velocity, seasonality cycles, and lead times from suppliers. It flags potential stockouts days before they happen and provides one-click Purchase Order generation.',
        },
      ],
    },
    {
      category: 'Billing, Plans & Security',
      faqs: [
        {
          question: 'How do subscription package requests work?',
          answer:
            'When you click "Request Package" on our Professional or Enterprise plans, you fill out a simple request form with your business details. This request is sent directly to the Super Admin provisioning queue, where our enterprise team activates your dedicated tenant instance.',
        },
        {
          question: 'Is my business financial and customer data secure?',
          answer:
            'Yes. We enforce 256-bit AES database encryption at rest and TLS 1.3 in transit. Every business tenant has strict data isolation, role-based user access permissions, and automated redundant daily cloud backups.',
        },
        {
          question: 'Can I upgrade from Professional to Enterprise later?',
          answer:
            'Absolutely. You can start with the Professional package for your initial store and upgrade to Enterprise seamlessly at any time without losing any transaction history, product catalogs, or customer data.',
        },
      ],
    },
  ],
}
