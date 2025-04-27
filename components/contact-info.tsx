import { Mail, MapPin, Phone, Github } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="text-muted-foreground">
          I'm always interested in new projects and opportunities. Feel free to reach out if you have any questions or
          just want to say hello.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Mail className="h-5 w-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Email</h4>
            <p className="text-muted-foreground">
              <a href="mailto:omoladeodetara@gmail.com" className="hover:underline">
                omoladeodetara@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="h-5 w-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Phone</h4>
            <p className="text-muted-foreground">Available upon request</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Location</h4>
            <p className="text-muted-foreground">France (Previously Lagos, Nigeria)</p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <h4 className="font-medium mb-4">Follow Me</h4>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/omoladeodetara"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/ArtQuake"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://omoladeodetara.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Hashnode Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 337 337"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
