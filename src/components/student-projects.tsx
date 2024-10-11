import { Briefcase } from "lucide-react"

interface StudentProjectProps {
  project: string
}

export function StudentProject({ project }: StudentProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-sm mb-2 flex items-center">
        <Briefcase className="w-4 h-4 mr-1" /> Project
      </h3>
      <p className="text-sm text-muted-foreground">{project}</p>
    </div>
  )
}

