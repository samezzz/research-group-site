"use client"

import Heading from "@/components/heading";
import PublicationsAndPresentations from "@/components/publication-and-presentation";

export default function Publications() {
  return (
    <div className="container mx-auto mb-12 p-4">
      <Heading
        className="mt-12 text-2xl font-extrabold"
        title="Publications and Presentations"
        text=""
      />
      <PublicationsAndPresentations />
    </div>
  )
}
