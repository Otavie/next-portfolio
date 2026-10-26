
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

// ==============================================
// TYPES AND STATIC ROUTES
// ==============================================

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return { title: `${project.title} | Otavie Okuoyo`, description: project.description };
}

// ==============================================
// PROJECT DETAILS PAGE
// ==============================================

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const Icon = project.icon;
  const relatedProjects = projects.filter((item) => item.category === project.category && item.slug !== project.slug).slice(0, 3);
  const sectionTitle = project.category === "AI & Research" ? "Research Focus" : project.category === "Teaching" ? "Topics Covered" : "Key Features";

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b1020] dark:text-white">

      {/* Background Decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-[110px] dark:bg-blue-600/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-0 h-[350px] w-[350px] rounded-full bg-cyan-300/20 blur-[110px] dark:bg-cyan-600/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

        {/* Back Button */}
        <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300">
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* ==============================================
            PROJECT INTRODUCTION
        ============================================== */}

        <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Project Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-[#111b31]">

            {project.image ? (
              <Image src={project.image} alt={`Screenshot of ${project.title}`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
            ) : (
              <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-200 bg-white/80 text-blue-600 shadow-lg dark:border-cyan-400/20 dark:bg-[#0b1020]/80 dark:text-cyan-400">
                  <Icon size={56} strokeWidth={1.5} />
                </div>
              </div>
            )}

          </div>

          {/* Project Information */}
          <div>

            {/* Category and Status */}
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400">{project.category}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-[#111b31] dark:text-slate-300">{project.status}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">{project.title}</h1>

            {/* Detailed Description */}
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">{project.overview}</p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
                  Live Demo <ExternalLink size={17} />
                </a>
              )}

              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-500 dark:border-slate-600 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400">
                  <GitBranch size={17} /> GitHub Repo
                </a>
              )}

              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-500 dark:border-slate-600 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400">
                Get in Touch <ArrowUpRight size={17} />
              </Link>

            </div>
          </div>

        </section>

        {/* ==============================================
            TECHNOLOGIES USED
        ============================================== */}

        <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-700/60 dark:bg-[#111b31] dark:shadow-none">

          <div className="mb-6 flex items-center gap-3">
            <Layers3 size={23} className="text-blue-600 dark:text-cyan-400" />
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">Technologies Used</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">{technology}</span>
            ))}
          </div>

        </section>

        {/* ==============================================
            KEY FEATURES
        ============================================== */}

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-700/60 dark:bg-[#111b31] dark:shadow-none">

          <h2 className="mb-7 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{sectionTitle}</h2>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-blue-600 dark:text-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

        </section>

        {/* ==============================================
            RELATED PROJECTS
        ============================================== */}

        {relatedProjects.length > 0 && (
          <section className="mt-16">

            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Related Projects</h2>
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                View All Projects <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {relatedProjects.map((item) => (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-slate-700/60 dark:bg-[#111b31] dark:hover:border-cyan-500/50">

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">{item.category}</p>
                  <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400">View More <ArrowRight size={16} /></span>

                </Link>
              ))}

            </div>
          </section>
        )}

      </div>
    </main>
  );
}
