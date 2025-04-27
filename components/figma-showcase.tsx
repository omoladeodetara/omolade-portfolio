"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Maximize2 } from "lucide-react"

interface FigmaShowcaseProps {
  projectSlug: string
  embedUrl: string
  title?: string
  description?: string
}

export function FigmaShowcase({ projectSlug, embedUrl, title = "Design Showcase", description }: FigmaShowcaseProps) {
  // Only render for specific projects
  if (projectSlug !== "monizoom") {
    return null
  }

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted-foreground mb-6">{description}</p>}

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <div className="aspect-[16/9] w-full">
              <iframe src={embedUrl} title={title} className="w-full h-full border-0" allowFullScreen></iframe>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                <div className="aspect-[16/9] w-full h-[85vh]">
                  <iframe
                    src={embedUrl}
                    title={`${title} (Fullscreen)`}
                    className="w-full h-full border-0"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
