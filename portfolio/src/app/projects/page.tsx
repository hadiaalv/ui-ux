import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          title="UniEvent"
          description="Campus event management platform using Next.js & MongoDB"
        />
        <ProjectCard
          title="Job Board"
          description="Full-stack job portal with role-based authentication"
        />
        <ProjectCard
          title="Finance Tracker"
          description="Track income & expenses with charts"
        />
      </div>
    </section>
  );
}
