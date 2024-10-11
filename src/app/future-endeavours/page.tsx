'use client'
import { Button } from "@/components/ui/button"
import Timeline from "@/components/timeline"
import TimelineItem from "@/components/timeline-item"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Beaker } from 'lucide-react'
import { researchAreas } from "@/constants"
import ResearchInterconnections from "@/components/research-interconnections"


export default function FutureEndeavours() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <section className="container mx-auto px-4 py-16 text-center items-center">
        <h1 className="text-4xl font-bold mb-4">Shaping the Future of Science</h1>
        <p className="text-xl text-gray-600 mb-8">Explore our upcoming projects and groundbreaking research initiatives</p>
        <Button>
          Learn More <ArrowRight className="ml-2" />
        </Button>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Projects Timeline</h2>
        <Timeline>
          <TimelineItem title="Project Genesis" date="Q3 2024">
            Launching our quantum biology research program
          </TimelineItem>
          <TimelineItem title="Neural Interface Prototype" date="Q1 2025">
            First human trials of our non-invasive brain-computer interface
          </TimelineItem>
          <TimelineItem title="Synthetic Ecosystem" date="Q4 2025">
            Creating a self-sustaining synthetic microbiome
          </TimelineItem>
          <TimelineItem title="Nano-drug Delivery System" date="Q2 2026">
            Targeted cancer treatment using programmable nanoparticles
          </TimelineItem>
          <TimelineItem title="Algal Bioreactor" date="Q3 2026">
            Scaling up our carbon-negative bioenergy production
          </TimelineItem>
        </Timeline>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area) => (
            <Card key={area.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <area.icon className="mr-2" />
                  {area.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Exploring the frontiers of {area.name.toLowerCase()} to revolutionize scientific understanding and applications.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Collaborate with Us</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're always looking for passionate researchers, innovative companies, and forward-thinking institutions to join us in our mission.
        </p>
        <Button variant="outline">
          Explore Partnerships
        </Button>
      </section>

      <ResearchInterconnections />

      <section className="container mx-auto px-4 py-16 text-center bg-primary text-primary-foreground rounded-lg mb-16 px-2 bg-[#f6f5f4] dark:bg-[#1C1F20]">
        <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future</h2>
        <p className="text-xl mb-8">
          Whether you're a student, researcher, or industry professional, there's a place for you in our lab.
        </p>
        <Button variant="secondary">
          Get Involved <Beaker className="ml-2" />
        </Button>
      </section>
    </div>
  )
}
