"use client"

import Heading from "@/components/heading";
import StudentCard from "@/components/student-card";
import { pastStudents } from "@/constants";

export default function PastStudents() {
  return (
    <div className="container mx-auto mb-12 p-4">
      <Heading
        className="mt-12 text-2xl font-extrabold"
        title="Some of our Past Researchers"
        text=""
      />
      <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pastStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}
