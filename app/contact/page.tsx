import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact | Your Portfolio",
  description: "Get in touch with me for work inquiries or collaborations",
}

export default function ContactPage() {
  return (
    <div className="container py-10">
      <PageHeader heading="Contact Me" subheading="Get in touch for work inquiries or collaborations" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
