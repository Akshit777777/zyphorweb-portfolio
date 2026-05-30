import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        {/* Project showcase section */}
        <SectionHeader
          eyebrow="Project Showcase"
          title="Interactive website concepts with premium mockup energy."
          description="Each project card is built as a realistic preview surface with descriptions, features, tech stack, tags, and pricing guidance."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
