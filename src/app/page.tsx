import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Calendar, Tag } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to the Research Project Catalog</h1>
        <p className="mb-8 text-xl text-gray-600">
          Explore a diverse collection of research projects completed by our talented supervisees.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Browse Projects <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <BookOpen className="mb-4 size-12 text-blue-600" />
          <h2 className="mb-2 text-xl font-semibold">Diverse Topics</h2>
          <p className="text-gray-600">Explore research across various academic disciplines.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <Users className="mb-4 size-12 text-blue-600" />
          <h2 className="mb-2 text-xl font-semibold">Student Contributions</h2>
          <p className="text-gray-600">Discover projects from talented supervisees.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <Calendar className="mb-4 size-12 text-blue-600" />
          <h2 className="mb-2 text-xl font-semibold">Academic Years</h2>
          <p className="text-gray-600">Browse research projects by completion year.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <Tag className="mb-4 size-12 text-blue-600" />
          <h2 className="mb-2 text-xl font-semibold">Easy Filtering</h2>
          <p className="text-gray-600">Find projects by topic, student, or supervisor.</p>
        </div>
      </section>

      <section className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-4 text-2xl font-bold">About the Lecturer</h2>
        <p className="mb-4 text-gray-600">
          Dr. Jane Doe is a renowned professor in the field of Computer Science, specializing in Artificial Intelligence and Machine Learning. With over 15 years of experience in academia, she has supervised numerous groundbreaking research projects.
        </p>
        <Link href="/about" className="text-blue-600 hover:underline">Learn more about Dr. Jane Doe</Link>
      </section>
    </div>
  )
}
