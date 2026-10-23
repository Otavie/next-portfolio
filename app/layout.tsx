// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Layout Components
import Navbar from "../components/layout/Navbar";
import ThemeProvider from "../components/layout/ThemeProvider";
import PageFooter from "../components/layout/PageFooter";

// =======================================================
// FONT CONFIGURATION
// =======================================================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// =======================================================
// WEBSITE INFORMATION
// =======================================================

const siteName = "Otavie Okuoyo";

const siteURL = "https://otavie.online";

const siteTitle =
  "Otavie Okuoyo | AI Researcher & Software Engineer";

const siteDescription =
  "Explore the work of Otavie Okuoyo, a software engineer, lecturer, and AI researcher focused on modern web development, artificial intelligence, and African language technologies.";

// =======================================================
// SEO METADATA
// =======================================================

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),

  applicationName: siteName,

  // Website Title
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  // Website Description
  description: siteDescription,

  // Author Information
  authors: [
    {
      name: siteName,
      url: "/about",
    },
  ],

  creator: siteName,

  category: "Technology, Research and Education",

  // Search Engine Indexing
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // =====================================================
  // OPEN GRAPH METADATA
  // =====================================================

  openGraph: {
    title: siteTitle,
    description: siteDescription,

    url: siteURL,
    siteName: siteName,
    locale: "en_NG",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },

  // =====================================================
  // TWITTER / X METADATA
  // =====================================================

  twitter: {
    card: "summary_large_image",

    title: siteTitle,
    description: siteDescription,

    creator: "@oLoveOtavie",

    images: ["/og-image.png"],
  },
};

// =======================================================
// VIEWPORT CONFIGURATION
// =======================================================

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

// =======================================================
// ROOT LAYOUT
// =======================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-dvh w-full flex-col overflow-x-clip bg-background font-sans text-foreground antialiased">

        <ThemeProvider>

          {/* Shared Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main
            id="main-content"
            className="min-w-0 w-full flex-1"
          >
            {children}
          </main>

          {/* Footer on internal pages */}
          <PageFooter />

        </ThemeProvider>

      </body>
    </html>
  );
}