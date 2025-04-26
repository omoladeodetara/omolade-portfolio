import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PrintButton } from "@/components/print-button"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="print-only print-header">
        <h1>LOGIC/LSIC/GEGSLA Virtual Workshop</h1>
        <h2>Terms of Service</h2>
        <p>Last Updated: June 1, 2024</p>
      </div>

      <div className="flex justify-between items-center mb-8 print:hidden">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <PrintButton documentTitle="LOGIC/LSIC/GEGSLA Workshop - Terms of Service" />
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: June 1, 2024</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to the LOGIC/LSIC/GEGSLA Virtual Workshop website. These Terms of Service ("Terms") govern your
            access to and use of our website and services related to the virtual workshop. By accessing or using our
            services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not
            access the service.
          </p>

          <h2>2. Definitions</h2>
          <p>
            <strong>"Workshop"</strong> refers to the LOGIC/LSIC/GEGSLA Virtual Workshop.
            <br />
            <strong>"We," "us," "our,"</strong> refers to the LOGIC/LSIC/GEGSLA Workshop organizing committee.
            <br />
            <strong>"Website"</strong> refers to the LOGIC/LSIC/GEGSLA Virtual Workshop website.
            <br />
            <strong>"Services"</strong> refers to the website, virtual workshop sessions, materials, and related
            services.
            <br />
            <strong>"User," "you," "your"</strong> refers to individuals who access or use our services.
          </p>

          <h2>3. Registration and Account</h2>
          <p>
            To participate in the Workshop, you must register on our Website. You agree to provide accurate, current,
            and complete information during the registration process. You are responsible for safeguarding your account
            information and for all activities that occur under your account.
          </p>

          <h2>4. Workshop Participation</h2>
          <p>By registering for the Workshop, you agree to:</p>
          <ul>
            <li>Participate in a professional and respectful manner</li>
            <li>Not disrupt the Workshop or interfere with other participants' experience</li>
            <li>Not record, copy, or redistribute Workshop content without explicit permission</li>
            <li>Comply with any additional rules or guidelines provided for specific Workshop sessions</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content provided as part of the Workshop, including but not limited to presentations, documents, videos,
            and discussions, is protected by copyright and other intellectual property laws. You may use the content for
            personal, non-commercial purposes related to your participation in the Workshop. Any other use, including
            reproduction, modification, distribution, or republication, without prior written consent is prohibited.
          </p>

          <h2>6. User Contributions</h2>
          <p>
            During the Workshop, you may have opportunities to contribute content, including questions, comments, and
            materials. By providing any user contribution, you grant us a worldwide, non-exclusive, royalty-free license
            to use, reproduce, modify, adapt, publish, translate, and distribute your content in connection with the
            Workshop and our services.
          </p>
          <p>You represent and warrant that your contributions:</p>
          <ul>
            <li>Are your original work or you have the necessary rights to share them</li>
            <li>Do not violate any third party's intellectual property or privacy rights</li>
            <li>Do not contain any defamatory, offensive, or illegal material</li>
            <li>Do not contain any viruses, malware, or other harmful code</li>
          </ul>

          <h2>7. Privacy</h2>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal
            information. By using our services, you agree to our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The Workshop and related services are provided on an "as is" and "as available" basis. We make no
            warranties, expressed or implied, regarding the operation of our services or the information, content, or
            materials included.
          </p>
          <p>We do not guarantee that:</p>
          <ul>
            <li>The service will be uninterrupted or error-free</li>
            <li>Defects will be corrected</li>
            <li>The service or server is free of viruses or other harmful components</li>
            <li>The information provided will be accurate, reliable, or meet your requirements</li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, including but not limited to, damages for loss of profits,
            goodwill, use, data, or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your use or inability to use our services</li>
            <li>Any unauthorized access to or use of our servers and/or personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from our services</li>
            <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
          </ul>

          <h2>10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless the Workshop organizers, their affiliates, and their
            respective directors, officers, employees, and agents from and against any claims, liabilities, damages,
            losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your
            access to or use of our services, your violation of these Terms, or your violation of any rights of another.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for
            any reason, including but not limited to a breach of the Terms. Upon termination, your right to use our
            services will immediately cease.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
            will be determined at our sole discretion.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without
            regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these
            Terms shall be brought exclusively in the federal or state courts located in Washington, D.C.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:info@lunarworkshop.org" className="text-primary hover:underline">
              info@lunarworkshop.org
            </a>
            .
          </p>
        </div>

        <div className="mt-12 flex justify-center print:hidden">
          <Button asChild>
            <Link href="/registration">Return to Registration</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
