"use client"

import { Button } from "@/components/ui/button"
import { Mail, Globe } from "lucide-react"

interface StudentContactProps {
  email: string
  website: string
}

export function StudentContact({ email, website }: StudentContactProps) {
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => window.location.href = `mailto:${email}`}>
        <Mail className="w-4 h-4 mr-2" />
        Email
      </Button>
      <Button variant="outline" size="sm" onClick={() => window.open(website, "_blank")}>
        <Globe className="w-4 h-4 mr-2" />
        Website
      </Button>
    </>
  )
}

