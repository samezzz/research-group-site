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
import { Presentation } from "@/types";

interface Props {
  presentation: Presentation
}

const PresentationCard: React.FC<Props> = ({ presentation }) => (
  <Card key={presentation.id} className="bg-[#f6f5f4] dark:bg-[#1C1F20]">
    <CardHeader>
      <CardTitle className="text-lg">{presentation.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        {presentation.presenters.join(", ")} - {new Date(presentation.date).toLocaleDateString()}
      </p>
    </CardContent>
    <CardFooter>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{presentation.title}</DialogTitle>
            <DialogDescription>
              <p><strong>Presenters:</strong> {presentation.presenters.join(", ")}</p>
              <p><strong>Conference:</strong> {presentation.conference}</p>
              <p><strong>Date:</strong> {new Date(presentation.date).toLocaleDateString()}</p>
              <p><strong>Type:</strong> {presentation.type}</p>
              <p><strong>Abstract:</strong> {presentation.abstract}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
)

export default PresentationCard

