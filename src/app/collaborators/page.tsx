import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { collaborators, partners } from "@/constants";
import Link from "next/link";

export default function Collaborators() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Collaborators</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          We are proud to work with leading researchers and institutions from around the world,
          pushing the boundaries of science and technology.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Key Collaborators</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((collaborator, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="mx-auto mb-4 size-24">
                  <AvatarImage src={collaborator.image} alt={collaborator.name} />
                  <AvatarFallback>{collaborator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{collaborator.name}</CardTitle>
                <CardDescription>{collaborator.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-muted-foreground">{collaborator.affiliation}</p>
                <p className="text-sm">{collaborator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Institutional Partners</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <Card key={index} className="flex h-24 items-center justify-center p-4">
              <CardContent className="p-0 text-center">
                <p className="font-medium">{partner}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-2xl font-semibold">Interested in Collaborating?</h2>
        <p className="mx-auto mb-6 max-w-2xl">
          We&apos;re always open to new collaborations that align with our research goals.
          If you&apos;re interested in working with us, please get in touch.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}
