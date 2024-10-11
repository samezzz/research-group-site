"use client"

import Heading from "@/components/heading";
import ProjectCard from "@/components/project-card";
import { completedProjects } from "@/constants";


export default function CompletedProjects() {
  return (
    <div className="container mx-auto mb-12 p-4">
      <Heading
        className="mt-12 text-2xl font-extrabold"
        title="Projects that have been completed"
        text=""
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {completedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
