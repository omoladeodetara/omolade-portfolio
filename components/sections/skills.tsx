import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI Design", "UX Design", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"],
    },
    {
      title: "Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "VS Code", "Git", "GitHub"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Time Management",
        "Teamwork",
        "Adaptability",
        "Attention to Detail",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I've developed a diverse set of skills throughout my career, allowing me to tackle various aspects of the
          design and development process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Add default export
export default Skills
