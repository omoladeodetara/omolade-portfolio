import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Twitter, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const getCommitteeMemberData = (id: string) => {
  const committeeMembers = [
    {
      id: 1,
      name: "Timothy Cichan",
      title: "Committee Chair",
      organization: "Lockheed Martin",
      bio: "Timothy Cichan is the Space Exploration Architect at Lockheed Martin, where he leads advanced program formulation for human spaceflight and robotic exploration missions.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-timothy.jpg",
      expertise: [
        "Space exploration architecture",
        "Human spaceflight systems",
        "Lunar mission planning",
        "Systems engineering",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/timothy-cichan-4224b72a/",
        website: "https://www.lockheedmartin.com/space",
      },
      isModerator: true,
    },
    {
      id: 2,
      name: "Wesley Fuhrman",
      title: "Technical Lead",
      organization: "Johns Hopkins Applied Physics Laboratory",
      bio: "Wesley Fuhrman is a physicist at Johns Hopkins Applied Physics Laboratory with expertise in quantum materials and condensed matter physics, applying his analytical skills to space systems and lunar science.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-wesley.jpg",
      expertise: ["Quantum materials physics", "Materials characterization", "Analytical methods", "Data analysis"],
      social: {
        linkedin: "https://www.linkedin.com/in/wesley-fuhrman-6b0a1550/",
        website: "https://www.jhuapl.edu/",
      },
    },
    {
      id: 3,
      name: "Anna Shin",
      title: "Standards Working Group Lead",
      organization: "Johns Hopkins Applied Physics Laboratory",
      bio: "Anna Shin is a systems engineer at Johns Hopkins Applied Physics Laboratory with experience in space mission development and international technical standards.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-anna.jpg", // Update from "/images/organizer-anna.png" to "/images/organizer-anna.jpg"
      expertise: [
        "Systems engineering",
        "Technical standards development",
        "Space mission operations",
        "Interoperability frameworks",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/anna-shin-6887435/",
        website: "https://www.jhuapl.edu/",
      },
    },
    {
      id: 4,
      name: "Marchel Holle",
      title: "Industry Liaison",
      organization: "ispace",
      bio: "Marchel Holle is the Director of Business Development at ispace, a lunar exploration company, where he leads partnership initiatives and commercial strategy for lunar missions.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/speaker-hiroshi.jpg",
      expertise: [
        "Business development",
        "Commercial lunar missions",
        "Partnership strategy",
        "Space commercialization",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/marchel-holle/",
        website: "https://ispace-inc.com/",
      },
      isModerator: true,
    },
    {
      id: 5,
      name: "Shreya Santra",
      title: "Academic Coordinator",
      organization: "Tohoku University",
      bio: "Shreya Santra is an Associate Professor at Tohoku University specializing in lunar geology and in-situ resource utilization, with research focused on regolith properties and lunar materials processing.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/speaker-krystal.jpg",
      expertise: [
        "Lunar geology",
        "In-situ resource utilization",
        "Regolith characterization",
        "Lunar materials processing",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/shreya-santra/",
        website: "https://www.tohoku.ac.jp/en/",
      },
    },
    {
      id: 6,
      name: "Bernd Hoefer",
      title: "Financial Advisor",
      organization: "A9C Capital",
      bio: "Dr. Bernd Hoefer is the founder and CEO of A9C Capital, with extensive experience in investment strategy and financial advisory for technology and space ventures.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-bernd.jpg",
      expertise: ["Investment strategy", "Space venture financing", "Financial advisory", "Economic analysis"],
      social: {
        linkedin: "https://www.linkedin.com/in/dr-bernd-j-hoefer-36b24b24a/",
        website: "https://a9c-capital.com/",
      },
    },
    {
      id: 7,
      name: "Ekaterina Seltikova",
      title: "International Cooperation Coordinator",
      organization: "Advanced Space Concepts and Technologies",
      bio: "Ekaterina Seltikova is a policy advisor with the Global Expert Group on Sustainable Lunar Activities (GEGSLA), specializing in international space policy and diplomatic relations.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-ekaterina.jpg", // Updated from "/images/speaker-quan.jpg"
      expertise: [
        "International space policy",
        "Space diplomacy",
        "Multilateral negotiations",
        "Cooperation frameworks",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/ekaterina-seltikova/",
        website: "https://moonvillageassociation.org/gegsla/gegsla-team/",
      },
      isModerator: true,
    },
    {
      id: 8,
      name: "Omolade Odetara",
      title: "Communications Lead",
      organization: "GEGSLA",
      bio: "Omolade Odetara is a communications specialist with the Global Expert Group on Sustainable Lunar Activities (GEGSLA), focusing on science communication and international outreach.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-omolade.jpg",
      expertise: [
        "API ecosystems",
        "Space industry platform development",
        "International space collaboration",
        "Space entrepreneurship and startups",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/omoladeodetara/",
        website: "https://moonvillageassociation.org/gegsla/gegsla-team/",
      },
    },
    {
      id: 9,
      name: "Hasan Galal",
      title: "Database Standards Expert",
      organization: "NARSS",
      bio: "Dr. Hasan Galal is a researcher at the National Authority for Remote Sensing and Space Sciences (NARSS) in Egypt, specializing in geospatial databases and lunar mapping standards.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lac  leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-hasan.jpg",
      expertise: [
        "Geospatial databases",
        "Lunar mapping standards",
        "Spatial data infrastructure",
        "Geographic information systems",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/hasan-galal-08826540/",
        website: "http://www.narss.sci.eg/",
      },
    },
    {
      id: 10,
      name: "Daniel Meidenbauer",
      title: "Technical Coordinator",
      organization: "Johns Hopkins Applied Physics Laboratory",
      bio: "Daniel Meidenbauer is a systems engineer at Johns Hopkins Applied Physics Laboratory with expertise in space mission architecture and technical integration for complex systems.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-daniel.jpg",
      expertise: ["Systems engineering", "Mission architecture", "Technical integration", "Requirements analysis"],
      social: {
        linkedin: "https://www.linkedin.com/in/daniel-meidenbauer-00952b49/",
        website: "https://www.jhuapl.edu/",
      },
    },
    {
      id: 11,
      name: "Jamie Porter",
      title: "Logistics Coordinator",
      organization: "Johns Hopkins Applied Physics Laboratory",
      bio: "Jamie Porter is an event and program coordinator at Johns Hopkins Applied Physics Laboratory, specializing in technical conferences and virtual collaboration platforms.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-jamie.jpg", // Updated from "/images/organizer-3.jpg"
      expertise: [
        "Technical event coordination",
        "Virtual collaboration platforms",
        "Program management",
        "Participant experience design",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/jamie-porter-203400281/",
        website: "https://www.jhuapl.edu/",
      },
    },
    {
      id: 12,
      name: "Kristin Jaburek",
      title: "Workshop Facilitator",
      organization: "Johns Hopkins Applied Physics Laboratory",
      bio: "Dr. Kristin Jaburek is a collaboration specialist at Johns Hopkins Applied Physics Laboratory with expertise in facilitating technical working groups and consensus-building processes.",
      fullBio: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.

        Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Maecenas lacinia.

        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero.
      `,
      image: "/images/organizer-kristin.jpg",
      expertise: [
        "Technical facilitation",
        "Consensus-building",
        "Collaborative process design",
        "Virtual facilitation methods",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/kristinljaburek/",
        website: "https://www.jhuapl.edu/",
      },
      isModerator: true,
    },
  ]

  return committeeMembers.find((member) => member.id === Number.parseInt(id)) || committeeMembers[0]
}

export default function CommitteeMemberDetailPage({ params }: { params: { id: string } }) {
  const committeeMember = getCommitteeMemberData(params.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/about">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Committee
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
              <Image
                src={committeeMember.image || "/placeholder.svg"}
                alt={committeeMember.name}
                fill
                className="object-cover"
              />
              {committeeMember.isModerator && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary">Moderator</Badge>
                </div>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{committeeMember.name}</h1>
            <p className="text-muted-foreground mb-6">{committeeMember.organization}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {committeeMember.social.twitter && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={committeeMember.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Link>
                </Button>
              )}
              {committeeMember.social.linkedin && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={committeeMember.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              )}
              {committeeMember.social.website && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={committeeMember.social.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Website
                  </Link>
                </Button>
              )}
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-3">Areas of Expertise</h3>
              <ul className="space-y-2">
                {committeeMember.expertise.map((expertise, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">{expertise}</span>
                  </li>
                ))}
              </ul>
            </div>
            {committeeMember.isModerator && (
              <div className="mt-8">
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Workshop Moderator</h3>
                  <p className="text-sm text-muted-foreground">
                    As a workshop moderator, {committeeMember.name} will facilitate discussions and help guide the
                    collaborative process.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Biography</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {committeeMember.fullBio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Committee Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                .filter((id) => id !== Number.parseInt(params.id))
                .slice(0, 2)
                .map((id) => {
                  const relatedMember = getCommitteeMemberData(id.toString())
                  return (
                    <Card key={id} className="overflow-hidden">
                      <div className="flex items-center p-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={relatedMember.image || "/placeholder.svg"}
                            alt={relatedMember.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold truncate">{relatedMember.name}</h3>
                          <p className="text-sm text-muted-foreground truncate">{relatedMember.organization}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/committee/${id}`}>View</Link>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
