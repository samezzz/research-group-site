"use client"

import Heading from "@/components/heading"
import PublicationsAndPresentations from "@/components/publication-and-presentation"

export default function Publications() {
  return (
    <div className="container mx-auto p-4 mb-12">
      <Heading
        className="font-extrabold text-2xl mt-12"
        title="Publications and Presentations"
        text=""
      />
      <PublicationsAndPresentations />
    </div>
  )
}
