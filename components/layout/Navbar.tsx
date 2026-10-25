"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

// ==========================================
// NAVIGATION LINKS
// ==========================================

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// ==========================================
// NAVBAR COMPONENT
// ==========================================

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 h-20 w-full shrink-0 border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#0B1120]/95">

      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:not-sr-only focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >

        {/* Website Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Otavie Okuoyo - Homepage"
          className="shrink-0 font-mono text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white"
        >
          <span className="text-blue-600 dark:text-cyan-400">
            &lt;
          </span>

          Otavie

          <span className="text-blue-600 dark:text-cyan-400">
            {" />"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={
                isActive(link.href) ? "page" : undefined
              }
              className={`relative py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-blue-600 dark:text-cyan-400"
                  : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400"
              }`}
            >
              {link.name}

              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600 dark:bg-cyan-400" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Theme + Contact + Menu */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 xl:inline-flex"
          >
            Let&#39;s Talk
            <ArrowUpRight size={17} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition-colors hover:bg-slate-100 lg:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/10 cursor-pointer"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-20 border-b border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden dark:border-white/10 dark:bg-[#101B30]"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                aria-current={
                  isActive(link.href) ? "page" : undefined
                }
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}