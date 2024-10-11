"use client"

import StudentCard from "@/components/student-card"
import Heading from "@/components/heading"
import { pastStudents } from "@/constants"

export default function PastStudents() {
  return (
    <div className="container mx-auto p-4 mb-12">
      <Heading
        className="font-extrabold text-2xl mt-12"
        title="Some of our Past Researchers"
        text=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
        {pastStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}
