import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate designer and developer with over 5 years of experience creating digital products that
                users love. I specialize in user interface design, user experience, and front-end development.
              </p>
            </div>
            <div>
              <Button variant="link" asChild className="p-0 h-auto font-medium">
                <Link href="/about" className="group">
                  Learn more about me
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="font-bold">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">Creating intuitive and beautiful user interfaces</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="font-bold">Web Development</h3>
                <p className="text-sm text-muted-foreground">Building responsive and performant websites</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="font-bold">Brand Identity</h3>
                <p className="text-sm text-muted-foreground">Crafting memorable and cohesive brand experiences</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="font-bold">Consulting</h3>
                <p className="text-sm text-muted-foreground">Providing expert advice on digital strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
