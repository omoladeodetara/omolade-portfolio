"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { CheckCircle2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { useEffect } from "react"
// We'll use console logging for performance tracking in development

const sessionPreferences = [
  {
    id: "panel-discussion",
    label: "Panel Discussion: Standardization Challenges and Opportunities",
  },
  {
    id: "breakout-database",
    label: "Breakout Session: Lunar Database Standardization",
  },
  {
    id: "breakout-interoperability",
    label: "Breakout Session: Technical Interoperability Solutions",
  },
  {
    id: "breakout-cooperation",
    label: "Breakout Session: International Cooperation Frameworks",
  },
  {
    id: "breakout-implementation",
    label: "Breakout Session: Implementation Strategies",
  },
  {
    id: "team-presentations",
    label: "Team Presentations",
  },
  {
    id: "qa-session",
    label: "Q&A / Open Floor Session",
  },
] as const

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  organization: z.string().min(2, {
    message: "Organization must be at least 2 characters.",
  }),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
  interest: z.string({
    required_error: "Please select your primary interest.",
  }),
  sessionPreferences: z.array(z.string()).optional(),
  specialRequirements: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function RegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Track page view when component mounts
  useEffect(() => {
    trackEvent("registration_started", {
      page: "registration",
      source: document.referrer || "direct",
    })
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      role: "",
      sessionPreferences: [],
      specialRequirements: "",
      agreeToTerms: false,
    },
  })

  // Track when users select session preferences
  const watchSessionPreferences = form.watch("sessionPreferences")
  useEffect(() => {
    if (watchSessionPreferences && watchSessionPreferences.length > 0) {
      trackEvent("session_selected", {
        count: watchSessionPreferences.length,
        sessions: watchSessionPreferences.join(","),
      })
    }
  }, [watchSessionPreferences])

  // Update the onSubmit function to track performance
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Start timing
    const startTime = performance.now()

    // In a real application, you would submit this data to your backend
    console.log(values)

    // Track successful registration
    trackEvent("registration_completed", {
      organization_type:
        values.organization.includes("university") || values.organization.includes("college") ? "academic" : "industry",
      interest: values.interest,
      session_count: values.sessionPreferences?.length || 0,
      has_special_requirements: values.specialRequirements ? "yes" : "no",
    })

    // Log performance data to console in development
    const duration = performance.now() - startTime
    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] Registration Submission: ${duration}ms (success: true)`)
    }

    // Show success message
    setIsSubmitted(true)

    // Show toast notification
    toast({
      title: "Registration Successful",
      description: "Thank you for registering for the workshop. You will receive a confirmation email shortly.",
    })
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/20 p-3">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter mb-4">Registration Complete!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for registering for the LOGIC/LSIC/GEGSLA Virtual Workshop. We have sent a confirmation email to
            your registered email address with further details.
          </p>
          <Button
            asChild
            onClick={() => trackEvent("navigation", { destination: "home", from: "registration_success" })}
          >
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Register for the Workshop</h1>
          <p className="text-muted-foreground text-lg">
            Complete the form below to secure your place at the LOGIC/LSIC/GEGSLA Virtual Workshop.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Company or Institution" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role / Position</FormLabel>
                      <FormControl>
                        <Input placeholder="Your role or position" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Interest</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value)
                        trackEvent("interest_selected", { interest: value })
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lunar-database">Lunar Activities Database</SelectItem>
                        <SelectItem value="interoperability">Systems Interoperability</SelectItem>
                        <SelectItem value="cooperation">International Cooperation</SelectItem>
                        <SelectItem value="standards">Standards Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This helps us tailor the workshop content to participants' interests.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sessionPreferences"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Session Preferences</FormLabel>
                      <FormDescription>Select the sessions you are most interested in attending.</FormDescription>
                    </div>
                    <div className="space-y-2">
                      {sessionPreferences.map((session) => (
                        <FormField
                          key={session.id}
                          control={form.control}
                          name="sessionPreferences"
                          render={({ field }) => {
                            return (
                              <FormItem key={session.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(session.id)}
                                    onCheckedChange={(checked) => {
                                      const newValue = checked
                                        ? [...(field.value || []), session.id]
                                        : field.value?.filter((value) => value !== session.id)

                                      field.onChange(newValue)
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{session.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please list any accessibility requirements or other special needs"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We aim to make our virtual workshop accessible to all participants.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I agree to the terms and conditions</FormLabel>
                      <FormDescription>
                        By checking this box, you agree to our{" "}
                        <Link
                          href="/terms"
                          className="text-primary underline"
                          onClick={() =>
                            trackEvent("external_link_clicked", { destination: "terms", from: "registration" })
                          }
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-primary underline"
                          onClick={() =>
                            trackEvent("external_link_clicked", { destination: "privacy", from: "registration" })
                          }
                        >
                          Privacy Policy
                        </Link>
                        .
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
