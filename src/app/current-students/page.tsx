import Heading from "@/components/heading";
import StudentCard from "@/components/student-card";
import { currentStudents } from "@/constants";

export default function CurrentStudents() {
  return (
    <div className="container mx-auto py-8">
      <Heading
        className="mb-8 text-3xl font-bold"
        title="Current Research Team"
        text=""
      />
      <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 lg:grid-cols-3">
        {currentStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}
