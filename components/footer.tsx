import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-2">
          <Link href="/" className="font-bold">
            Omolade Jordan Odetara
          </Link>
          <p className="text-sm text-muted-foreground">&copy; {currentYear} All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ArtQuake" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/omoladeodetara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://omoladeodetara.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hashnode Blog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 337 337"
                fill="none"
                className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
