import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Publication } from "@/types";

interface Props {
  publication: Publication
}

const PublicationCard: React.FC<Props> = ({ publication }) => (
  <Card key={publication.id} className="bg-[#f6f5f4] dark:bg-[#1C1F20]">
    <CardHeader>
      <CardTitle className="text-lg">{publication.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        {publication.authors.join(", ")} ({publication.year})
      </p>
    </CardContent>
    <CardFooter>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{publication.title}</DialogTitle>
            <DialogDescription>
              <p><strong>Authors:</strong> {publication.authors.join(", ")}</p>
              <p><strong>Journal:</strong> {publication.journal}</p>
              <p><strong>Year:</strong> {publication.year}</p>
              <p><strong>Type:</strong> {publication.type}</p>
              <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Publication
              </a>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
)

export default PublicationCard

