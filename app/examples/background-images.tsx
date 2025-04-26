export default function BackgroundImagesExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Background Images Examples</h1>

      {/* Full-width background image with overlay */}
      <div className="relative py-24 mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/lunar-surface.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Workshop</h2>
          <p className="text-lg mb-6">
            Collaborate with experts from around the world to develop standards for lunar exploration.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium">Register Now</button>
        </div>
      </div>

      {/* Card with background image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="rounded-lg overflow-hidden relative h-64 flex items-end"
          style={{
            backgroundImage: "url('/images/lunar-mission.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Collaborative Sessions</h3>
            <p>Interactive breakout rooms and panel discussions.</p>
          </div>
        </div>

        <div
          className="rounded-lg overflow-hidden relative h-64 flex items-end"
          style={{
            backgroundImage: "url('/images/speaker-quan.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Expert Speakers</h3>
            <p>Learn from leading experts in lunar standardization.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
