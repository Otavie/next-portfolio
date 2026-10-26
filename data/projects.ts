import { AudioLines, BrainCircuit, MessageSquareText, Globe2, Database, BookOpen, Monitor, IdCard, Bot, Terminal, Users, CloudSun, type LucideIcon } from "lucide-react";

export type ProjectCategory = "AI & Research" | "Web Development" | "Teaching";
export type ProjectFilter = "All Projects" | ProjectCategory;

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  status: string;
  icon: LucideIcon;
  gradient: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectFilters: ProjectFilter[] = ["All Projects", "AI & Research", "Web Development", "Teaching"];

// All copy, screenshots, features, and external links are maintained here.
// Add liveUrl/githubUrl only when you have confirmed the exact working URLs.
export const projects: Project[] = [
  {
    id: 1,
    slug: "speech-and-language-technologies-for-izon",
    title: "Speech and Language Technologies for Izon",
    category: "AI & Research",
    description: "Ongoing doctoral research on automatic speech recognition, machine translation, speech translation, and text-to-speech for Izon using multilingual pretrained models and parameter-efficient adaptation.",
    overview: "This doctoral research explores a unified approach to developing speech and language technologies for Izon, an underrepresented African language. It investigates multilingual pretrained models, parameter-efficient adaptation, and cross-modal learning for several related tasks, with particular attention to data scarcity and dialect generalisation.",
    highlights: ["Automatic speech recognition and speech translation", "Machine translation and text-to-speech synthesis", "Parameter-efficient fine-tuning using LoRA and AdaLoRA", "Cross-modal learning and cross-dialect evaluation"],
    technologies: ["Speech AI", "NLP", "ASR", "Machine Translation", "PEFT"],
    status: "Ongoing Research",
    icon: AudioLines,
    gradient: "from-blue-100 via-cyan-50 to-white dark:from-blue-600/25 dark:via-cyan-500/10 dark:to-transparent",
  },
  {
    id: 2,
    slug: "parameter-efficient-adaptation-for-low-resource-languages",
    title: "Parameter-Efficient Adaptation for Low-Resource Languages",
    category: "AI & Research",
    description: "Research investigating LoRA and AdaLoRA to adapt multilingual speech and language models with limited data and computational resources.",
    overview: "This research component examines how parameter-efficient fine-tuning can adapt large pretrained speech and language models to low-resource settings. The focus is on comparing LoRA and AdaLoRA while tracking model performance and training efficiency.",
    highlights: ["Comparison of LoRA and AdaLoRA", "Efficient multilingual model adaptation", "Low-resource speech and language evaluation", "Analysis of trainable parameters and computational cost"],
    technologies: ["LoRA", "AdaLoRA", "PyTorch", "Multilingual AI"],
    status: "Research in Progress",
    icon: BrainCircuit,
    gradient: "from-violet-100 via-blue-50 to-white dark:from-violet-600/25 dark:via-blue-500/10 dark:to-transparent",
  },
  {
    id: 3,
    slug: "conversational-intent-detection-for-nigerian-languages",
    title: "Conversational Intent Detection for Nigerian Languages",
    category: "AI & Research",
    description: "A proposed study of data-efficient intent detection in Hausa, Igbo, and Yoruba using multilingual models and parameter-efficient fine-tuning.",
    overview: "This proposed study explores how much labelled data is needed to adapt a multilingual model for conversational intent classification in Hausa, Igbo, and Yoruba. Planned experiments examine data scaling, efficiency, and per-language classification performance.",
    highlights: ["Intent classification for Hausa, Igbo, and Yoruba", "Nested training-data subsets", "Parameter-efficient adaptation of AfroXLMR", "Evaluation with macro-F1 and per-intent F1"],
    technologies: ["Intent Detection", "AfroXLMR", "Hausa", "Igbo", "Yoruba"],
    status: "Proposed Research",
    icon: MessageSquareText,
    gradient: "from-cyan-100 via-teal-50 to-white dark:from-cyan-600/25 dark:via-teal-500/10 dark:to-transparent",
  },
  {
    id: 4,
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "A modern, responsive website presenting software engineering projects, academic research, teaching experience, and professional activities.",
    overview: "This current personal portfolio brings together software engineering work, African NLP research, teaching, and professional experience. It is built with Next.js and TypeScript, uses Tailwind CSS for responsive styling, and supports light and dark themes.",
    highlights: ["Responsive navigation and page layouts", "Light and dark theme support", "Filterable project catalogue", "Individual project detail pages"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Live Website",
    icon: Globe2,
    gradient: "from-blue-100 via-indigo-50 to-white dark:from-blue-600/25 dark:via-indigo-500/10 dark:to-transparent",
    liveUrl: "https://otavie-portfolio.vercel.app",
  },
  {
    id: 5,
    slug: "java-database-programming-examples",
    title: "Java Database Programming Examples",
    category: "Teaching",
    description: "Practical examples of Java database connectivity, SQL operations, prepared statements, and relational database programming using JDBC and MySQL.",
    overview: "This teaching resource introduces database-driven Java programming through worked examples. Students learn to establish JDBC connections, execute SQL commands, process query results, and work with relational databases using Maven and MySQL.",
    highlights: ["JDBC connections and drivers", "SELECT, INSERT, UPDATE, and DELETE operations", "PreparedStatement and ResultSet examples", "Database transactions and exception handling"],
    technologies: ["Java", "JDBC", "MySQL", "Maven"],
    status: "Teaching Resource",
    icon: Database,
    gradient: "from-amber-100 via-orange-50 to-white dark:from-amber-500/20 dark:via-orange-500/10 dark:to-transparent",
  },
  {
    id: 6,
    slug: "internet-programming-laboratory-exercises",
    title: "Internet Programming Laboratory Exercises",
    category: "Teaching",
    description: "Hands-on laboratory exercises covering HTML, CSS, JavaScript, responsive design, and practical web development.",
    overview: "These laboratory exercises help students progress from basic HTML page creation to styled, interactive, and responsive websites. Activities emphasize writing code, testing it in a browser, and submitting evidence of the output.",
    highlights: ["HTML structure, forms, and semantic elements", "CSS layouts with Flexbox and Grid", "JavaScript interaction and DOM fundamentals", "Responsive design and practical assessments"],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    status: "Teaching Resource",
    icon: BookOpen,
    gradient: "from-emerald-100 via-teal-50 to-white dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent",
  },
  // Additional web development projects from the supplied screenshots.
  {
    id: 7,
    slug: "portfolio-site",
    title: "Portfolio Site",
    category: "Web Development",
    description: "An earlier personal portfolio presenting selected web projects through a distinctive dark visual design and animated interface.",
    overview: "This earlier portfolio website showcases a personal introduction and selected web development work. The reference screenshot shows a distinctive black-and-red interface, stylised typography, project navigation, and links to portfolio sections.",
    highlights: ["Personal introduction and project showcase", "Navigation to projects and contact information", "Custom dark visual identity", "GSAP included in the frontend technology stack"],
    technologies: ["HTML", "SCSS", "JavaScript", "GSAP"],
    status: "Portfolio Project",
    icon: Monitor,
    image: "/images/projects/portfolio-site.png",
    gradient: "from-slate-200 via-slate-100 to-white dark:from-slate-700/40 dark:via-slate-800/20 dark:to-transparent",
  },
  {
    id: 8,
    slug: "student-photocard-collection",
    title: "Student Photocard Collection",
    category: "Web Development",
    description: "A student profile gallery displaying photographs, names, professional roles, and social links in a card-based interface.",
    overview: "The Student Photocard Collection is a web application for presenting student profiles in an organised, card-based interface. The supplied screenshots show profile photographs, student names, technology roles, social links, and a mobile-friendly view. The original project description also identifies Node.js, EJS, Bootstrap, and MongoDB in its stack.",
    highlights: ["Student cards with photographs, names, and roles", "Social and portfolio links on profile cards", "Responsive layouts demonstrated in desktop and mobile screenshots", "Original project presentation mentions user authentication"],
    technologies: ["HTML", "SCSS", "Node.js", "EJS", "Bootstrap", "MongoDB", "Font Awesome"],
    status: "Web Application",
    icon: IdCard,
    image: "/images/projects/student-photocard-collection.png",
    gradient: "from-blue-100 via-cyan-50 to-white dark:from-blue-600/20 dark:via-cyan-600/10 dark:to-transparent",
  },
  {
    id: 9,
    slug: "chatbot-model-in-live-environment",
    title: "Chatbot Model in Live Environment",
    category: "Web Development",
    description: "A web-based conversational interface combining a floating chat widget with a Python/Flask backend stack.",
    overview: "This project presents a chatbot through a compact interface embedded in a webpage. The supplied screenshot displays an interactive conversation area with messages, a text input, and a send action. The listed development stack combines frontend web technologies with Python and Flask.",
    highlights: ["Floating conversational widget", "Chat messages displayed in a threaded interface", "Message input and send control", "Python and Flask included in the project stack"],
    technologies: ["HTML5", "SCSS/CSS3", "JavaScript", "Python", "Flask"],
    status: "Web Application",
    icon: Bot,
    image: "/images/projects/chatbot-live-environment.png",
    gradient: "from-blue-100 via-indigo-50 to-white dark:from-indigo-600/20 dark:via-blue-600/10 dark:to-transparent",
  },
  {
    id: 10,
    slug: "cli-dictionary",
    title: "CLI Dictionary",
    category: "Web Development",
    description: "A searchable reference interface for looking up command-line terms, descriptions, and usage examples.",
    overview: "CLI Dictionary is a browser-based command reference tool. The screenshot shows a search field for commands, a results panel describing a command, a usage section, category tabs, and a visible theme toggle. The project uses HTML, CSS, JavaScript, and JSON.",
    highlights: ["Search input for CLI commands", "Definitions and command-usage examples", "Category navigation for command families", "Visible light/dark theme control"],
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    status: "Web Tool",
    icon: Terminal,
    image: "/images/projects/cli-dictionary.png",
    gradient: "from-orange-100 via-red-50 to-white dark:from-orange-600/20 dark:via-red-600/10 dark:to-transparent",
  },
  {
    id: 11,
    slug: "hebron-startup-lab",
    title: "Hebron Startup Lab",
    category: "Web Development",
    description: "An alumni and startup showcase featuring profile panels, category navigation, and visual transitions.",
    overview: "The Hebron Startup Lab website screenshot features an HSL Alumni section with portraits, profile information, navigation tabs, and previous/next controls. The supplied project card lists HTML, SCSS, JavaScript, and GSAP as the frontend technology stack.",
    highlights: ["Alumni showcase with photos and profile details", "Carousel-style previous/next navigation", "Section tabs for exploring content", "GSAP included in the animation stack"],
    technologies: ["HTML", "SCSS", "JavaScript", "GSAP"],
    status: "Web Project",
    icon: Users,
    image: "/images/projects/hebron-startup-lab.png",
    gradient: "from-pink-100 via-fuchsia-50 to-white dark:from-pink-600/20 dark:via-purple-600/10 dark:to-transparent",
  },
  {
    id: 12,
    slug: "weather-app",
    title: "Weather App",
    category: "Web Development",
    description: "A weather information interface displaying a city, temperature, conditions, humidity, and visibility.",
    overview: "Weather App provides a city-focused weather display in a dark visual interface. The reference screenshot shows a location field, a Locate button, temperature, city name, weather condition, humidity, and visibility. The project card identifies HTML, CSS, JavaScript, and JSON as its technologies.",
    highlights: ["Location search field and Locate button", "Temperature and city display", "Weather conditions, humidity, and visibility", "Dark-themed weather information panel"],
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    status: "Web Project",
    icon: CloudSun,
    image: "/images/projects/weather-app.png",
    gradient: "from-sky-100 via-blue-50 to-white dark:from-blue-600/20 dark:via-slate-600/20 dark:to-transparent",
  }
];

// ==============================================
// GET A PROJECT BY ITS SLUG
// ==============================================

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}