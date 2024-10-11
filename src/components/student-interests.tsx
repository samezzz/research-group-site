import { Badge } from "@/components/ui/badge"

interface StudentInterestsProps {
  interests: string[]
}

export function StudentInterests({ interests }: StudentInterestsProps) {
  return (
    <div>
      <h3 className="font-semibold text-sm mb-2">Research Interests</h3>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, i) => (
          <Badge key={i} variant="secondary">{interest}</Badge>
        ))}
      </div>
    </div>
  )
}

