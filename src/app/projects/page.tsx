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
  const [searchTerm, setSearchTerm] = useState('')
  const [filterYear, setFilterYear] = useState('')
  const [filterTopic, setFilterTopic] = useState('')
  const [filterStudent, setFilterStudent] = useState('')
  const [filterSupervisor, setFilterSupervisor] = useState('')

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
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
          <Filter className="mr-2" /> Filter
        </button>
      </div>

      {/* Filter options would go here */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-1">Student: {project.student}</p>
            <p className="text-gray-600 mb-1">Year: {project.year}</p>
            <p className="text-gray-600 mb-1">Topic: {project.topic}</p>
            <p className="text-gray-600">Supervisor: {project.supervisor}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
