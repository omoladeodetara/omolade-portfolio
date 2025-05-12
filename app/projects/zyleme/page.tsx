import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { MobileScreenGallery } from "@/components/mobile-screen-gallery"
import { RelatedProjects } from "@/components/related-projects"

const mobileScreens = [
  "/zyleme-images/mobile/learning-dashboard.png",
  "/zyleme-images/mobile/course-view.png",
  "/zyleme-images/mobile/assessment.png",
  "/zyleme-images/mobile/certificates.png",
  "/zyleme-images/mobile/notifications.png",
]

const desktopScreens = ["/zyleme-images/desktop/course-builder.png"]

export default function ZylemePage() {
  const relatedProjects = [
    {
      title: "MoniZoom",
      slug: "monizoom",
      category: "Healthcare",
      thumbnail: "/images/projects/monizoom/app-interface.png",
    },
    {
      title: "Founders & Innovators",
      slug: "founders-and-innovators",
      category: "Education",
      thumbnail: "/project-management-team.png",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <PageHeader
        title="Zyleme"
        subtitle="Learning Experience Platform"
        description="A comprehensive digital learning platform designed to deliver engaging educational experiences and track learner progress."
      />

      {/* Hero Image */}
      <div className="mt-8 mb-16 relative rounded-xl overflow-hidden h-[500px]">
        <Image
          src="/zyleme-images/desktop/course-builder.png"
          alt="Zyleme Learning Platform"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Client</h3>
            <p className="text-gray-700 dark:text-gray-300">Zyleme Education Technologies</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-gray-700 dark:text-gray-300">September 2021 - February 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Role</h3>
            <p className="text-gray-700 dark:text-gray-300">UX/UI Lead, Educational Experience Designer</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "React Native", "Node.js", "PostgreSQL", "GraphQL", "AWS", "Firebase"].map((tech) => (
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
          Zyleme needed to create a learning experience platform that could deliver engaging educational content,
          provide intuitive course authoring tools, and offer detailed analytics on learner progress while maintaining
          high performance across various devices.
        </p>

        <h2 className="text-3xl font-bold mb-6">The Solution</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          We designed and developed a comprehensive learning platform with features including:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Intuitive course builder with drag-and-drop content management</li>
          <li>Interactive learning materials with support for various media types</li>
          <li>Adaptive learning paths based on learner performance</li>
          <li>Comprehensive assessment engine with multiple question types</li>
          <li>Detailed analytics dashboard for instructors and administrators</li>
          <li>Mobile learning applications for iOS and Android</li>
          <li>Social learning features including discussion forums and peer reviews</li>
          <li>Integration capabilities with existing LMS and HR systems</li>
        </ul>
      </section>

      {/* Mobile Application */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Mobile Application</h2>
        <MobileScreenGallery screens={mobileScreens} projectSlug="zyleme" />
      </section>

      {/* Course Builder */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Course Builder</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
          <Image
            src="/zyleme-images/desktop/course-builder.png"
            alt="Zyleme Course Builder Interface"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-6 text-gray-700 dark:text-gray-300">
          <p>
            The Zyleme Course Builder provides an intuitive drag-and-drop interface for instructional designers to
            create engaging learning experiences. The platform supports various content types including video,
            interactive assessments, documents, and SCORM packages, making it flexible for different educational needs.
          </p>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />
    </main>
  )
}
