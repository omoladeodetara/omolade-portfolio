import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Printer } from "lucide-react"

export default function PrintableDocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Printable Documents</h1>
        <p className="text-muted-foreground mb-8">
          Access printer-friendly versions of our legal documents and workshop materials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Terms of Service</CardTitle>
              <CardDescription>Last updated: June 1, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our Terms of Service outline the rules and guidelines for using our website and participating in the
                workshop.
              </p>
              <Button asChild>
                <Link href="/terms">
                  <FileText className="mr-2 h-4 w-4" />
                  View and Print
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
              <CardDescription>Last updated: June 1, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
              <Button asChild>
                <Link href="/privacy">
                  <FileText className="mr-2 h-4 w-4" />
                  View and Print
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workshop Agenda</CardTitle>
              <CardDescription>June 15-17, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Detailed schedule of all workshop sessions, panels, and activities.
              </p>
              <Button asChild>
                <Link href="/detailed-agenda">
                  <FileText className="mr-2 h-4 w-4" />
                  View and Print
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speaker Information</CardTitle>
              <CardDescription>Workshop Presenters and Experts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Profiles and information about our workshop speakers and presenters.
              </p>
              <Button asChild>
                <Link href="/speakers">
                  <FileText className="mr-2 h-4 w-4" />
                  View and Print
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-muted p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Printer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Printing Instructions</h3>
              <p className="text-muted-foreground mb-2">
                To print any document, visit the page and click the "Print Document" button in the top-right corner. You
                can also use your browser's print function (Ctrl+P or Cmd+P).
              </p>
              <p className="text-muted-foreground">
                Our print-friendly versions are optimized for readability and paper conservation. For best results, use
                the "Print Document" button which applies our custom print formatting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
