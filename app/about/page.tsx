import PageHeader from "@/components/page-header"
import AboutHero from "@/components/sections/about-hero"
import Skills from "@/components/sections/skills"
import TimelineSection, { type TimelineItem } from "@/components/sections/timeline"
import Values from "@/components/sections/values"

export default function AboutPage() {
  // Work experiences data
  const workExperiences: TimelineItem[] = [
    {
      id: "work-1",
      type: "work",
      title: "Senior Software Engineer",
      organization: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Leading the development of cloud-based solutions for enterprise clients. Architected and implemented scalable microservices using Node.js and TypeScript. Mentored junior developers and established best practices for the engineering team.",
      responsibilities: [
        "Lead a team of 5 developers working on cloud infrastructure",
        "Design and implement RESTful APIs and microservices",
        "Collaborate with product managers to define feature specifications",
        "Conduct code reviews and provide technical guidance",
      ],
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Implemented CI/CD pipeline that decreased deployment time by 60%",
        "Led migration from monolith to microservices architecture",
      ],
      technologies: ["TypeScript", "Node.js", "React", "AWS", "Docker", "Kubernetes"],
      links: [{ label: "Company Website", url: "https://example.com/tech-innovations" }],
      linkedinUrl: "https://www.linkedin.com/company/tech-innovations-inc",
    },
    {
      id: "work-2",
      type: "work",
      title: "Software Engineer",
      organization: "DataViz Solutions",
      location: "Boston, MA",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Developed data visualization tools and dashboards for financial services clients. Built front-end applications using React and D3.js. Collaborated with data scientists to implement complex analytical features.",
      responsibilities: [
        "Developed interactive data visualization components",
        "Optimized front-end performance for large datasets",
        "Integrated with various financial data APIs",
        "Participated in agile development process",
      ],
      achievements: [
        "Created a reusable chart library that reduced development time by 30%",
        "Implemented real-time data streaming that became a key selling point",
        'Received "Engineer of the Quarter" award twice',
      ],
      technologies: ["JavaScript", "React", "D3.js", "GraphQL", "Python"],
      links: [{ label: "Project Demo", url: "https://example.com/dataviz-demo" }],
      linkedinUrl: "https://www.linkedin.com/company/dataviz-solutions",
    },
    {
      id: "work-3",
      type: "work",
      title: "Junior Developer",
      organization: "WebSoft Systems",
      location: "Chicago, IL",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description:
        "Started as an intern and was quickly promoted to a full-time position. Worked on web applications for small to medium businesses. Gained experience in full-stack development using PHP, MySQL, and JavaScript.",
      responsibilities: [
        "Developed and maintained client websites",
        "Implemented responsive designs from mockups",
        "Fixed bugs and added features to existing applications",
        "Assisted with database design and optimization",
      ],
      achievements: [
        "Promoted from intern to junior developer in 3 months",
        "Built an internal tool that automated reporting tasks",
        "Reduced page load time by 25% through optimization techniques",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "jQuery"],
      links: [{ label: "Portfolio", url: "https://example.com/early-work" }],
      linkedinUrl: "https://www.linkedin.com/company/websoft-systems",
    },
  ]

  // Side projects data
  const sideProjects: TimelineItem[] = [
    {
      id: "project-1",
      type: "project",
      title: "Open Source Contributor",
      organization: "React Ecosystem",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Active contributor to several open-source projects in the React ecosystem. Focused on improving documentation, fixing bugs, and adding new features.",
      technologies: ["React", "TypeScript", "Jest"],
      links: [{ label: "GitHub Profile", url: "https://github.com/yourusername" }],
      linkedinUrl: "https://www.linkedin.com/company/react",
    },
    {
      id: "project-2",
      type: "project",
      title: "Mobile App Developer",
      organization: "Fitness Tracker App",
      startDate: "Jun 2019",
      endDate: "Dec 2020",
      description:
        "Developed a fitness tracking mobile application that allows users to record workouts, track progress, and set goals.",
      technologies: ["React Native", "Firebase", "Redux"],
      links: [{ label: "App Store", url: "https://example.com/fitness-app" }],
    },
    {
      id: "project-3",
      type: "project",
      title: "Technical Blogger",
      organization: "Dev.to & Medium",
      startDate: "Mar 2018",
      endDate: "Present",
      description:
        "Write technical articles and tutorials on web development, focusing on JavaScript frameworks and best practices.",
      links: [{ label: "Blog", url: "https://dev.to/yourusername" }],
    },
  ]

  // Volunteer work data
  const volunteerWork: TimelineItem[] = [
    {
      id: "volunteer-1",
      type: "volunteer",
      title: "Mentor",
      organization: "Code for Good",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Mentor aspiring developers from underrepresented groups in tech. Provide guidance on projects, career advice, and technical support.",
      links: [{ label: "Organization", url: "https://example.com/code-for-good" }],
      linkedinUrl: "https://www.linkedin.com/company/code-for-good",
    },
    {
      id: "volunteer-2",
      type: "volunteer",
      title: "Workshop Instructor",
      organization: "Local Tech Meetup",
      startDate: "Sep 2019",
      endDate: "Dec 2020",
      description:
        "Conducted monthly workshops on web development topics for beginners. Created hands-on exercises and learning materials.",
      links: [{ label: "Meetup Group", url: "https://meetup.com/local-tech" }],
      linkedinUrl: "https://www.linkedin.com/company/local-tech-meetup",
    },
    {
      id: "volunteer-3",
      type: "volunteer",
      title: "Tech Lead",
      organization: "Nonprofit Website Project",
      startDate: "May 2017",
      endDate: "Apr 2018",
      description:
        "Led a team of volunteers to redesign and develop a website for a local nonprofit organization. Managed project timeline and delegated tasks.",
      technologies: ["WordPress", "PHP", "JavaScript"],
      links: [{ label: "Project", url: "https://example.com/nonprofit" }],
      linkedinUrl: "https://www.linkedin.com/company/nonprofit-website-project",
    },
  ]

  return (
    <div>
      <PageHeader title="About Me" description="Learn about my background, skills, and professional journey" />

      <AboutHero />
      <Skills />
      <TimelineSection workExperiences={workExperiences} sideProjects={sideProjects} volunteerWork={volunteerWork} />
      <Values />
    </div>
  )
}
