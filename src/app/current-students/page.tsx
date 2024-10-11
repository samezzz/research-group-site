import { currentStudents } from "@/constants"
import StudentCard from "@/components/student-card"
import Heading from "@/components/heading"

export default function CurrentStudents() {
  return (
    <div className="container mx-auto py-8">
      <Heading
        className="font-bold text-3xl mb-8"
        title="Current Research Team"
        text=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {currentStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}
