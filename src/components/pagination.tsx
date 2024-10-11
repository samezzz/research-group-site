"use client"

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-center space-x-2">
    <Button
      variant="outline"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <ChevronLeft className="size-4" />
      Previous
    </Button>
    <span className="text-sm text-muted-foreground">
      Page {currentPage} of {totalPages}
    </span>
    <Button
      variant="outline"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
      <ChevronRight className="size-4" />
    </Button>
  </div>
)

export default Pagination

