import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { MobileScreenGallery } from "@/components/mobile-screen-gallery"
import { RelatedProjects } from "@/components/related-projects"

export const metadata: Metadata = {
  title: "ASH B - Healthcare Management Platform | Portfolio",
  description:
    "ASH B is a comprehensive healthcare management platform designed to streamline patient care and administrative workflows.",
}

export default function ASHBProjectPage() {
  // Mobile screenshots
  const mobileScreenshots = [
    {
      id: "messages",
      url: "/ash-b-images/mobile/messages-list.png",
      title: "Messaging Interface",
      description: "Secure messaging interface allowing patients to communicate with their healthcare providers.",
    },
    {
      id: "chat",
      url: "/ash-b-images/mobile/chat-screen.jpg",
      title: "Chat Conversation",
      description: "Detailed chat view for discussing treatment plans and medication options.",
    },
    {
      id: "audio-calling",
      url: "/ash-b-images/mobile/audio-calling.png",
      title: "Initiating Audio Call",
      description: "Interface for starting an audio consultation with a healthcare provider.",
    },
    {
      id: "audio-call",
      url: "/ash-b-images/mobile/audio-on-call.png",
      title: "Active Audio Consultation",
      description: "Audio-only telemedicine option for situations where video isn't necessary or possible.",
    },
    {
      id: "video-calling",
      url: "/ash-b-images/mobile/video-calling.png",
      title: "Initiating Video Call",
      description: "Interface for starting a video consultation with a healthcare provider.",
    },
    {
      id: "video-call",
      url: "/ash-b-images/mobile/video-on-call.png",
      title: "Active Video Consultation",
      description: "High-quality video consultation interface for virtual appointments and remote diagnoses.",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <PageHeader
        title="ASH B"
        subtitle="Healthcare Management Platform"
        description="A comprehensive healthcare management platform designed to streamline patient care and administrative workflows."
      />

      {/* Hero Image */}
      <div className="mt-8 mb-16 relative rounded-xl overflow-hidden h-[500px]">
        <img
          src="/ash-b-images/project-thumbnail.png"
          alt="ASH B Healthcare Platform"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Client</h3>
            <p className="text-gray-700 dark:text-gray-300">ASH B Healthcare Solutions</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-gray-700 dark:text-gray-300">January 2022 - June 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Role</h3>
            <p className="text-gray-700 dark:text-gray-300">Lead Product Manager</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "MongoDB", "Express", "Figma", "AWS", "Socket.io"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge and Solution */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          ASH B needed a comprehensive healthcare management platform that could streamline patient care, simplify
          administrative workflows, and ensure health compliance while providing an intuitive user experience for both
          healthcare providers and patients.
        </p>

        <h2 className="text-3xl font-bold mb-6">The Solution</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          I led a team to design and develop a fully integrated healthcare management platform with features including:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Intuitive dashboard for quick access to patient information and key metrics</li>
          <li>Appointment scheduling system with calendar integration</li>
          <li>Secure messaging for patient-provider communication</li>
          <li>Electronic health records management</li>
          <li>Telemedicine capabilities including video and audio consultations</li>
          <li>Mobile applications for both providers and patients</li>
          <li>Analytics and reporting tools for practice management</li>
        </ul>
      </section>

      {/* Desktop Screenshots - Static Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Desktop Application</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/ash-b-images/desktop/dashboard.png" alt="Dashboard Interface" className="w-full h-auto" />
            <div className="p-4 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-medium mb-2">Dashboard</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive dashboard with patient requests and appointment overview.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/ash-b-images/desktop/schedule.png" alt="Schedule Interface" className="w-full h-auto" />
            <div className="p-4 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-medium mb-2">Schedule</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Appointment scheduling with patient information and communication options.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/ash-b-images/desktop/telemedicine.png" alt="Telemedicine Interface" className="w-full h-auto" />
            <div className="p-4 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-medium mb-2">Telemedicine</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Video consultation interface with patient records and prescription tools.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm">
              <h4 className="font-medium mb-2">Unified Navigation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Consistent sidebar navigation across all screens provides quick access to overview, schedule, messaging,
                pharmacy, and account settings.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm">
              <h4 className="font-medium mb-2">Patient Context</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Patient information is prominently displayed in each view, ensuring doctors always have the relevant
                context for clinical decision-making.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm">
              <h4 className="font-medium mb-2">Integrated Communication</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Multiple communication channels (chat, audio, video) are seamlessly integrated, allowing doctors to
                choose the most appropriate method for each consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Screenshots */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Mobile Application</h2>
        <MobileScreenGallery screens={mobileScreenshots} projectSlug="ash-b" />
      </section>

      {/* Design Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Design Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Research & Discovery</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We conducted extensive user research with healthcare providers and patients to understand their needs,
              pain points, and workflows. This included interviews, surveys, and shadowing sessions in clinical
              environments.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Wireframing & Prototyping</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Based on research insights, we created low-fidelity wireframes to establish the information architecture
              and user flows. These were refined into interactive prototypes for initial user testing.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Visual Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We developed a clean, professional design system with a focus on accessibility and readability. The color
              palette was chosen to reduce eye strain during long usage sessions, with clear visual hierarchies.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Testing & Iteration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We conducted multiple rounds of usability testing with healthcare professionals, iterating on the design
              based on feedback. This ensured the platform met the complex needs of medical practices while remaining
              intuitive.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Our design process for ASH B involved extensive research into healthcare workflows and user needs. We
            conducted interviews with healthcare providers, administrators, and patients to understand pain points and
            opportunities for improvement.
          </p>
          <p>
            The design system was built with accessibility and efficiency in mind, using a color palette that promotes
            clarity and reduces eye strain during long usage sessions. The interface was designed to minimize clicks and
            streamline common tasks.
          </p>
          <p>
            We employed iterative testing with actual healthcare professionals to refine the user experience and ensure
            the platform met the complex needs of medical practices while remaining intuitive.
          </p>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects />
    </main>
  )
}
