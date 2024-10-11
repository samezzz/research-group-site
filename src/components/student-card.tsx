import { StudentAvatar } from "@/components/student-avatar";
import { StudentContact } from "@/components/student-contact";
import { StudentInterests } from "@/components/student-interests";
import { StudentProject } from "@/components/student-projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

import { StudentCardProps } from "@/types";


export default function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="flex flex-col dark:bg-[#1C1F20]">
      <CardHeader className="flex-row items-center gap-4">
        <StudentAvatar name={student.name} avatar={student.avatar} />
        <div>
          <CardTitle>{student.name}</CardTitle>
          <div className="mt-1 flex items-center text-muted-foreground">
            <GraduationCap className="mr-1 size-4" />
            Class of {student.year}
          </div>
        </div>
      </CardHeader>

      <CardContent className="grow">
        <StudentProject project={student.project} />
        <StudentInterests interests={student.interests} />
      </CardContent>

      <CardFooter className="flex justify-between">
        <StudentContact email={student.email} website={student.website} />
      </CardFooter>
    </Card>
  )
}

