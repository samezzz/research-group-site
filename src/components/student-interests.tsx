import { Badge } from "@/components/ui/badge";

interface StudentInterestsProps {
  interests: string[]
}

export function StudentInterests({ interests }: StudentInterestsProps) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold">Research Interests</h3>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, i) => (
          <Badge key={i} variant="secondary">{interest}</Badge>
        ))}
      </div>
    </div>
  )
}

