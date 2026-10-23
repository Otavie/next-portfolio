import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Mic2,
  Languages,
  Sparkles,
} from "lucide-react";

// ==========================================
// PROFESSIONAL AREAS
// ==========================================

const expertise = [
  {
    label: "Software Engineering",
    icon: Code2,
  },
  {
    label: "Artificial Intelligence",
    icon: BrainCircuit,
  },
  {
    label: "Human Language Technology",
    icon: Languages,
  },
];

// ==========================================
// HOME HERO COMPONENT
// ==========================================

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-5rem)] w-full items-center overflow-hidden bg-[#F8FAFC] transition-colors duration-300 dark:bg-[#0B1120]">

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-600/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10"
      />

      {/* Main Hero Container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-14">

        {/* ===================================
            LEFT: INTRODUCTION
        =================================== */}

        <div className="relative z-10">

          {/* Professional Label */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-300">

            <Sparkles
              size={15}
              className="shrink-0"
            />

            SOFTWARE ENGINEER · AI RESEARCHER
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">

            Hello, I&#39;m

            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300">
              Otavie Okuoyo.
            </span>
          </h1>

          {/* Professional Headline */}
          <h2 className="mt-6 max-w-xl text-xl font-semibold leading-snug text-slate-700 sm:text-2xl dark:text-slate-200">
            Building software.
            <span className="block">
              Advancing language technology.
            </span>
          </h2>

          {/* Brief Introduction */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            I&#39;m a software engineer, lecturer, and PhD
            researcher passionate about building modern
            digital solutions and advancing artificial
            intelligence for African languages.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-blue-500 hover:text-blue-600 dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              My Research
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Professional Roles */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm font-medium text-slate-600 dark:border-white/10 dark:text-slate-400">

            <span className="inline-flex items-center gap-2">
              <Code2
                size={18}
                className="text-blue-600 dark:text-cyan-400"
              />
              Software Engineer
            </span>

            <span className="inline-flex items-center gap-2">
              <BrainCircuit
                size={18}
                className="text-blue-600 dark:text-cyan-400"
              />
              AI Researcher
            </span>

            <span className="inline-flex items-center gap-2">
              <GraduationCap
                size={18}
                className="text-blue-600 dark:text-cyan-400"
              />
              Lecturer
            </span>
          </div>
        </div>

        {/* ===================================
            RIGHT: PROFESSIONAL PROFILE CARD
            Visible on desktop screens
        =================================== */}

        <div className="relative hidden w-full lg:block">

          {/* Card Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-400/15 via-transparent to-cyan-400/15 blur-2xl dark:from-blue-600/20 dark:to-cyan-500/20"
          />

          {/* Main Profile Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-7 shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#111C32]/90 dark:shadow-black/20">

            {/* Top Label */}
            <div className="mb-8 flex items-center justify-between">

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                otavie.profile
              </span>
            </div>

            {/* Research Feature */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-7 dark:border-blue-400/15 dark:bg-[#0B1120]">

              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/15 dark:text-cyan-400">
                <BrainCircuit size={30} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-cyan-400">
                Research Focus
              </p>

              <h3 className="text-2xl font-bold leading-snug text-slate-900 dark:text-white">
                AI for African Languages
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Advancing intelligent speech and language
                technologies through multilingual models
                and parameter-efficient adaptation.
              </p>

              {/* Expertise Tags */}
              <div className="mt-6 flex flex-wrap gap-2">

                {expertise.map((item) => {
                  const Icon = item.icon;

                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      <Icon size={14} />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="mt-5 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">

                <Mic2
                  size={24}
                  className="mb-4 text-blue-600 dark:text-cyan-400"
                />

                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Research
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  AI & Human Language Technology
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">

                <Code2
                  size={24}
                  className="mb-4 text-blue-600 dark:text-cyan-400"
                />

                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Development
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  Modern Software & Web Solutions
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 border-t border-slate-200 pt-5 font-mono text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
              <span className="mr-2 text-green-600 dark:text-green-400">
                $
              </span>
              Research. Build. Teach.
              <span className="ml-1 text-cyan-500">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}