export function ProjectGallery() {
  // Mock data - in a real app, fetch from API/CMS
  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800&query=project detail 1",
      alt: "Project image 1",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800&query=project detail 2",
      alt: "Project image 2",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800&query=project detail 3",
      alt: "Project image 3",
    },
  ]

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
