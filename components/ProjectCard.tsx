"use client";

import { memo } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Image as ImageIcon, Layers } from "lucide-react";
import type { Project } from "@/data/projects";
import { isProjectLinkReady } from "@/data/projectLinks";

function hasProjectScreenshot(src: string) {
  return Boolean(src && !src.toLowerCase().includes("add screenshot"));
}

function ProjectScreenshot({ project }: { project: Project }) {
  const hasScreenshot = hasProjectScreenshot(project.screenshotSrc);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-navy">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${project.accent}44, transparent 32%), linear-gradient(145deg, #03162e, #020a16)`
        }}
      />

      {hasScreenshot ? (
        <img
          src={project.screenshotSrc}
          alt={project.screenshotAlt}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="relative h-full p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-200/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
              Screenshot
            </span>
          </div>

          <div className="absolute inset-x-6 top-16 rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/12 text-mist">
                <ImageIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="h-2.5 w-28 rounded-full bg-white/70" />
                <div className="mt-2 h-2 w-20 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <span className="h-16 rounded-2xl bg-white/12" />
              <span className="h-16 rounded-2xl bg-white/18" />
              <span className="h-16 rounded-2xl bg-white/12" />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-ink/55 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-mist">{project.category}</p>
            <p className="mt-2 text-sm text-white/66">Add your project screenshot in data/projects.ts</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCardComponent({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [7, -7]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-7, 7]), { stiffness: 180, damping: 20 });
  const liveLinkReady = isProjectLinkReady(project.liveUrl);

  return (
    <motion.article
      className="group relative rounded-[28px] border border-white/12 bg-white/[0.055] p-4 shadow-luxury backdrop-blur-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={
        reduceMotion
          ? undefined
          : (event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              x.set(event.clientX - bounds.left - bounds.width / 2);
              y.set(event.clientY - bounds.top - bounds.height / 2);
            }
      }
      onMouseLeave={
        reduceMotion
          ? undefined
          : () => {
              x.set(0);
              y.set(0);
            }
      }
    >
      {/* Project image placeholder or screenshot */}
      <ProjectScreenshot project={project} />

      {/* Project details */}
      <div className="p-2 pt-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/75">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.25em] text-mist">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-4 min-h-20 text-sm leading-7 text-white/68">{project.description}</p>
        </div>

        <div className="mt-4 grid gap-2 text-sm text-white/70">
          <p>
            <span className="text-white">Features:</span> {project.features.join(", ")}
          </p>
          <p>
            <span className="text-white">Tech:</span> {project.techStack.join(", ")}
          </p>
          <p className="font-semibold text-mist">{project.price}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {liveLinkReady ? (
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:bg-mist"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" /> View Live
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-sm font-semibold text-white/55">
              <ExternalLink className="h-4 w-4" /> Link coming soon
            </span>
          )}

          <a className="inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-2 text-sm text-white transition hover:bg-white/10" href="#order">
            <Layers className="h-4 w-4" /> View Details
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
