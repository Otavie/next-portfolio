
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
        bg-[#0b1020] text-white
        lg:min-h-[calc(100dvh-84px)]
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-0 top-0 h-[600px] w-[600px]
          rounded-full bg-blue-600/10 blur-[120px]
        "
      />

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
              border border-cyan-500/30
              bg-cyan-500/10
              px-4 py-2
              text-[11px] font-semibold
              tracking-wide text-cyan-400
              sm:text-xs
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
              sm:text-5xl
              lg:text-[58px]
            "
          >
            Hello, I&apos;m
            <span
              className="
                mt-3 block
                bg-gradient-to-r
                from-blue-500 via-cyan-400 to-teal-400
                bg-clip-text text-transparent
              "
            >
              Otavie Okuoyo.
            </span>
          </h1>

          {/* Tagline */}
          <h2
            className="
              mt-7 text-xl font-semibold
              leading-snug text-slate-200
              sm:text-2xl
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
              text-base leading-8 text-slate-400
              sm:text-lg
            "
          >
            I&apos;m a software engineer, lecturer, and
            PhD researcher passionate about building
            modern digital solutions and advancing
            artificial intelligence for African languages.
          </p>

          {/* Action Buttons */}
          <div
            className="
              mt-9 flex w-full
              flex-wrap justify-center gap-4
              sm:w-auto
              lg:justify-start
            "
          >
            <Link
              href="/projects"
              className="
                inline-flex items-center justify-center
                gap-3 rounded-xl bg-blue-600
                px-6 py-4
                text-sm font-semibold text-white
                shadow-lg shadow-blue-600/20
                transition-all duration-300
                hover:-translate-y-1 hover:bg-blue-500
              "
            >
              View My Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/research"
              className="
                inline-flex items-center justify-center
                gap-3 rounded-xl
                border border-slate-600
                bg-white/5 px-6 py-4
                text-sm font-semibold text-slate-100
                transition-all duration-300
                hover:border-cyan-400
                hover:bg-white/10
              "
            >
              My Research
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Professional Roles */}
          <div
            className="
              mt-9 flex w-full
              flex-wrap justify-center gap-x-5 gap-y-3
              border-t border-white/10
              pt-6 text-sm text-slate-400
              lg:justify-start
            "
          >
            <span className="inline-flex items-center gap-2">
              <Code2 size={16} className="text-cyan-400" />
              Software Engineer
            </span>

            <span className="inline-flex items-center gap-2">
              <BrainCircuit
                size={16}
                className="text-cyan-400"
              />
              AI Researcher
            </span>

            <span className="inline-flex items-center gap-2">
              <GraduationCap
                size={16}
                className="text-cyan-400"
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
          {/* Profile Window */}
          <div
            className="
              w-full rounded-3xl
              border border-slate-700/70
              bg-[#111b31]/90
              p-4 shadow-2xl
              sm:p-7
            "
          >
            {/* Window Header */}
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="font-mono text-xs text-slate-400">
                otavie.profile
              </span>
            </div>

            {/* Main Research Card */}
            <div
              className="
                rounded-2xl
                border border-blue-500/20
                bg-[#0b1020]
                p-5 sm:p-7
              "
            >
              {/* AI Icon */}
              <div
                className="
                  mb-6 flex h-14 w-14
                  items-center justify-center
                  rounded-xl bg-blue-500/15
                  text-cyan-400
                "
              >
                <BrainCircuit size={29} />
              </div>

              <p
                className="
                  mb-4 text-xs font-bold
                  uppercase tracking-[0.2em]
                  text-cyan-400
                "
              >
                Research Focus
              </p>

              <h3
                className="
                  text-xl font-bold
                  leading-tight text-white
                  sm:text-2xl
                "
              >
                AI for African Languages
              </h3>

              <p
                className="
                  mt-5 text-sm leading-7
                  text-slate-400
                "
              >
                Advancing intelligent speech and
                language technologies through
                multilingual models and
                parameter-efficient adaptation.
              </p>

              {/* Research Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-slate-700
                    bg-white/10 px-3 py-2
                    text-xs text-slate-300
                  "
                >
                  <Code2 size={14} />
                  Software Engineering
                </span>

                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-slate-700
                    bg-white/10 px-3 py-2
                    text-xs text-slate-300
                  "
                >
                  <BrainCircuit size={14} />
                  Artificial Intelligence
                </span>

                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-lg border border-slate-700
                    bg-white/10 px-3 py-2
                    text-xs text-slate-300
                  "
                >
                  <Languages size={14} />
                  Human Language Technology
                </span>
              </div>
            </div>

            {/* Research and Development Cards */}
            <div
              className="
                mt-5 grid grid-cols-1 gap-4
                sm:grid-cols-2
              "
            >
              {/* Research Card */}
              <div
                className="
                  rounded-xl border border-slate-600/60
                  bg-slate-700/40 p-5
                  transition-colors
                  hover:border-cyan-500/50
                "
              >
                <Mic2
                  size={24}
                  className="mb-5 text-cyan-400"
                />

                <h4 className="text-base font-semibold text-white">
                  Research
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  AI &amp; Human Language Technology
                </p>
              </div>

              {/* Development Card */}
              <div
                className="
                  rounded-xl border border-slate-600/60
                  bg-slate-700/40 p-5
                  transition-colors
                  hover:border-cyan-500/50
                "
              >
                <Code2
                  size={24}
                  className="mb-5 text-cyan-400"
                />

                <h4 className="text-base font-semibold text-white">
                  Development
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-400">
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
