import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact | Your Portfolio",
  description: "Get in touch with me for work inquiries or collaborations",
}

export default function ContactPage() {
  return (
    <div className="container py-10">
      <PageHeader heading="Contact Me" subheading="Get in touch for work inquiries or collaborations" />
      <div className="mt-12">
        <ContactInfo />
      </div>
    </div>
  )
}
