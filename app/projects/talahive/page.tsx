import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "TalaHive - Projects - Lunatech Research",
  description:
    "TalaHive: Supporting visual artists with professional-grade facilities and a supportive community environment.",
}

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">TalaHive</h1>

      <div className="mb-8">
        <Image
          src="/images/talahive/talahive-logo.png"
          alt="TalaHive Logo"
          width={300}
          height={150}
          className="mx-auto"
        />
      </div>

      <p className="mb-4">
        TalaHive was a project focused on creating a shared studio space and community for visual artists. The goal was
        to provide access to professional-grade equipment, resources, and a collaborative environment to foster
        creativity and growth.
      </p>

      <p className="mb-4">
        In 2019, TalaHive was submitted as an application for startup funding, showcasing the business model and vision
        for supporting visual artists with professional-grade facilities and a supportive community environment.
      </p>

      <p className="mb-4">
        The project involved designing the studio layout, sourcing equipment, developing a membership model, and
        building a community engagement strategy.
      </p>

      <p className="mb-4">
        Although the project didn't proceed to full implementation, it provided valuable insights into the needs of
        visual artists and the challenges of creating a sustainable shared studio space.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Learn More</h2>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Watch Application Video
        </Link>
      </div>
    </div>
  )
}
