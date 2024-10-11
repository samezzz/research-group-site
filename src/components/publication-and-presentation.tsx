"use client"

import { useState } from "react";
import PublicationCard from "@/components/publication-card";
import PresentationCard from "@/components/presentation-card";
import Pagination from "@/components/pagination";
import TabsWithSearch from "@/components/tabs-with-search";
import { publications, presentations } from "@/constants";


const PublicationsAndPresentations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"publications" | "presentations">("publications")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredItems = (activeTab === "publications" ? publications : presentations).filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage)
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="mb-8 text-lg text-muted-foreground">
        Explore the latest research outputs from our lab members, including peer-reviewed publications and conference presentations.
      </p>

      <TabsWithSearch
        activeTab={activeTab}
        /*@ts-expect-error Type not validated*/
        onTabChange={setActiveTab}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeTab === "publications"
        /*@ts-expect-error Type not validated*/
          ? currentItems.map((publication) => <PublicationCard key={publication.id} publication={publication} />)
        /*@ts-expect-error Type not validated*/
          : currentItems.map((presentation) => <PresentationCard key={presentation.id} presentation={presentation} />)}
      </div>

      <Pagination currentPage={currentPage} totalPages={pageCount} onPageChange={setCurrentPage} />
    </div>
  )
}

export default PublicationsAndPresentations

