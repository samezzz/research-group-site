import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { StudentAvatar } from "@/components/student-avatar"
import { StudentProject } from "@/components/student-projects"
import { StudentInterests } from "@/components/student-interests"
import { StudentContact } from "@/components/student-contact"

import { StudentCardProps } from "@/types"


export default function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="flex flex-col dark:bg-[#1C1F20]">
      <CardHeader className="flex-row gap-4 items-center">
        <StudentAvatar name={student.name} avatar={student.avatar} />
        <div>
          <CardTitle>{student.name}</CardTitle>
          <div className="flex items-center mt-1 text-muted-foreground">
            <GraduationCap className="w-4 h-4 mr-1" />
            Class of {student.year}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <StudentProject project={student.project} />
        <StudentInterests interests={student.interests} />
      </CardContent>

      <CardFooter className="flex justify-between">
        <StudentContact email={student.email} website={student.website} />
      </CardFooter>
    </Card>
  )
}

