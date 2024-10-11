import { Briefcase } from "lucide-react";

interface StudentProjectProps {
  project: string
}

export function StudentProject({ project }: StudentProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="mb-2 flex items-center text-sm font-semibold">
        <Briefcase className="mr-1 size-4" /> Project
      </h3>
      <p className="text-sm text-muted-foreground">{project}</p>
    </div>
  )
}

