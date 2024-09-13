'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

// Mock data for demonstration
const projects = [
  { id: 1, title: 'AI in Healthcare', student: 'Alice Johnson', year: 2023, topic: 'Artificial Intelligence', supervisor: 'Dr. Jane Doe' },
  { id: 2, title: 'Something Something Something', student: 'Bob Smith', year: 2022, topic: 'Blockchain', supervisor: 'Dr. John Smith' },
  // Add more projects...
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear] = useState('');
  const [filterTopic] = useState('');
  const [filterStudent] = useState('');
  const [filterSupervisor] = useState('')

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterYear === '' || project.year.toString() === filterYear) &&
    (filterTopic === '' || project.topic === filterTopic) &&
    (filterStudent === '' || project.student === filterStudent) &&
    (filterSupervisor === '' || project.supervisor === filterSupervisor)
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Research Projects</h1>

      <div className="flex space-x-4">
        <div className="grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full rounded-md border py-2 pl-10 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <button className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          <Filter className="mr-2" /> Filter
        </button>
      </div>

      {/* Filter options would go here */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <div key={project.id} className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
            <p className="mb-1 text-gray-600">Student: {project.student}</p>
            <p className="mb-1 text-gray-600">Year: {project.year}</p>
            <p className="mb-1 text-gray-600">Topic: {project.topic}</p>
            <p className="text-gray-600">Supervisor: {project.supervisor}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
