
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Languages,
  Mic2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full overflow-hidden
        bg-slate-50 text-slate-900
        transition-colors duration-300
        dark:bg-[#0b1020] dark:text-white
        lg:min-h-[calc(100dvh-84px)]
      "
    >
      {/* ====================================
          BACKGROUND DECORATIONS
      ==================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-0 top-0 h-[600px] w-[600px]
          rounded-full bg-blue-300/20
          blur-[120px]
          dark:bg-blue-600/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-32 -left-32
          h-[400px] w-[400px]
          rounded-full bg-cyan-300/20
          blur-[120px]
          dark:bg-cyan-600/10
        "
      />

      {/* ====================================
          MAIN HERO CONTAINER
      ==================================== */}

      <div
        className="
          relative z-10 mx-auto grid
          w-full max-w-7xl
          grid-cols-1 items-center
          gap-12 px-5 py-12
          sm:px-8 sm:py-16
          lg:grid-cols-2 lg:gap-14
          lg:px-7 lg:py-12
        "
      >
        {/* ====================================
            LEFT SECTION - INTRODUCTION
        ==================================== */}

        <div
          className="
            order-1 flex w-full min-w-0
            flex-col items-center text-center
            lg:items-start lg:text-left
          "
        >
          {/* Professional Badge */}
          <div
            className="
              mb-7 inline-flex items-center
              gap-2 rounded-full
              border border-blue-200
              bg-blue-50 px-4 py-2
              text-[11px] font-semibold
              tracking-wide text-blue-600
              sm:text-xs
              dark:border-cyan-500/30
              dark:bg-cyan-500/10
              dark:text-cyan-400
            "
          >
            <Sparkles size={15} />
            SOFTWARE ENGINEER · AI RESEARCHER
          </div>

          {/* Main Heading */}
          <h1
            className="
              max-w-2xl
              text-4xl font-extrabold
              leading-[1.12] tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-[58px]
              dark:text-white
            "
          >
            Hello, I&apos;m

            <span
              className="
                mt-3 block
                bg-gradient-to-r
                from-blue-600 via-cyan-600 to-teal-600
                bg-clip-text text-transparent
                dark:from-blue-500
                dark:via-cyan-400
                dark:to-teal-400
              "
            >
              Otavie Okuoyo.
            </span>
          </h1>

          {/* Professional Tagline */}
          <h2
            className="
              mt-7 text-xl font-semibold
              leading-snug text-slate-700
              sm:text-2xl
              dark:text-slate-200
            "
          >
            Building software.

            <span className="block">
              Advancing language technology.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7 max-w-lg
              text-base leading-8
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            I&apos;m a software engineer, lecturer, and
            PhD researcher passionate about building
            modern digital solutions and advancing
            artificial intelligence for African languages.
          </p>

          {/* ====================================
              ACTION BUTTONS
          ==================================== */}

          <div
            className="
              mt-9 flex w-full
              flex-wrap justify-center gap-4
              sm:w-auto
              lg:justify-start
            "
          >
            {/* Projects Button */}
            <Link
              href="/projects"
              className="
                inline-flex items-center justify-center
                gap-3 rounded-xl
                bg-blue-600 px-6 py-4
                text-sm font-semibold text-white
                shadow-lg shadow-blue-600/20
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-blue-500
              "
            >
              View My Projects
              <ArrowUpRight size={18} />
            </Link>

            {/* Research Button */}
            <Link
              href="/research"
              className="
                inline-flex items-center justify-center
                gap-3 rounded-xl
                border border-slate-300
                bg-white px-6 py-4
                text-sm font-semibold
                text-slate-800
                transition-all duration-300
                hover:border-blue-500
                hover:bg-blue-50
                dark:border-slate-600
                dark:bg-white/5
                dark:text-slate-100
                dark:hover:border-cyan-400
                dark:hover:bg-white/10
              "
            >
              My Research
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* ====================================
              PROFESSIONAL ROLES
          ==================================== */}

          <div
            className="
              mt-9 flex w-full
              flex-wrap justify-center
              gap-x-5 gap-y-3
              border-t border-slate-200
              pt-6 text-sm text-slate-600
              lg:justify-start
              dark:border-white/10
              dark:text-slate-400
            "
          >
            <span className="inline-flex items-center gap-2">
              <Code2
                size={16}
                className="text-blue-600 dark:text-cyan-400"
              />
              Software Engineer
            </span>

            <span className="inline-flex items-center gap-2">
              <BrainCircuit
                size={16}
                className="text-blue-600 dark:text-cyan-400"
              />
              AI Researcher
            </span>

            <span className="inline-flex items-center gap-2">
              <GraduationCap
                size={16}
                className="text-blue-600 dark:text-cyan-400"
              />
              Lecturer
            </span>
          </div>
        </div>

        {/* ====================================
            RIGHT SECTION - RESEARCH PROFILE
        ==================================== */}

        <div
          className="
            order-2 w-full min-w-0
            max-w-xl justify-self-center
            lg:max-w-none
          "
        >
          {/* Main Profile Window */}
          <div
            className="
              w-full rounded-3xl
              border border-slate-200
              bg-white/90 p-4
              shadow-xl
              transition-colors duration-300
              sm:p-7
              dark:border-slate-700/70
              dark:bg-[#111b31]/90
              dark:shadow-2xl
            "
          >
            {/* ====================================
                WINDOW HEADER
            ==================================== */}

            <div
              className="
                mb-7 flex items-center
                justify-between
              "
            >
              {/* Window Buttons */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span
                className="
                  font-mono text-xs
                  text-slate-500
                  dark:text-slate-400
                "
              >
                otavie.profile
              </span>
            </div>

            {/* ====================================
                MAIN RESEARCH CARD
            ==================================== */}

            <div
              className="
                rounded-2xl
                border border-blue-100
                bg-slate-50
                p-5 sm:p-7
                transition-colors duration-300
                dark:border-blue-500/20
                dark:bg-[#0b1020]
              "
            >
              {/* AI Icon */}
              <div
                className="
                  mb-6 flex h-14 w-14
                  items-center justify-center
                  rounded-xl
                  bg-blue-100 text-blue-600
                  dark:bg-blue-500/15
                  dark:text-cyan-400
                "
              >
                <BrainCircuit size={29} />
              </div>

              {/* Research Label */}
              <p
                className="
                  mb-4 text-xs font-bold
                  uppercase tracking-[0.2em]
                  text-blue-600
                  dark:text-cyan-400
                "
              >
                Research Focus
              </p>

              {/* Research Title */}
              <h3
                className="
                  text-xl font-bold leading-tight
                  text-slate-900
                  sm:text-2xl
                  dark:text-white
                "
              >
                AI for African Languages
              </h3>

              {/* Research Description */}
              <p
                className="
                  mt-5 text-sm leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Advancing intelligent speech and
                language technologies through
                multilingual models and
                parameter-efficient adaptation.
              </p>

              {/* ====================================
                  RESEARCH TECHNOLOGY TAGS
              ==================================== */}

              <div className="mt-6 flex flex-wrap gap-2">

                {/* Software Engineering */}
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-slate-200
                    bg-white px-3 py-2
                    text-xs text-slate-700
                    dark:border-slate-700
                    dark:bg-white/10
                    dark:text-slate-300
                  "
                >
                  <Code2 size={14} />
                  Software Engineering
                </span>

                {/* AI */}
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-slate-200
                    bg-white px-3 py-2
                    text-xs text-slate-700
                    dark:border-slate-700
                    dark:bg-white/10
                    dark:text-slate-300
                  "
                >
                  <BrainCircuit size={14} />
                  Artificial Intelligence
                </span>

                {/* HLT */}
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-slate-200
                    bg-white px-3 py-2
                    text-xs text-slate-700
                    dark:border-slate-700
                    dark:bg-white/10
                    dark:text-slate-300
                  "
                >
                  <Languages size={14} />
                  Human Language Technology
                </span>
              </div>
            </div>

            {/* ====================================
                RESEARCH & DEVELOPMENT CARDS
            ==================================== */}

            <div
              className="
                mt-5 grid grid-cols-1 gap-4
                sm:grid-cols-2
              "
            >
              {/* Research Card */}
              <div
                className="
                  rounded-xl
                  border border-slate-200
                  bg-slate-100 p-5
                  transition-all duration-300
                  hover:border-blue-400
                  dark:border-slate-600/60
                  dark:bg-slate-700/40
                  dark:hover:border-cyan-500/50
                "
              >
                <Mic2
                  size={24}
                  className="
                    mb-5 text-blue-600
                    dark:text-cyan-400
                  "
                />

                <h4
                  className="
                    text-base font-semibold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Research
                </h4>

                <p
                  className="
                    mt-2 text-xs leading-5
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  AI &amp; Human Language Technology
                </p>
              </div>

              {/* Development Card */}
              <div
                className="
                  rounded-xl
                  border border-slate-200
                  bg-slate-100 p-5
                  transition-all duration-300
                  hover:border-blue-400
                  dark:border-slate-600/60
                  dark:bg-slate-700/40
                  dark:hover:border-cyan-500/50
                "
              >
                <Code2
                  size={24}
                  className="
                    mb-5 text-blue-600
                    dark:text-cyan-400
                  "
                />

                <h4
                  className="
                    text-base font-semibold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Development
                </h4>

                <p
                  className="
                    mt-2 text-xs leading-5
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Modern Software &amp; Web Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
