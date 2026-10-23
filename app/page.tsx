import type { Metadata } from "next";
import Hero from "../components/home/Hero";

// ==========================================
// HOME PAGE SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: {
    absolute:
      "Otavie Okuoyo | Software Engineer & AI Researcher",
  },

  description:
    "Explore the portfolio of Otavie Okuoyo, a software engineer, lecturer, and AI researcher focused on modern web development and Human Language Technology.",

  alternates: {
    canonical: "/",
  },
};

// ==========================================
// HOME PAGE
// ==========================================

export default function HomePage() {
  return <Hero />;
}