import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// =======================================================
// FONT CONFIGURATION
// =======================================================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =======================================================
// WEBSITE INFORMATION
// =======================================================

const siteName = "Otavie Okuoyo";

const siteURL = "https://otavie.online";

const siteTitle = "Otavie Okuoyo | AI Researcher | Software Engineer";

const siteDescription =
  "Explore the work of Otavie Loveday Okuoyo, a software engineer, lecturer and AI researcher focused on modern web development and African language technologies.";

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

  category: "AI Researcher, Software Engineer, Lecturer, Education",

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

  // ======================================================
  // OPEN GRAPH METADATA
  // ======================================================
  
openGraph: {
  title: siteTitle,
  description: siteDescription,
  
  siteName: siteName,
  locale: "en_US",
  type: "website",
  
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: siteTitle, 
    }
  ]
},

  // ======================================================
  // TWITTER METADATA
  // ======================================================

  twitter: {
    card: "summary_large_image",

    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@oLoveOtavie",
  },
}
// ======================================================
// VIEWPORT CONFIGURATION
// ======================================================

export const viewport: Viewport = {
  themeColor: "#0B1120",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}