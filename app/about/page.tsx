
// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, BookOpen, BrainCircuit, Code2, GraduationCap, Languages, Mic2, Sparkles, UserRound, type LucideIcon } from "lucide-react";

// =======================================================
// PROFILE IMAGE CONFIGURATION
// =======================================================

// Change to true after adding your photograph to public/images/profile.jpg
const useRealPhoto = true;

// =======================================================
// TYPES
// =======================================================

interface Expertise {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface AwardItem {
  title: string;
  period: string;
  organization: string;
  description: string;
  icon: LucideIcon;
}

// =======================================================
// AREAS OF EXPERTISE
// =======================================================

const expertise: Expertise[] = [
  {
    title: "Software Engineering",
    description: "Designing and developing functional, responsive, scalable, and maintainable software applications using modern development technologies and software engineering principles.",
    icon: Code2,
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring machine learning, deep learning, multilingual pretrained models, and parameter-efficient adaptation techniques to develop intelligent computational solutions.",
    icon: BrainCircuit,
  },
  {
    title: "Language Technology",
    description: "Advancing human language technologies, with particular emphasis on low-resource languages that remain underrepresented in modern AI systems.",
    icon: Languages,
  },
  {
    title: "Teaching & Mentorship",
    description: "Supporting students through computer science education, practical programming instruction, software development training, and academic mentorship.",
    icon: BookOpen,
  },
];

// =======================================================
// RESEARCH INTERESTS
// =======================================================

const researchInterests: string[] = [
  "African Natural Language Processing",
  "Human Language Technology",
  "Automatic Speech Recognition",
  "Machine Translation",
  "Speech Translation",
  "Text-to-Speech Synthesis",
  "Multilingual Pretrained Models",
  "Parameter-Efficient Fine-Tuning",
  "Low-Resource Language Technology",
  "Deep Learning",
];

// =======================================================
// AWARDS AND RECOGNITION
// =======================================================

const awards: AwardItem[] = [
  {
    title: "Google PhD Fellowship (Africa)",
    period: "2025",
    organization: "Google",
    description: "Awarded the prestigious Google PhD Fellowship in recognition of doctoral research in African Natural Language Processing (African NLP), focusing on advancing speech and language technologies for underrepresented African languages through multilingual pretrained models and parameter-efficient adaptation techniques.",
    icon: Award,
  },
  {
    title: "NITDA MSc Scholarship",
    period: "2021 - 2023",
    organization: "National Information Technology Development Agency (NITDA), Nigeria",
    description: "Selected as a recipient of the competitive, merit-based National Information Technology Development Fund (NITDEF) Scholarship, which supports postgraduate education in information technology-related disciplines. The programme awards one MSc scholarship per Nigerian state and the Federal Capital Territory through a competitive selection process, recognizing academic excellence and potential in information technology.",
    icon: GraduationCap,
  },
];

// =======================================================
// REUSABLE SECTION HEADING
// =======================================================

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}

// =======================================================
// ABOUT PAGE
// =======================================================

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b1020] dark:text-white">

      {/* =======================================================
          BACKGROUND DECORATIONS
      ======================================================= */}

      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px] dark:bg-blue-600/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-300/20 blur-[120px] dark:bg-cyan-600/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">

        {/* =======================================================
            SECTION 1: INTRODUCTION
        ======================================================= */}

        <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: ABOUT CONTENT */}

          <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400">
              <Sparkles size={15} />
              GET TO KNOW ME
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              About <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent dark:from-blue-500 dark:via-cyan-400 dark:to-teal-400">Me</span>
            </h1>

            {/* Name */}
            <h2 className="mt-7 text-2xl font-bold text-slate-800 sm:text-3xl dark:text-slate-100">Otavie Okuoyo</h2>

            {/* Professional Roles */}
            <p className="mt-3 text-base font-medium text-blue-600 dark:text-cyan-400">Software Engineer · AI Researcher · Lecturer</p>

            {/* Biography */}
            <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              <p>I am a software engineer, lecturer, and PhD researcher in the Department of Computer and Information Sciences at Covenant University, Nigeria.</p>

              <p>My academic and professional interests lie at the intersection of software engineering, artificial intelligence, and human language technology, with a particular emphasis on African Natural Language Processing (African NLP).</p>

              <p>My research focuses on advancing speech and language technologies for underrepresented African languages through multilingual pretrained models and parameter-efficient adaptation techniques.</p>

              <p>Beyond research, I am passionate about developing practical software solutions, teaching computer science, mentoring students, and contributing to technological innovation through meaningful academic and industry collaborations.</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">

              <Link href="/research" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500">
                Explore My Research
                <ArrowUpRight size={17} />
              </Link>

              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-300 hover:border-blue-500 dark:border-slate-600 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400">
                Contact Me
                <ArrowRight size={17} />
              </Link>

            </div>
          </div>

          {/* =======================================================
              RIGHT: PROFILE PHOTOGRAPH
          ======================================================= */}

          <div className="order-2 flex w-full justify-center">

            <div className="relative w-full max-w-[420px]">

              {/* Decorative Glow */}
              <div aria-hidden="true" className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-teal-500/20 blur-xl" />

              {/* Profile Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-blue-100 via-slate-100 to-cyan-100 shadow-2xl dark:border-slate-700 dark:from-[#172b49] dark:via-[#111b31] dark:to-[#0b1020]">

                {useRealPhoto ? (
                  <Image src="/images/profile-dp.png" alt="Portrait of Otavie Okuoyo" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover object-center" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-5">

                    <div className="flex h-36 w-36 items-center justify-center rounded-full border border-blue-200 bg-blue-500/10 text-blue-600 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400">
                      <UserRound size={76} strokeWidth={1.2} />
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">Otavie Okuoyo</p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Software Engineer & AI Researcher</p>
                    </div>

                  </div>
                )}

              </div>

              {/* Academic Badge */}
              <div className="relative mx-auto -mt-7 flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl dark:border-slate-700 dark:bg-[#111b31]">

                <GraduationCap size={24} className="text-blue-600 dark:text-cyan-400" />

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">PhD Researcher</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Covenant University</p>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* =======================================================
            SECTION 2: WHAT I DO
        ======================================================= */}

        <section className="mt-28">

          <SectionHeading eyebrow="MY EXPERTISE" title="What I Do" description="My work combines software development, artificial intelligence, human language technology, and education to address practical and academic challenges." />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-slate-700/60 dark:bg-[#111b31] dark:hover:border-cyan-500/50">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-500/15 dark:text-cyan-400">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>

                </article>
              );
            })}

          </div>
        </section>

        {/* =======================================================
            SECTION 3: RESEARCH BACKGROUND
        ======================================================= */}

        <section className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Research Description */}
          <div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">RESEARCH & INNOVATION</p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white">
              Advancing African <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-teal-400">Language Technology</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">My doctoral research focuses on developing speech and language technologies for Izon, an underrepresented African language, using multilingual pretrained models and parameter-efficient adaptation techniques.</p>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">The research investigates automatic speech recognition, machine translation, speech translation, and text-to-speech synthesis, with an emphasis on efficient adaptation, multimodal learning, and generalization across dialects.</p>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">My broader research interest is to contribute to inclusive artificial intelligence by developing technologies that support linguistic diversity and improve digital accessibility for African language communities.</p>

            <Link href="/research" className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300">
              Learn More About My Research
              <ArrowUpRight size={18} />
            </Link>

          </div>

          {/* Research Interests Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-700/60 dark:bg-[#111b31] dark:shadow-none">

            <div className="mb-6 flex items-center gap-3">
              <Mic2 size={24} className="text-blue-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Research Interests</h3>
            </div>

            <div className="flex flex-wrap gap-3">

              {researchInterests.map((interest) => (
                <span key={interest} className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">{interest}</span>
              ))}

            </div>
          </div>

        </section>

        {/* =======================================================
            SECTION 4: AWARDS AND RECOGNITION
        ======================================================= */}

        <section className="mt-28">

          <SectionHeading eyebrow="ACADEMIC EXCELLENCE" title="Awards & Recognition" description="Selected academic honours and competitive scholarships recognizing research potential, academic achievement, and contributions to information technology." />

          {/* Awards List */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6">

            {awards.map((award) => {
              const Icon = award.icon;

              return (
                <article key={award.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg sm:p-8 dark:border-slate-700/60 dark:bg-[#111b31] dark:shadow-none dark:hover:border-cyan-500/50">

                  {/* Decorative Background */}
                  <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl dark:bg-cyan-500/10" />

                  <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">

                    {/* Award Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-500/15 dark:text-cyan-400">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>

                    {/* Award Information */}
                    <div className="min-w-0 flex-1">

                      {/* Award Heading and Year */}
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                        <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl dark:text-white">{award.title}</h3>

                        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400">{award.period}</span>

                      </div>

                      {/* Awarding Organization */}
                      <div className="mt-4 flex items-start gap-2">
                        <GraduationCap size={17} className="mt-0.5 shrink-0 text-blue-600 dark:text-cyan-400" />
                        <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">{award.organization}</p>
                      </div>

                      {/* Award Description */}
                      <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-400">{award.description}</p>

                    </div>
                  </div>

                </article>
              );
            })}

          </div>
        </section>

        {/* =======================================================
            SECTION 5: COLLABORATION
        ======================================================= */}

        <section className="relative mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm sm:px-12 sm:py-16 dark:border-slate-700/60 dark:bg-[#111b31] dark:shadow-none">

          {/* Decorative Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-cyan-400">
              <BrainCircuit size={30} />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Let&apos;s Connect and Collaborate</h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">I welcome opportunities for research collaboration, software development, academic partnerships, knowledge sharing, and innovative projects that contribute to meaningful technological advancement.</p>

            <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500">
              Get In Touch
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}
