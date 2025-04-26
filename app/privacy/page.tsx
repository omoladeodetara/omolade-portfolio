import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PrintButton } from "@/components/print-button"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="print-only print-header">
        <h1>LOGIC/LSIC/GEGSLA Virtual Workshop</h1>
        <h2>Privacy Policy</h2>
        <p>Last Updated: June 1, 2024</p>
      </div>

      <div className="flex justify-between items-center mb-8 print:hidden">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <PrintButton documentTitle="LOGIC/LSIC/GEGSLA Workshop - Privacy Policy" />
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: June 1, 2024</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            The LOGIC/LSIC/GEGSLA Virtual Workshop ("we," "us," or "our") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website and participate in our virtual workshop.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge
            that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy. If
            you do not agree with our policies and practices, please do not use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect several types of information from and about users of our website, including:</p>

          <h3>2.1 Personal Information</h3>
          <p>
            When you register for the Workshop, we collect personal information that you voluntarily provide, such as:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Organization/affiliation</li>
            <li>Job title/role</li>
            <li>Country of residence</li>
            <li>Professional background and interests</li>
            <li>Dietary or accessibility requirements (if provided)</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>
            We automatically collect certain information about your equipment, browsing actions, and patterns when you
            visit our website, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit on our website</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
            <li>Referral source</li>
          </ul>

          <h3>2.3 Workshop Participation Data</h3>
          <p>
            During the virtual workshop, we may collect additional information related to your participation, such as:
          </p>
          <ul>
            <li>Session attendance</li>
            <li>Questions submitted during Q&A sessions</li>
            <li>Poll responses</li>
            <li>Chat messages in public workshop channels</li>
            <li>Feedback provided about the workshop</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect about you for various purposes, including to:</p>
          <ul>
            <li>Register you for the Workshop and manage your participation</li>
            <li>Provide you with information, materials, and services related to the Workshop</li>
            <li>Communicate with you about the Workshop schedule, updates, and changes</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Improve our website and Workshop experience</li>
            <li>Analyze usage patterns and preferences to enhance our services</li>
            <li>Comply with legal obligations</li>
            <li>Send you follow-up communications about future workshops or related events (with opt-out options)</li>
          </ul>

          <h2>4. Sharing Your Information</h2>
          <p>We may share your personal information in the following circumstances:</p>

          <h3>4.1 Workshop Organizers and Presenters</h3>
          <p>
            Your registration information may be shared with Workshop organizers and presenters for the purpose of
            facilitating the Workshop and related activities.
          </p>

          <h3>4.2 Service Providers</h3>
          <p>
            We may share your information with third-party service providers who perform services on our behalf, such as
            web hosting, data analysis, payment processing, and customer service. These service providers are bound by
            contractual obligations to keep personal information confidential and use it only for the purposes for which
            we disclose it to them.
          </p>

          <h3>4.3 Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in response to valid requests by public
            authorities (e.g., a court or government agency).
          </p>

          <h3>4.4 Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may
            be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our
            website of any change in ownership or uses of your personal information.
          </p>

          <h3>4.5 With Your Consent</h3>
          <p>We may share your information with third parties when you have given us your consent to do so.</p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal
            information. However, please be aware that no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your
            personal information, we cannot guarantee its absolute security.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to withdraw consent for processing your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>To enable certain functions of the website</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable our marketing and retargeting activities</li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our website.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites that are not operated by us. If you click on a
            third-party link, you will be directed to that third party's site. We strongly advise you to review the
            Privacy Policy of every site you visit. We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and you are aware that your child has
            provided us with personal information, please contact us. If we become aware that we have collected personal
            information from children without verification of parental consent, we take steps to remove that information
            from our servers.
          </p>

          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than the country in which you
            reside. These countries may have data protection laws that are different from the laws of your country. By
            using our services, you consent to the transfer of your information to countries outside your country of
            residence, including the United States.
          </p>
          <p>
            When we transfer your information to other countries, we will protect that information as described in this
            Privacy Policy and in accordance with applicable law.
          </p>

          <h2>11. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes for which it
            was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          <p>
            To determine the appropriate retention period for personal information, we consider the amount, nature, and
            sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, the
            purposes for which we process the personal information, and applicable legal requirements.
          </p>

          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are
            advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
            effective when they are posted on this page.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:privacy@lunarworkshop.org" className="text-primary hover:underline">
              privacy@lunarworkshop.org
            </a>
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
