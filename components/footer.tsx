import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 print:hidden">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl inline-block mb-4">
              LOGIC<span className="text-primary">/</span>LSIC<span className="text-primary">/</span>GEGSLA
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              A collaborative workshop focused on lunar activities database, interoperability, cooperation, and
              standards.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:info@lunarworkshop.org" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://moonvillageassociation.org/gegsla/gegsla-team/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GEGSLA Team"
                >
                  <Globe className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-muted-foreground hover:text-foreground transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-muted-foreground hover:text-foreground transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/engagement" className="text-muted-foreground hover:text-foreground transition-colors">
                  Engagement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates about the workshop.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            © {new Date().getFullYear()} LOGIC/LSIC/GEGSLA Virtual Workshop. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <Link
              href="https://logic.jhuapl.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:underline"
            >
              LOGIC
            </Link>
            <span>|</span>
            <Link
              href="https://lsic.jhuapl.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:underline"
            >
              LSIC
            </Link>
            <span>|</span>
            <Link
              href="https://moonvillageassociation.org/gegsla/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:underline"
            >
              GEGSLA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
