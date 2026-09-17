import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// 1. Mobile Viewport Configuration
export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// 2. Comprehensive Search Engine & Social Media Meta Tags
export const metadata: Metadata = {
  metadataBase: new URL("https://mtenterprise.com"), // Replace with your live domain once purchased
  title: {
    default: "MT Enterprise | Expert Chiller, AC & Refrigerator Repair Kuala Lumpur",
    template: "%s | MT Enterprise",
  },
  description:
    "Industrial chiller repair, commercial walk-in freezers, precision AC overhaul, and heavy washing machine repair in Kuala Lumpur & Klang Valley. 24/7 Emergency Dispatch: +60 17-302 7306.",
  keywords: [
    "chiller repair kuala lumpur",
    "commercial refrigeration repair KL",
    "air conditioner repair kuala lumpur",
    "washing machine repair kuala lumpur",
    "walk in freezer repair malaysia",
    "cold room repair klang valley",
    "industrial HVAC contractor KL",
    "emergency chiller maintenance",
    "MT Enterprise repair",
  ],
  authors: [{ name: "MT Enterprise" }],
  creator: "MT Enterprise",
  publisher: "MT Enterprise",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // WhatsApp, Facebook & LinkedIn Link Preview Card
  openGraph: {
    title: "MT Enterprise | Precision Chiller & Cooling Systems Repair KL",
    description:
      "Industrial & commercial cooling repairs in Kuala Lumpur. Over 20+ years of technical experience. 24/7 on-site emergency dispatch.",
    url: "https://mtenterprise.com",
    siteName: "MT Enterprise",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "MT Enterprise Industrial Chiller & AC Repair in Kuala Lumpur",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  // Twitter / X Preview Card
  twitter: {
    card: "summary_large_image",
    title: "MT Enterprise | Chiller & Fridge Repair Kuala Lumpur",
    description:
      "Commercial chillers, walk-in freezers, AC systems & washing machine repairs. Direct call / WhatsApp: +60 17-302 7306.",
    images: ["/images/hero-1.png"],
  },
};

// 3. Schema.org JSON-LD Structured Data for Google Maps & Local Search
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "MT Enterprise",
  image: "https://mtenterprise.com/images/hero-1.png",
  "@id": "https://mtenterprise.com",
  url: "https://mtenterprise.com",
  telephone: "+60173027306",
  email: "aisulamin32@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kuala Lumpur Central",
    addressLocality: "Kuala Lumpur",
    addressRegion: "Wilayah Persekutuan",
    postalCode: "50000",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 3.139,
    longitude: 101.6869,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Kuala Lumpur" },
    { "@type": "City", name: "Petaling Jaya" },
    { "@type": "City", name: "Shah Alam" },
    { "@type": "City", name: "Subang Jaya" },
    { "@type": "City", name: "Cheras" },
    { "@type": "AdministrativeArea", name: "Klang Valley" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Repair & Overhaul Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Chiller & Industrial Freezer Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Conditioning Repair & Overhaul",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Refrigerator Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Washing Machine & Laundry Systems Repair",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "186",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Structured Data (JSON-LD) for Local Ranking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />

        {/* 
          GOOGLE ADS / GOOGLE TAG MANAGER INJECTION 
          Replace 'AW-XXXXXXXXXX' with your Google Ads Tag ID once you create a campaign.
        */}
        {/*
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');
          `}
        </Script>
        */}
      </head>
      <body className="antialiased selection:bg-[#ea580c] selection:text-white">
        {children}
      </body>
    </html>
  );
}