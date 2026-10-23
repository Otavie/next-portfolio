import {
  AudioLines,
  BrainCircuit,
  MessageSquareText,
  Globe2,
  Database,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

// ==============================================
// PROJECT TYPES
// ==============================================

export type ProjectCategory = | "AI & Research" | "Web Development" | "Teaching";

export type ProjectFilter = | "All Projects" | ProjectCategory;

export interface Project {
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
// PROJECT FILTER CATEGORIES
// ==============================================

export const projectFilters: ProjectFilter[] = ["All Projects", "AI & Research", "Web Development", "Teaching"];

// ==============================================
// ALL PROJECTS
// ==============================================

export const projects: Project[] = [

  {
    id: 1,
    title: "Speech and Language Technologies for Izon",
    category: "AI & Research",
    description: "Ongoing doctoral research on developing automatic speech recognition, machine translation, speech translation, and text-to-speech technologies for Izon using multilingual pretrained models and parameter-efficient adaptation.",
    technologies: ["Speech AI", "NLP", "ASR", "Machine Translation", "PEFT",],
    status: "Ongoing Research",
    icon: AudioLines,
    gradient: "from-blue-100 via-cyan-50 to-white dark:from-blue-600/25 dark:via-cyan-500/10 dark:to-transparent",
  },

  {
    id: 2,
    title: "Parameter-Efficient Adaptation for Low-Resource Languages",
    category: "AI & Research",
    description: "Research investigating efficient adaptation strategies, including LoRA and AdaLoRA, for multilingual pretrained speech and language models under limited data and computational resources.",
    technologies: ["LoRA", "AdaLoRA", "PyTorch", "Multilingual AI",],
    status: "Research in Progress",
    icon: BrainCircuit,
    gradient: "from-violet-100 via-blue-50 to-white dark:from-violet-600/25 dark:via-blue-500/10 dark:to-transparent",
  },

  // ============================================
  // PROJECT 3: CONVERSATIONAL INTENT DETECTION
  // ============================================

  {
    id: 3,
    title: "Conversational Intent Detection for Nigerian Languages",
    category: "AI & Research",
    description: "A proposed study exploring data-efficient intent detection in Hausa, Igbo, and Yoruba using multilingual language models and parameter-efficient fine-tuning.",
    technologies: ["Intent Detection", "AfroXLMR", "Hausa", "Igbo", "Yoruba",],
    status: "Proposed Research",
    icon: MessageSquareText,
    gradient: "from-cyan-100 via-teal-50 to-white dark:from-cyan-600/25 dark:via-teal-500/10 dark:to-transparent",
  },

  // ============================================
  // PROJECT 4: PERSONAL PORTFOLIO
  // ============================================

  {
    id: 4,
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "A modern, responsive personal portfolio built to showcase my software engineering work, academic research, teaching experience, and professional activities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel",],
    status: "Live Website",
    icon: Globe2,
    gradient: "from-blue-100 via-indigo-50 to-white dark:from-blue-600/25 dark:via-indigo-500/10 dark:to-transparent",
    liveUrl: "https://otavie-portfolio.vercel.app",
  },

  // ============================================
  // PROJECT 5: JAVA DATABASE PROGRAMMING
  // ============================================

  {
    id: 5,
    title: "Java Database Programming Examples",
    category: "Teaching",
    description: "Practical educational examples demonstrating Java database connectivity, SQL operations, prepared statements, and relational database programming using JDBC and MySQL.",
    technologies: ["Java", "MySQL", "JDBC", "Maven",],
    status: "Teaching Resource",
    icon: Database,
    gradient: "from-amber-100 via-orange-50 to-white dark:from-amber-500/20 dark:via-orange-500/10 dark:to-transparent",
  },

  // ============================================
  // PROJECT 6: INTERNET PROGRAMMING
  // ============================================

  {
    id: 6,
    title: "Internet Programming Laboratory Exercises",
    category: "Teaching",
    description: "Structured hands-on programming exercises introducing web development concepts, responsive design, and practical implementation using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design",],
    status: "Teaching Resource",
    icon: BookOpen,
    gradient: "from-emerald-100 via-teal-50 to-white dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent",
  },

  {
    id: 7,
    title: "Student Management System",
    category: "Web Development",
    description: "A web application for managing student records and academic information.",
    technologies: ["Next.js", "TypeScript", "MySQL",],
    status: "In Development",
    icon: Database,
    gradient: "from-blue-100 to-white dark:from-blue-600/25 dark:to-transparent",
    },
];