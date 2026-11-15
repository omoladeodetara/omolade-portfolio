import type { Metadata } from "next"

import { ProjectHeader } from "@/components/project-header"

export const metadata: Metadata = {
  title: "Last Price | Omolade Jordan Odetara",
  description:
    "Price computation as a service: an API and MCP server that computes, verifies and negotiates prices for software and AI agents.",
}

const technologies = ["Next.js", "TypeScript", "OpenAPI", "MCP", "JSON Schema", "Postgres", "Vercel", "x402"]

const capabilities = [
  {
    title: "Compute",
    body: "Send a context (product type, costs, bounds, segment) and get back a price you can act on, from a built-in or custom pricing function.",
  },
  {
    title: "Verify",
    body: "Check whether a proposed price is sound against the same inputs before you charge it or pay it.",
  },
  {
    title: "Ask",
    body: "When inputs are missing, the API returns the questions an agent should put to its caller instead of guessing, then computes.",
  },
]

const links = [
  { label: "last-price.ai", url: "https://last-price.ai" },
  { label: "API reference", url: "https://last-price.ai/api-docs" },
  { label: "Demo videos", url: "https://last-price.ai/videos" },
  { label: "GitHub", url: "https://github.com/last-price-ai/last-price" },
]

export default function LastPricePage() {
  return (
    <main className="container py-10">
      <ProjectHeader
        title="Last Price"
        subtitle="Price computation as a service"
        description="An API and MCP server that computes, verifies and negotiates prices, for software and for the agents that buy and sell through it."
      />

      <div className="mt-8 mb-16 relative rounded-xl overflow-hidden border border-border">
        <img
          src="/last-price-images/last-price-homepage.png"
          alt="The last-price.ai homepage with a live compute request and its JSON response"
          className="w-full h-auto"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Client</h3>
            <p className="text-muted-foreground">Last Price (my company)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-muted-foreground">January 2026 - Present</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Role</h3>
            <p className="text-muted-foreground">Founder</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
        <p className="text-lg mb-4 text-muted-foreground">
          &ldquo;Wetin be your last price?&rdquo; In a Lagos market the price is not read off a label; it is worked out
          between buyer and seller. Software and AI agents now buy and sell on their own, but most of them still guess
          a price, or copy one, with nothing to check it against.
        </p>
        <h2 className="text-3xl font-bold mb-6 mt-12">The Solution</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          Last Price makes the price something you compute. One API call, or one MCP tool call from an agent, returns a
          price with its explanation and alternatives. Pricing functions run as a metered utility: providers register
          them, consumers pay per call, and routing picks a function by cost, latency or policy with fallbacks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div key={item.title} className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Built for agents</h2>
        <p className="text-lg text-muted-foreground">
          Everything an agent needs is machine-readable: an MCP server, an OpenAPI contract, an agent manifest and an
          llms.txt, all on the same host as the API. Agents register with one call and can start without a person in
          the loop.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Links</h2>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
