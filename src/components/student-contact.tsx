"use client"

import { Button } from "@/components/ui/button";
import { Globe, Mail } from "lucide-react";

interface StudentContactProps {
  email: string
  website: string
}

export function StudentContact({ email, website }: StudentContactProps) {
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => window.location.href = `mailto:${email}`}>
        <Mail className="mr-2 size-4" />
        Email
      </Button>
      <Button variant="outline" size="sm" onClick={() => window.open(website, "_blank")}>
        <Globe className="mr-2 size-4" />
        Website
      </Button>
    </>
  )
}

