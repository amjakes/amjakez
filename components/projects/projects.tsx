import {
  ArrowRight,
  Bot,
  Code2,
  HeartPulse,
  Landmark,
  Music2,
  Palette,
  Ticket,
  Wallet,
  Workflow,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href: string;
  technologies: readonly string[];
};

const PROJECTS: Project[] = [
  {
    id: "shaqoai",
    icon: Workflow,
    iconLabel: "ShaqoAI",
    title: "An AI workforce for coordinating useful, human-guided automation.",
    description:
      "An AI-powered workforce platform for automating repetitive operations while keeping people in control of important decisions.",
    meta: "AI workforce platform",
    imageRatio: 16 / 10,
    image: "/portfolio/project-shaqoai.jpeg",
    imageAlt: "ShaqoAI workforce dashboard",
    href: "https://shaqoai.vercel.app/",
    technologies: ["HTML", "JavaScript", "Dart", "C++"],
  },
  {
    id: "soundserve",
    icon: Music2,
    iconLabel: "SoundServe",
    title: "An AI-powered music streaming platform built for production.",
    description:
      "A full-stack music experience with a modern web client, API, shared contracts, database infrastructure, and deployment tooling.",
    meta: "Full-stack product",
    imageRatio: 16 / 10,
    image: "/portfolio/project-soundserve.png",
    imageAlt: "SoundServe music streaming interface",
    href: "https://soundserve.vercel.app/",
    technologies: ["React", "Express", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    id: "tech-vault",
    icon: Code2,
    iconLabel: "Jakes Tech Vault",
    title: "A technology marketplace and IT services platform for modern businesses.",
    description:
      "A production-oriented storefront for product discovery, IT support, business procurement, and AI-assisted shopping.",
    meta: "Commerce platform",
    imageRatio: 16 / 10,
    image: "/portfolio/project-skyline.jpeg",
    imageAlt: "Jakes Tech Vault marketplace",
    href: "https://jakes-tech-vault.vercel.app/",
    technologies: ["TypeScript", "JavaScript", "CSS", "Docker"],
  },
  {
    id: "ragpilot",
    icon: Bot,
    iconLabel: "RAGPilot",
    title: "Document intelligence with answers grounded in your PDFs.",
    description:
      "A retrieval chatbot using page-level extraction, provenance-preserving chunks, FAISS search, and contextual AI responses.",
    meta: "Applied AI · Document retrieval",
    imageRatio: 16 / 10,
    image: "/portfolio/project-ragpilot.jpeg",
    imageAlt: "RAGPilot document question answering",
    href: "https://ragpilot-chatbot.streamlit.app/",
    technologies: ["Python", "Streamlit", "FAISS", "OpenAI"],
  },
  {
    id: "mreal",
    icon: Ticket,
    iconLabel: "Mreal",
    title: "Blockchain ticketing with verifiable ownership at the door.",
    description:
      "A local-first Ethereum platform where hosts issue ERC-721 tickets and holders generate short-lived ownership proofs for redemption.",
    meta: "Web3 · Ethereum ticketing",
    imageRatio: 16 / 10,
    image: "/portfolio/project-mreal.jpeg",
    imageAlt: "Mreal blockchain ticketing interface",
    href: "https://github.com/amjakes/Mreal",
    technologies: ["React", "Solidity", "Hardhat", "Ethers.js"],
  },
  {
    id: "afyahive",
    icon: HeartPulse,
    iconLabel: "AfyaHive",
    title: "Healthcare, wellness, and community in one connected platform.",
    description:
      "A healthcare and wellness experience bringing together AI assistance, digital health services, personal wellness tools, and community.",
    meta: "Digital health · Cross-platform",
    imageRatio: 16 / 10,
    image: "/portfolio/project-afyahive.jpeg",
    imageAlt: "AfyaHive health and wellness app",
    href: "https://github.com/amjakes/afyahive",
    technologies: ["Flutter", "Dart", "PHP"],
  },
  {
    id: "wantam-holdings",
    icon: Wallet,
    iconLabel: "WantamHoldings",
    title: "A cross-platform banking management system.",
    description:
      "Customer banking services and administrative tools for managing customers, accounts, and financial transactions.",
    meta: "Fintech · Digital banking",
    imageRatio: 16 / 10,
    image: "/portfolio/project-wantam-holdings.jpeg",
    imageAlt: "WantamHoldings banking dashboard",
    href: "https://github.com/rayv7/wantamHoldings",
    technologies: ["Flutter", "Dart", "TypeScript", "REST APIs"],
  },
  {
    id: "murila-heritage-bank",
    icon: Landmark,
    iconLabel: "Murila Heritage Bank",
    title: "Family banking designed around shared, long-term wealth.",
    description:
      "A family banking concept for collaborative financial management and building generational wealth.",
    meta: "Fintech · Family wealth",
    imageRatio: 16 / 10,
    image: "/portfolio/project-murila-heritage.png",
    imageAlt: "Murila Heritage Bank family banking experience",
    href: "https://github.com/amjakes/murila_heritage_bank",
    technologies: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: "art-vault",
    icon: Palette,
    iconLabel: "Jakes Art Vault",
    title: "A curated collection of original artwork and visual storytelling.",
    description: "A dedicated gallery for discovering and sharing my visual art.",
    meta: "Creative portfolio",
    imageRatio: 1,
    image: "/portfolio/project-art.vault.jpeg",
    imageAlt: "Jakes Art Vault gallery",
    href: "https://artamjakez.pixieset.com/jakesartvault/",
    technologies: ["Pixieset", "Visual storytelling"],
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              A selection of products and systems across AI, healthcare,
              commerce, fintech, and creative work.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.iconLabel}`}
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </a>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm hover:underline">
              {project.title}
            </a>
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
          <p className="text-[12px] leading-relaxed tracking-tight text-foreground/50">
            {project.technologies.join(" · ")}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
