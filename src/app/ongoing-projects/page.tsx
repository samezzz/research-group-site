"use client"

import Heading from "@/components/heading";
import ProjectCard from "@/components/project-card";
import { ongoingProjects } from "@/constants";

export default function OngoingProjects() {
  return (
    <div className="container mx-auto mb-12 p-4">
      <Heading
        className="mt-12 text-2xl font-extrabold"
        title="Current Projects being Implemented"
        text=""
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ongoingProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
