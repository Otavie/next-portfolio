// components/layout/Footer.tsx

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

// ==========================================
// FOOTER NAVIGATION LINKS
// ==========================================

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

// ==========================================
// FOOTER COMPONENT
// ==========================================

export default function Footer() {
    const currentYear = 2026;

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-[#080E1C] dark:text-slate-300">

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">

        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Website Brand */}
          <div>
            <Link
              href="/"
              className="font-mono text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="text-blue-600 dark:text-cyan-400">
                &lt;
              </span>

              Otavie

              <span className="text-blue-600 dark:text-cyan-400">
                {" />"}
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Otavie Okuoyo — Software Engineer,
              Lecturer, and AI Researcher passionate
              about technology, research, and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Collaboration */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Let&#389;s Connect
            </h3>

            <p className="mb-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Interested in software development,
              artificial intelligence, or research
              collaboration? Let&#389;s connect.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 dark:text-cyan-400"
            >
              Get in Touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">

          {/* Copyright */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Otavie Okuoyo.
            All rights reserved.
          </p>

          {/* Technology */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built with Next.js & Tailwind CSS
          </p>

          {/* Back to Top */}
          <a
            href="#main-content"
            aria-label="Back to top of main content"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400"
          >
            Back to Top
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}