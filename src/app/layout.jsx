import React from 'react'
import '@/styles.css'

export const metadata = {
  title: 'FluxOne - All-in-One Intelligent B2B POS & Cloud Business Operating Platform',
  description:
    'Unify point of sale, real-time multi-branch inventory, CRM, e-commerce, automated finance, and predictive AI analytics into one workspace.',
  keywords: [
    'POS',
    'Point of Sale',
    'B2B ERP',
    'Inventory Management',
    'Multi-Branch POS',
    'AI Retail Assistant',
    'Restaurant POS',
    'Pharmacy POS',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
