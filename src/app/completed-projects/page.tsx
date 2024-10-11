"use client"

import ProjectCard from "@/components/project-card"
import Heading from "@/components/heading"
import { completedProjects } from "@/constants"


export default function CompletedProjects() {
  return (
    <div className="container mx-auto p-4 mb-12">
      <Heading
        className="font-extrabold text-2xl mt-12"
        title="Projects that have been completed"
        text=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {completedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
