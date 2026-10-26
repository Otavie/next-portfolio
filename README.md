# Otavie - Personal Portfolio

A modern, responsive portfolio website for **Otavie Okuoyo**, showcasing software development projects, research interests, academic experience, and opportunities for collaboration.

Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, the site provides a clean browsing experience across desktop, tablet, and mobile devices, with support for light and dark themes.

> **Live website:** [https://otavie-portfolio.vercel.app/](https://otavie-portfolio.vercel.app/)

## Features

- **Responsive design**: layouts that adapt to phones, tablets, and desktops.
- **Light and dark themes**: theme switching for different viewing preferences.
- **Project showcase**: project cards and dedicated pages for more detailed descriptions.
- **Research section**: a space to present research areas and work.
- **About page**: professional background and interests.
- **Reusable components** — shared navigation, footer, and page sections.
- **Social links**: LinkedIn, GitHub, and X (Twitter) in the footer.
- **Custom favicon**: personalized branding in browser tabs.
- **Vercel deployment**: production hosting with Git-based deployments.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework and App Router |
| [React](https://react.dev/) | User interface components |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive, utility-first styling |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## Website Sections

| Route | Description |
| --- | --- |
| `/` | Homepage and introduction |
| `/about` | Background, skills, and experience |
| `/research` | Research interests and work |
| `/projects` | Selected projects and links to further details |

Additional navigation items, such as Publications and Contact, can be included as their pages are implemented.

## Project Structure

The following is an overview of the main folders and files (your local project may contain additional files):

```text
next-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── research/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── favicon.png
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   └── HomeSection.tsx
│   └── layout/
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── PageFooter.tsx
│       ├── ThemeProvider.tsx
│       └── ThemeToggle.tsx
├── public/
├── package.json
└── package-lock.json
```

Project information is maintained in a `projects.ts` file; refer to its location in your codebase when editing project entries.

## Getting Started

### Prerequisites

Install a current supported version of [Node.js](https://nodejs.org/) (which includes npm).

### Run Locally

1. Clone your repository:

   ```bash
   git clone https://github.com/Otavie/next-portfolio
   cd next-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Edit files in `app/` and `components/` to make changes. The development server updates as you save your work.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create and validate a production build |
| `npm run start` | Serve the production build locally |

Other scripts, if configured, are listed in `package.json`.

## Customization

- **Personal information:** Update introductions, biography, and section content in the appropriate page and component files.
- **Projects:** Edit the entries in `projects.ts` and their corresponding detail views.
- **Navigation:** Update the links in `components/layout/Navbar.tsx` and your footer component.
- **Social profiles:** Replace the LinkedIn, GitHub, and X placeholder URLs with your actual profiles.
- **Branding:** Update favicon files and relevant site metadata in `app/layout.tsx`.
- **Styling:** Adjust Tailwind utility classes and `app/globals.css`.

## Deployment

The portfolio is deployed using [Vercel](https://vercel.com/).

To deploy your own copy:

1. Push your project to a GitHub repository.
2. Import the repository into Vercel as a Next.js project.
3. Review the project settings and deploy.
4. Set a preferred production domain under **Project Settings => Domains**, if available.

Before pushing changes, check the production build locally:

```bash
npm run build
```

Commits pushed to the connected production branch can trigger new Vercel deployments.

## Contact & Collaboration

I welcome conversations about software engineering, artificial intelligence, human language technology, research, and education.

- **LinkedIn:** `https://www.linkedin.com/in/Otavie`
- **GitHub:** `https://github.com/Otavie`
- **X (Twitter):** `https://x.com/LoveOtavie`

Replace these placeholders with your actual profile links before publishing this README.

## License

No license is specified in this README. If you want others to reuse or modify your code, add an appropriate `LICENSE` file and update this section.

---

**Built and maintained by Otavie Okuoyo.**