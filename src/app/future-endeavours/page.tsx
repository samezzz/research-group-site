'use client'
import ResearchInterconnections from "@/components/research-interconnections";
import Timeline from "@/components/timeline";
import TimelineItem from "@/components/timeline-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { researchAreas } from "@/constants";
import { ArrowRight, Beaker } from 'lucide-react';


export default function FutureEndeavours() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <section className="container mx-auto items-center px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Shaping the Future of Science</h1>
        <p className="mb-8 text-xl text-gray-600">Explore our upcoming projects and groundbreaking research initiatives</p>
        <Button>
          Learn More <ArrowRight className="ml-2" />
        </Button>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Upcoming Projects Timeline</h2>
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
        <h2 className="mb-8 text-center text-3xl font-bold">Key Research Areas</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <Card key={area.name} className="transition-shadow duration-300 hover:shadow-lg">
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
        <h2 className="mb-4 text-3xl font-bold">Collaborate with Us</h2>
        <p className="mb-8 text-xl text-gray-600">
          We&apos;re always looking for passionate researchers, innovative companies, and forward-thinking institutions to join us in our mission.
        </p>
        <Button variant="outline">
          Explore Partnerships
        </Button>
      </section>

      <ResearchInterconnections />

      <section className="container mx-auto mb-16 rounded-lg bg-[#f6f5f4] px-4 py-16 text-center text-primary-foreground dark:bg-[#1C1F20]">
        <h2 className="mb-4 text-3xl font-bold">Join Us in Shaping the Future</h2>
        <p className="mb-8 text-xl">
          Whether you&apos;re a student, researcher, or industry professional, there&apos;s a place for you in our lab.
        </p>
        <Button variant="secondary">
          Get Involved <Beaker className="ml-2" />
        </Button>
      </section>
    </div>
  )
}
