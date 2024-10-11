'use client'

import { researchAreas } from "@/constants";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ResearchInterconnections() {
  const [activeArea, setActiveArea] = useState<string | null>(null)
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <section className="container mx-auto items-center px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Research Interconnections</h2>
        <div className="relative h-[400px]">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.name}
              className="absolute cursor-pointer"
              style={{
                top: `${Math.sin((index / researchAreas.length) * Math.PI * 2) * 150 + 200}px`,
                left: `${Math.cos((index / researchAreas.length) * Math.PI * 2) * 150 + 400}px`,
              }}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setActiveArea(area.name)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <area.icon size={40} />
              <p className="mt-2 text-sm font-semibold">{area.name}</p>
            </motion.div>
          ))}
          {researchAreas.map((area, index) =>
            researchAreas.slice(index + 1).map((otherArea, otherIndex) => (
              <motion.line
                key={`${area.name}-${otherArea.name}`}
                x1={Math.cos((index / researchAreas.length) * Math.PI * 2) * 150 + 400}
                y1={Math.sin((index / researchAreas.length) * Math.PI * 2) * 150 + 200}
                x2={Math.cos(((index + otherIndex + 1) / researchAreas.length) * Math.PI * 2) * 150 + 400}
                y2={Math.sin(((index + otherIndex + 1) / researchAreas.length) * Math.PI * 2) * 150 + 200}
                stroke={activeArea === area.name || activeArea === otherArea.name ? "#000" : "#ccc"}
                strokeWidth={activeArea === area.name || activeArea === otherArea.name ? 2 : 1}
              />
            ))
          )}
        </div>
      </section>
    </div>
  )
}
