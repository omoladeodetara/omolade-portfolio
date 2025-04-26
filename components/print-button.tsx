"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

interface PrintButtonProps {
  documentTitle?: string
}

export function PrintButton({ documentTitle }: PrintButtonProps) {
  const handlePrint = () => {
    // Set document title for the print job if provided
    if (documentTitle) {
      document.title = documentTitle
    }

    window.print()

    // Reset the document title after printing
    setTimeout(() => {
      document.title = "LOGIC/LSIC/GEGSLA Virtual Workshop"
    }, 100)
  }

  return (
    <Button onClick={handlePrint} variant="outline" className="print:hidden">
      <Printer className="mr-2 h-4 w-4" />
      Print Document
    </Button>
  )
}
