
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Globe2,
  Layers3,
  MessageSquareText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// ==============================================
// TYPES
// ==============================================

type ProjectCategory =
  | "AI & Research"
  | "Web Development"
  | "Teaching";

type ProjectFilter = "All Projects" | ProjectCategory;

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  status: string;
  icon: LucideIcon;
  gradient: string;
  liveUrl?: string;
}

// ==============================================
// PROJECT DATA
// ==============================================

const projects: Project[] = [
  {
    id: 1,
    title: "Speech and Language Technologies for Izon",
    category: "AI & Research",
    description:
      "Ongoing doctoral research on developing automatic speech recognition, machine translation, speech translation, and text-to-speech technologies for Izon using multilingual pretrained models and parameter-efficient adaptation.",
    technologies: [
      "Speech AI",
      "NLP",
      "ASR",
      "Machine Translation",
      "PEFT",
    ],
    status: "Ongoing Research",
    icon: AudioLines,
    gradient:
      "from-blue-100 via-cyan-50 to-white dark:from-blue-600/25 dark:via-cyan-500/10 dark:to-transparent",
  },
  {
    id: 2,
    title: "Parameter-Efficient Adaptation for Low-Resource Languages",
    category: "AI & Research",
    description:
      "Research investigating efficient adaptation strategies, including LoRA and AdaLoRA, for multilingual pretrained speech and language models under limited data and computational resources.",
    technologies: [
      "LoRA",
      "AdaLoRA",
      "PyTorch",
      "Multilingual AI",
    ],
    status: "Research in Progress",
    icon: BrainCircuit,
    gradient:
      "from-violet-100 via-blue-50 to-white dark:from-violet-600/25 dark:via-blue-500/10 dark:to-transparent",
  },
  {
    id: 3,
    title: "Conversational Intent Detection for Nigerian Languages",
    category: "AI & Research",
    description:
      "A proposed study exploring data-efficient intent detection in Hausa, Igbo, and Yoruba using multilingual language models and parameter-efficient fine-tuning.",
    technologies: [
      "Intent Detection",
      "AfroXLMR",
      "Hausa",
      "Igbo",
      "Yoruba",
    ],
    status: "Proposed Research",
    icon: MessageSquareText,
    gradient:
      "from-cyan-100 via-teal-50 to-white dark:from-cyan-600/25 dark:via-teal-500/10 dark:to-transparent",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "A modern, responsive personal portfolio built to showcase my software engineering work, academic research, teaching experience, and professional activities.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    status: "Live Website",
    icon: Globe2,
    gradient:
      "from-blue-100 via-indigo-50 to-white dark:from-blue-600/25 dark:via-indigo-500/10 dark:to-transparent",
    liveUrl: "https://otavie-portfolio.vercel.app",
  },
  {
    id: 5,
    title: "Java Database Programming Examples",
    category: "Teaching",
    description:
      "Practical educational examples demonstrating Java database connectivity, SQL operations, prepared statements, and relational database programming using JDBC and MySQL.",
    technologies: [
      "Java",
      "JDBC",
      "MySQL",
      "Maven",
    ],
    status: "Teaching Resource",
    icon: Database,
    gradient:
      "from-amber-100 via-orange-50 to-white dark:from-amber-500/20 dark:via-orange-500/10 dark:to-transparent",
  },
  {
    id: 6,
    title: "Internet Programming Laboratory Exercises",
    category: "Teaching",
    description:
      "Structured hands-on programming exercises introducing web development concepts, responsive design, and practical implementation using HTML, CSS, and JavaScript.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    status: "Teaching Resource",
    icon: BookOpen,
    gradient:
      "from-emerald-100 via-teal-50 to-white dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent",
  },
];

// ==============================================
// FILTERS
// ==============================================

const filters: ProjectFilter[] = [
  "All Projects",
  "AI & Research",
  "Web Development",
  "Teaching",
];

// ==============================================
// PROJECT CARD
// ==============================================

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const Icon = project.icon;

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden
        rounded-2xl border border-slate-200
        bg-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-500/50
        hover:shadow-xl
        dark:border-slate-700/60
        dark:bg-[#111b31]
        dark:shadow-none
        dark:hover:shadow-blue-950/30
      "
    >
      {/* Project Visual */}
      <div
        className={`
          relative flex h-44 items-center
          justify-center overflow-hidden
          bg-gradient-to-br ${project.gradient}
        `}
      >
        {/* Background Decorations */}
        <div
          className="
            absolute -right-12 -top-16
            h-48 w-48 rounded-full
            border border-blue-200/50
            dark:border-white/10
          "
        />

        <div
          className="
            absolute -bottom-20 -left-12
            h-52 w-52 rounded-full
            border border-blue-200/50
            dark:border-white/10
          "
        />

        {/* Project Icon */}
        <div
          className="
            relative z-10 flex h-20 w-20
            items-center justify-center
            rounded-2xl
            border border-blue-200
            bg-white/80 text-blue-600
            shadow-lg
            transition-transform duration-300
            group-hover:scale-110
            dark:border-cyan-400/20
            dark:bg-[#0b1020]/80
            dark:text-cyan-400
          "
        >
          <Icon size={38} strokeWidth={1.7} />
        </div>

        {/* Status Badge */}
        <span
          className="
            absolute right-4 top-4
            rounded-full
            border border-slate-200
            bg-white/90 px-3 py-1.5
            text-[11px] font-medium
            text-slate-700
            dark:border-white/10
            dark:bg-[#0b1020]/80
            dark:text-slate-200
          "
        >
          {project.status}
        </span>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">

        {/* Category */}
        <p
          className="
            mb-3 text-xs font-semibold
            uppercase tracking-[0.16em]
            text-blue-600
            dark:text-cyan-400
          "
        >
          {project.category}
        </p>

        {/* Title */}
        <h3
          className="
            mb-4 text-xl font-bold
            leading-snug text-slate-900
            dark:text-white
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mb-6 text-sm leading-7
            text-slate-600
            dark:text-slate-400
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border border-slate-200
                bg-slate-100 px-3 py-1.5
                text-xs text-slate-700
                dark:border-slate-700/70
                dark:bg-slate-800/70
                dark:text-slate-300
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Card Footer */}
        <div
          className="
            mt-auto flex items-center
            justify-between gap-3
            border-t border-slate-200
            pt-5
            dark:border-slate-700/60
          "
        >
          <span
            className="
              inline-flex items-center gap-2
              text-xs text-slate-500
              dark:text-slate-400
            "
          >
            <span
              className="
                h-2 w-2 rounded-full
                bg-blue-500
                dark:bg-cyan-400
              "
            />
            {project.status}
          </span>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-sm font-semibold
                text-blue-600
                transition-colors
                hover:text-blue-700
                dark:text-cyan-400
                dark:hover:text-cyan-300
              "
            >
              Live Demo
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span
              className="
                text-xs font-medium
                text-slate-500
                dark:text-slate-400
              "
            >
              {project.category === "AI & Research"
                ? "Research Project"
                : "Educational Material"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// ==============================================
// PROJECTS PAGE
// ==============================================

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <main
      className="
        relative w-full overflow-hidden
        bg-slate-50 text-slate-900
        transition-colors duration-300
        dark:bg-[#0b1020] dark:text-white
      "
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-0 top-0
          h-[450px] w-[450px]
          rounded-full
          bg-blue-300/20
          blur-[120px]
          dark:bg-blue-600/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-0
          h-[350px] w-[350px]
          rounded-full
          bg-cyan-300/20
          blur-[120px]
          dark:bg-cyan-600/10
        "
      />

      <div
        className="
          relative z-10 mx-auto
          w-full max-w-7xl
          px-5 py-14
          sm:px-8 sm:py-20
          lg:px-10
        "
      >
        {/* =====================================
            PAGE HEADER
        ===================================== */}

        <header className="mb-14 text-center">

          {/* Header Badge */}
          <div
            className="
              mb-6 inline-flex
              items-center gap-2
              rounded-full
              border border-blue-200
              bg-blue-50 px-4 py-2
              text-xs font-semibold
              tracking-wide text-blue-600
              dark:border-cyan-500/30
              dark:bg-cyan-500/10
              dark:text-cyan-400
            "
          >
            <Sparkles size={15} />
            MY PORTFOLIO
          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl font-extrabold
              tracking-tight text-slate-900
              sm:text-5xl lg:text-6xl
              dark:text-white
            "
          >
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600 via-cyan-500 to-teal-500
                bg-clip-text text-transparent
                dark:from-blue-500
                dark:via-cyan-400
                dark:to-teal-400
              "
            >
              Projects
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto mt-6
              max-w-3xl
              text-base leading-8
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Explore my work across software
            engineering, artificial intelligence,
            human language technology, and education.
            These projects reflect my interests in
            developing practical digital solutions
            and advancing intelligent technologies
            for African languages.
          </p>
        </header>

        {/* =====================================
            FILTER BUTTONS
        ===================================== */}

        <div
          className="
            mb-12 flex flex-wrap
            items-center justify-center gap-3
          "
        >
          {filters.map((filter) => {
            const isActive =
              activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  setActiveFilter(filter)
                }
                aria-pressed={isActive}
                className={`
                  rounded-lg px-5 py-3
                  text-sm font-medium
                  transition-all duration-200
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-blue-500
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-[#111b31] dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* =====================================
            PROJECT COUNT
        ===================================== */}

        <div
          className="
            mb-7 flex flex-wrap
            items-center justify-between
            gap-3
          "
        >
          <div className="flex items-center gap-3">
            <Layers3
              size={19}
              className="
                text-blue-600
                dark:text-cyan-400
              "
            />

            <h2
              className="
                text-lg font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {activeFilter === "All Projects"
                ? "All Projects"
                : activeFilter}
            </h2>
          </div>

          <span
            className="
              text-sm text-slate-500
              dark:text-slate-400
            "
          >
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? "project"
              : "projects"}
          </span>
        </div>

        {/* =====================================
            PROJECT GRID
        ===================================== */}

        <div
          className="
            grid grid-cols-1 gap-6
            md:grid-cols-2 lg:gap-8
          "
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* =====================================
            COLLABORATION SECTION
        ===================================== */}

        <section
          className="
            relative mt-20
            overflow-hidden rounded-3xl
            border border-slate-200
            bg-white
            px-6 py-12 text-center
            shadow-sm
            sm:px-12 sm:py-16
            dark:border-slate-700/60
            dark:bg-[#111b31]
            dark:shadow-none
          "
        >
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-72 w-72
              -translate-x-1/2
              rounded-full
              bg-blue-300/20
              blur-[100px]
              dark:bg-blue-600/10
            "
          />

          <div className="relative z-10">

            {/* Icon */}
            <div
              className="
                mx-auto mb-6 flex
                h-16 w-16
                items-center justify-center
                rounded-2xl
                bg-blue-100 text-blue-600
                dark:bg-blue-500/15
                dark:text-cyan-400
              "
            >
              <Code2 size={30} />
            </div>

            {/* Heading */}
            <h2
              className="
                text-2xl font-bold
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              Interested in Working Together?
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto mt-5
                max-w-2xl
                text-base leading-8
                text-slate-600
                dark:text-slate-400
              "
            >
              I am open to meaningful collaborations
              in artificial intelligence, human
              language technology, academic research,
              and software development.
            </p>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="
                mt-8 inline-flex
                items-center justify-center
                gap-3 rounded-xl
                bg-blue-600
                px-7 py-4
                text-sm font-semibold
                text-white
                shadow-lg shadow-blue-600/20
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-blue-500
              "
            >
              Let&#39;s Collaborate
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
