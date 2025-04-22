export function AboutHero() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">My Story</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm a passionate designer and developer with over 5 years of experience creating digital products that users
            love. I specialize in user interface design, user experience, and front-end development.
          </p>
          <p>
            My journey began as a self-taught designer, learning the fundamentals of design and coding through online
            resources and personal projects. Over the years, I've had the opportunity to work with various clients and
            companies, from startups to established businesses, helping them build and improve their digital presence.
          </p>
          <p>
            I believe in creating designs that are not only visually appealing but also functional and accessible to all
            users. My approach combines creativity with strategic thinking to deliver solutions that meet both user
            needs and business goals.
          </p>
        </div>
      </div>
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img src="/confident-professional.png" alt="About me" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

// Add default export
export default AboutHero
