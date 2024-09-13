import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Calendar, Tag } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Research Project Catalog</h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore a diverse collection of research projects completed by our talented supervisees.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Browse Projects <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Diverse Topics</h2>
          <p className="text-gray-600">Explore research across various academic disciplines.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Student Contributions</h2>
          <p className="text-gray-600">Discover projects from talented supervisees.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Academic Years</h2>
          <p className="text-gray-600">Browse research projects by completion year.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Tag className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Easy Filtering</h2>
          <p className="text-gray-600">Find projects by topic, student, or supervisor.</p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">About the Lecturer</h2>
        <p className="text-gray-600 mb-4">
          Dr. Jane Doe is a renowned professor in the field of Computer Science, specializing in Artificial Intelligence and Machine Learning. With over 15 years of experience in academia, she has supervised numerous groundbreaking research projects.
        </p>
        <Link href="/about" className="text-blue-600 hover:underline">Learn more about Dr. Jane Doe</Link>
      </section>
    </div>
  )
}
