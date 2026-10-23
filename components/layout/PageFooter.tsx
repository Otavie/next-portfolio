"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function PageFooter() {
  const pathname = usePathname();

  // No footer on the full-screen homepage
  if (pathname === "/") {
    return null;
  }

  // Footer appears on all internal pages
  return <Footer />;
}