"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Maximize2 } from "lucide-react"

export function DesktopScreenShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const screens = [
    {
      id: "dashboard",
      title: "Doctor Dashboard",
      description:
        "The central hub for healthcare providers, featuring a personalized welcome, calendar integration, patient requests queue, upcoming appointments, and consultation history. The interface prioritizes urgent cases and provides quick access to patient information.",
      image: "/ash-b-desktop/dashboard-view.png",
    },
    {
      id: "schedule",
      title: "Appointment Schedule",
      description:
        "The scheduling interface allows doctors to manage their appointments efficiently. It displays both weekly schedules and appointments for other days, with clear patient information, symptoms, and communication options for each appointment.",
      image: "/ash-b-desktop/schedule-view.png",
    },
    {
      id: "telemedicine",
      title: "Telemedicine Interface",
      description:
        "The telemedicine platform enables secure video consultations with patients. Doctors can view patient information, edit medical records, prescribe medications, and communicate through multiple channels (video, audio, chat) in a unified interface.",
      image: "/ash-b-desktop/message-view.png",
    },
  ]

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Desktop Interface</h2>
      <p className="text-muted-foreground mb-6">
        The ASH B platform provides a comprehensive desktop interface for healthcare providers, designed to streamline
        clinical workflows and enhance patient care.
      </p>

      <Tabs defaultValue="dashboard" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="telemedicine">Telemedicine</TabsTrigger>
        </TabsList>

        {screens.map((screen) => (
          <TabsContent key={screen.id} value={screen.id} className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={screen.image || "/placeholder.svg"}
                    alt={screen.title}
                    className="w-full h-auto object-cover"
                  />
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
                      <img
                        src={screen.image || "/placeholder.svg"}
                        alt={screen.title}
                        className="w-full h-auto object-contain max-h-[85vh]"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
              <p className="text-muted-foreground">{screen.description}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Unified Navigation</h4>
            <p className="text-sm text-muted-foreground">
              Consistent sidebar navigation across all screens provides quick access to overview, schedule, messaging,
              pharmacy, and account settings.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Patient Context</h4>
            <p className="text-sm text-muted-foreground">
              Patient information is prominently displayed in each view, ensuring doctors always have the relevant
              context for clinical decision-making.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Integrated Communication</h4>
            <p className="text-sm text-muted-foreground">
              Multiple communication channels (chat, audio, video) are seamlessly integrated, allowing doctors to choose
              the most appropriate method for each consultation.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Clinical Documentation</h4>
            <p className="text-sm text-muted-foreground">
              Structured fields for complaints, diagnoses, conclusions, and prescriptions ensure comprehensive and
              standardized medical documentation.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Visual Symptom Tagging</h4>
            <p className="text-sm text-muted-foreground">
              Color-coded symptom tags provide quick visual reference for patient conditions, helping prioritize urgent
              cases.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Appointment Management</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive scheduling tools with calendar integration help doctors manage their time efficiently and
              reduce administrative burden.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
