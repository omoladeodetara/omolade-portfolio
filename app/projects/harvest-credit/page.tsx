import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RelatedProjects } from "@/components/related-projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, CreditCard, Globe, Zap } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Harvest Credit | Omolade Jordan Odetara",
  description:
    "An API platform connecting credit facilities to merchants, allowing users to pay with loans directly at checkout",
}

export default function HarvestCreditPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Harvest Credit</h1>
        <p className="text-xl text-muted-foreground">
          APIs connecting credit facilities to merchants, enabling seamless loan-powered purchases
        </p>
      </div>

      <Alert className="mb-8 border-amber-500">
        <AlertCircle className="h-4 w-4 text-amber-500" />
        <AlertTitle>Project Status</AlertTitle>
        <AlertDescription>
          This project was at the prototyping stage and was submitted as an application for funding.
        </AlertDescription>
      </Alert>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/harvest-credit-images/hero-image.png')] bg-cover bg-center"></div>
        </div>
        <div className="text-center text-white p-8 relative z-10">
          <h2 className="text-3xl font-bold mb-4">HARVEST CREDIT</h2>
          <h3 className="text-xl mb-2">SEAMLESS CREDIT AT CHECKOUT</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Connecting merchants and lenders to provide instant credit options at the point of purchase
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              Harvest Credit is an API platform that connects credit facilities to merchants, allowing users to choose
              to pay through one of their listed loan providers directly at checkout. This eliminates the traditional
              multi-step process of applying for loans and then making purchases, creating a seamless experience for
              consumers while increasing conversion rates for merchants.
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CreditCard className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Instant Credit</h3>
                  <p className="text-sm text-muted-foreground">
                    Access multiple loan options at the point of purchase without leaving the merchant's site
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 text-teal-600 dark:text-teal-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Merchant Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Simple API integration for merchants to offer multiple financing options to their customers
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-cyan-200 dark:border-cyan-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Zap className="h-10 w-10 text-cyan-600 dark:text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Streamlined Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Reducing a 6-step loan-to-purchase process to just 2 steps, improving conversion rates
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>The Problem</h2>
            <p>
              In Nigeria and many emerging markets, the traditional process of using loans for purchases is cumbersome
              and inefficient:
            </p>
            <ol>
              <li>Users must individually open each loan app to apply for a loan</li>
              <li>They wait for the loan to be disbursed into their bank account</li>
              <li>They then transfer the money to the merchant's account</li>
            </ol>
            <p>
              This multi-step process creates friction, leads to abandoned purchases, and provides lenders with limited
              visibility into how their loans are actually being used.
            </p>

            <h2>Our Solution</h2>
            <p>
              Harvest Credit bridges loan/credit providers, payment processors, and merchants through a unified API
              platform. When a user is checking out on an e-commerce site, they can:
            </p>
            <ol>
              <li>Select "Pay with Harvest Credit" at checkout</li>
              <li>Choose from available loan providers they're pre-approved with</li>
              <li>Complete their purchase without leaving the merchant's site</li>
            </ol>
            <p>
              The loan provider pays the merchant directly, eliminating the need for funds to first be disbursed to the
              borrower's bank account. This creates a win-win-win situation:
            </p>
            <ul>
              <li>
                <strong>For consumers:</strong> A faster, more convenient way to use credit for purchases
              </li>
              <li>
                <strong>For merchants:</strong> Higher conversion rates and average order values
              </li>
              <li>
                <strong>For lenders:</strong> Increased loan volume and better visibility into loan usage
              </li>
            </ul>

            <h2>Market Opportunity</h2>
            <p>
              Nigeria has a rapidly growing fintech ecosystem with approximately 250 fintech companies, yet none have
              built this specific product. The opportunity is substantial:
            </p>
            <ul>
              <li>
                Thousands of loans between $10 and $400 with interest rates of 5% to 15% are disbursed daily in Nigeria
              </li>
              <li>
                E-commerce is growing rapidly in the region, with consumers increasingly seeking flexible payment
                options
              </li>
              <li>
                Existing loan providers and payment processors can benefit from the interoperability Harvest Credit
                provides
              </li>
            </ul>

            <h2>Business Model</h2>
            <p>
              Harvest Credit generates revenue by taking 4% of the interest that loan providers receive on transactions
              facilitated through our platform. Based on market analysis, we projected potential revenue of $6,833
              within the first three weeks of charging commissions.
            </p>
            <p>
              Beyond transaction revenue, Harvest Credit collects valuable data on consumer spending behavior and
              patterns. Unlike the self-reported "reason for loan" data that lenders typically collect, our platform
              provides real-time insights on actual spending, creating additional value for our lending partners and
              potential for data monetization in the future.
            </p>

            <h2>Technical Implementation</h2>
            <p>The Harvest Credit platform consists of several key components:</p>
            <ul>
              <li>
                <strong>Merchant API:</strong> Easy integration for e-commerce platforms and retail point-of-sale
                systems
              </li>
              <li>
                <strong>Lender Integration:</strong> Secure connections to loan provider systems for real-time approval
                and disbursement
              </li>
              <li>
                <strong>User Authentication:</strong> Seamless verification of user identity across the platform
              </li>
              <li>
                <strong>Payment Processing:</strong> Secure handling of transactions between lenders and merchants
              </li>
              <li>
                <strong>Analytics Dashboard:</strong> Comprehensive reporting for merchants and lenders
              </li>
            </ul>

            <h2>Go-to-Market Strategy</h2>
            <p>Our approach to market entry focused on:</p>
            <ol>
              <li>
                <strong>Initial Partnerships:</strong> Securing agreements with key loan providers and e-commerce
                platforms in Nigeria
              </li>
              <li>
                <strong>Vertical Focus:</strong> Targeting high-value purchase categories like electronics, education,
                and home appliances
              </li>
              <li>
                <strong>Expansion Plan:</strong> Starting in Nigeria with plans to expand to other African markets with
                similar needs
              </li>
            </ol>

            <h2>Project Application</h2>
            <p>
              Harvest Credit was submitted as an application for startup funding. The application highlighted the unique
              value proposition, market opportunity, and potential for growth in the Nigerian fintech ecosystem.
            </p>

            <h2>Challenges and Considerations</h2>
            <p>Key challenges for the implementation of Harvest Credit included:</p>
            <ul>
              <li>Navigating financial regulations in Nigeria</li>
              <li>Building trust with both merchants and loan providers</li>
              <li>Developing secure systems for handling financial transactions</li>
              <li>Creating a seamless user experience across different merchant platforms</li>
              <li>Managing risk related to loan defaults and fraudulent activities</li>
            </ul>

            <h2>Future Vision</h2>
            <p>
              While Harvest Credit began with a focus on the Nigerian market, the concept has potential for broader
              application in markets where traditional credit access is limited but smartphone penetration is high.
              Future development could include:
            </p>
            <ul>
              <li>Expansion to additional African markets</li>
              <li>Integration with more types of credit providers beyond traditional lenders</li>
              <li>Development of a consumer-facing app for managing credit options across merchants</li>
              <li>Advanced data analytics to help lenders better assess risk and tailor offerings</li>
            </ul>
          </div>
        </div>
        <div>
          <ProjectDetailsHarvestCredit />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}

function ProjectDetailsHarvestCredit() {
  return (
    <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
      <h3 className="text-xl font-bold">Project Details</h3>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Role</h4>
        <p>Product Strategy & Fintech Consultant</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
        <p>2020</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "API Development",
            "Fintech",
            "Payment Processing",
            "Credit Systems",
            "E-commerce Integration",
            "Financial APIs",
            "User Authentication",
            "Data Analytics",
            "Product Strategy",
            "UX/UI Design",
          ].map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Status</h4>
        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
          Prototype
        </Badge>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Location</h4>
        <p>Lagos, Nigeria</p>
      </div>
    </div>
  )
}
