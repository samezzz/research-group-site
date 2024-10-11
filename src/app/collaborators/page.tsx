import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { collaborators, partners } from "@/constants"

export default function Collaborators() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Collaborators</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are proud to work with leading researchers and institutions from around the world,
          pushing the boundaries of science and technology.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Collaborators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collaborators.map((collaborator, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={collaborator.image} alt={collaborator.name} />
                  <AvatarFallback>{collaborator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{collaborator.name}</CardTitle>
                <CardDescription>{collaborator.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{collaborator.affiliation}</p>
                <p className="text-sm">{collaborator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Institutional Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <Card key={index} className="flex items-center justify-center p-4 h-24">
              <CardContent className="text-center p-0">
                <p className="font-medium">{partner}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Interested in Collaborating?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We're always open to new collaborations that align with our research goals.
          If you're interested in working with us, please get in touch.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}
