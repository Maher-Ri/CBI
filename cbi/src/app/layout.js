import { getGlobalData } from "./utils/getGlobalData ";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getImageUrl } from "./utils/getImageUrl";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // creates a CSS variable
});

// If Strapi dies, the site uses this so it doesn't crash.
const FALLBACK_DATA = {
  navbar: {
    logo: {
      url: "/assets/logo.svg",
      alternativeText: "CBI Logo",
    },
    links: [
      {
        id: 1,
        label: "ACCUEIL",
        url: "/",
        isExternal: false,
      },
      {
        id: 2,
        label: "À PROPOS",
        url: "/about",
        isExternal: false,
      },
      {
        id: 3,
        label: "SERVICES",
        url: "/services",
        isExternal: false,
      },
      {
        id: 4,
        label: "PROJETS",
        url: "/PROJETS",
        isExternal: false,
      },
      {
        id: 5,
        label: "CARRIERES",
        url: "/carrieres",
        isExternal: false,
      },
    ],
    contact: {
      id: 1,
      url: "/contact",
      isExternal: false,
      icon: {
        url: "/assets/contact-us.svg",
        alternativeText: "contact us icon",
      },
    },
  },
  footer: {
    copyright: "Copyright 2024 CBI. All Rights Reserved",
    logo: {
      url: "/assets/logo.svg",
      alternativeText: "CBI Logo",
    },
    info: {
      id: 1,
      email: "info@cbi.com",
      phone: "+1 600 123 456 789",
      address: "30 Division, New York NY 1000, USA\n",
    },
    primaryLinks: [
      {
        id: 6,
        label: "ACCUEIL",
        url: "/",
        isExternal: false,
      },
      {
        id: 7,
        label: "À PROPOS",
        url: "/about",
        isExternal: false,
      },
      {
        id: 8,
        label: "SERVICES",
        url: "/services",
        isExternal: false,
      },
      {
        id: 9,
        label: "PROJETS",
        url: "/PROJETS",
        isExternal: false,
      },
      {
        id: 10,
        label: "CARRIERS",
        url: "/carrieres",
        isExternal: false,
      },
    ],
    secondaryLinks: [
      {
        id: 11,
        label: "CONTACT US",
        url: "/CONTACT",
        isExternal: false,
      },
      {
        id: 12,
        label: "TERMS & CONDITIONS",
        url: "/TERMS -CONDITIONS",
        isExternal: false,
      },
    ],
  },
};

// 1. SEO (Metadata)
export async function generateMetadata() {
  const data = await getGlobalData();
  const seoData = data?.seo;

  // Safety check
  if (!data) {
    return {
      // 1. Base URL (Fixes "localhost" issues for OG images)
      metadataBase: new URL("http://localhost:3000"),
      title: "CBI | Best Services",
      description: "The best agency for web development and design.",
      keywords: "cbi, agency, web development, design, services",
      icons: {
        icon: "/favicon.ico",
      },
      robots: { index: false, follow: false }, // Don't index if API is broken
      alternates: { canonical: "/" },
    };
  }

  return {
    // 1. Base URL
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
    ),

    // 2. Title Template & Default Meta
    // Using optional chaining (?.) in case data is empty or malformed
    title: seoData?.title,
    description: seoData?.description,
    keywords: seoData?.keywords,

    // 3. Open Graph Defaults
    openGraph: {
      siteName: seoData?.siteName,
      locale: seoData?.ogLocale,
      type: "website",
      title: seoData?.ogTitle,
      description: seoData?.ogDescription,
      url: seoData?.canonicalUrl,
      images: [
        {
          url: getImageUrl(seoData?.image?.url),
          width: 1200,
          height: 630,
        },
      ],
    },

    // 4. Twitter Defaults
    twitter: {
      card: "summary_large_image",
      site: seoData?.siteName,
      title: seoData?.ogTitle,
      description: seoData?.ogDescription,
      images: [
        {
          url: getImageUrl(seoData?.image?.url),
          width: 1200,
          height: 630,
        },
      ],
    },

    // 5. Icons
    icons: {
      icon: getImageUrl(seoData?.favicon?.url),
    },

    // 6. Robots
    robots: {
      index: seoData?.robots,
      follow: seoData?.robots,
      nocache: false,
      googleBot: {
        index: seoData?.robots,
        follow: seoData?.robots,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // 7. Canonical URL
    alternates: { canonical: seoData?.canonicalUrl },
  };
}

export default async function RootLayout({ children }) {
  const data = await getGlobalData();

  // If data exists, use it. If null, use FALLBACK.
  const navData = data?.navbar || FALLBACK_DATA.navbar;
  const footerData = data?.footer || FALLBACK_DATA.footer;

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-mainBlue`}>
        <Navbar data={navData} />
        <main>
          <Toaster position="top-right" richColors />
          {children}
        </main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
