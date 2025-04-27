"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface DesignShowcaseProps {
  projectSlug: string
}

export function DesignShowcase({ projectSlug }: DesignShowcaseProps) {
  const [activeTab, setActiveTab] = useState("doctor")

  // Only render for ASH B project
  if (projectSlug !== "ash-b") {
    return null
  }

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Interactive Design Showcase</h2>

      <Tabs defaultValue="doctor" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="doctor">Doctor Interface</TabsTrigger>
          <TabsTrigger value="patient">Patient Interface</TabsTrigger>
          <TabsTrigger value="design-system">Design System</TabsTrigger>
        </TabsList>

        <TabsContent value="doctor" className="mt-6">
          <Card>
            <CardContent className="p-0 aspect-[16/9] overflow-hidden">
              <iframe
                src="https://embed.figma.com/design/GsjbDEl2Tb4MS3mysd32me/ASH-Biomedical-Doctors-Webapp--Copy-?node-id=0-1&embed-host=share"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The doctor interface is designed to streamline clinical workflows, providing quick access to patient
              information, appointment scheduling, and telemedicine tools. The interface prioritizes efficiency and
              clarity to support healthcare providers in delivering quality care.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="patient" className="mt-6">
          <Card>
            <CardContent className="p-0 aspect-[16/9] overflow-hidden">
              <iframe
                src="https://embed.figma.com/design/aa8zqHpP5Agc7yT8vqSfA5/ASH-Biomedical---Patient--Copy-?node-id=0-1&embed-host=share"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The patient interface focuses on accessibility and ease of use, allowing patients to book appointments,
              participate in telemedicine consultations, track prescriptions, and manage their medical history. The
              design emphasizes clarity and reduces cognitive load during potentially stressful healthcare interactions.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="design-system" className="mt-6">
          <Card>
            <CardContent className="p-0 aspect-[16/9] overflow-hidden">
              <iframe
                src="https://embed.figma.com/board/PqQGeU0Uroj3Ame7UkV4A3/ASH-B?node-id=0-1&embed-host=share"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The comprehensive design system ensures consistency across all platform interfaces while adhering to
              healthcare design best practices. It includes color schemes optimized for accessibility, typography that
              enhances readability, and component patterns that support both clinical and patient user needs.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
