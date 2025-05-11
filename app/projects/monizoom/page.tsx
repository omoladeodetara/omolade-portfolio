import { PageHeader } from "@/components/page-header"
import { RelatedProjects } from "@/components/related-projects"

export default function MoniZoomPage() {
  const relatedProjects = [
    {
      title: "Harvest Credit",
      slug: "harvest-credit",
      category: "Fintech",
      thumbnail: "/harvest-credit-images/project-thumbnail.png",
    },
    {
      title: "Moneybase",
      slug: "moneybase",
      category: "Fintech",
      thumbnail: "/moneybase-images/project-thumbnail.png",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <PageHeader
        title="MoniZoom"
        subtitle="Bank Without Borders"
        description="A global fintech platform enabling fast, secure, and borderless financial transactions for individuals and businesses across 180+ countries."
      />

      {/* Hero Image - Using the specific image requested */}
      <div className="mt-8 mb-16 relative rounded-xl overflow-hidden">
        <img
          src="/monizoom-images/monizoom-hero-1.png"
          alt="MoniZoom - Bank Without Borders"
          className="w-full h-auto"
          style={{ maxHeight: "500px", objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Client</h3>
            <p className="text-gray-700 dark:text-gray-300">MoniZoom</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-gray-700 dark:text-gray-300">March 2021 - June 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Role</h3>
            <p className="text-gray-700 dark:text-gray-300">Lead Product Manager</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Figma",
              "Payment APIs",
              "PCI DSS",
              "KYC/AML",
              "Multi-currency",
              "Authentication",
              "Crypto Swap",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge and Solution */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Traditional banking systems often impose significant barriers to cross-border transactions, including high
          fees, slow processing times, and limited currency support. MoniZoom needed to create a borderless banking
          platform that would simplify global financial operations, reduce fees, and provide a seamless user experience
          for individuals and businesses operating internationally across 180+ countries and supporting 120+ currencies.
        </p>

        <h2 className="text-3xl font-bold mb-6">The Solution</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          We designed and developed a comprehensive fintech platform with the following key features:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Multi-currency wallets supporting Naira, Euro, Dollar, Pounds, and more</li>
          <li>Fast payments with transfers completed in less than two minutes</li>
          <li>End-to-end encryption and industry-standard security practices (PCI DSS compliance)</li>
          <li>Comprehensive KYC/AML processes with identity verification</li>
          <li>Virtual and physical cards for global transactions</li>
          <li>Currency conversion with competitive exchange rates</li>
          <li>International transfers via SWAP, Stellar (blockchain), and Swift</li>
          <li>Crypto swap as a faster, lower-cost alternative to traditional ACH transfers</li>
          <li>Digital banking services including savings and loans</li>
          <li>24/7 customer support via multiple channels</li>
        </ul>
      </section>

      {/* User Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">User Experience</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          The MoniZoom platform was designed with a focus on simplicity and accessibility:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p>Simple, clear, and accessible processes from any device, with intuitive navigation and user flows.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Faster Payments</h3>
            <p>High-performance technology enables transfers in less than two minutes, with real-time tracking.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">100% Secure</h3>
            <p>End-to-end encryption and industry-standard security practices ensure confidentiality and safety.</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Target Audience</h2>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          MoniZoom provides tailored payment solutions for diverse user groups:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Corporates</h3>
            <p className="text-sm">Global payment solutions for businesses of all sizes</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Students</h3>
            <p className="text-sm">Easy international transfers for tuition and living expenses</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Professionals</h3>
            <p className="text-sm">Seamless currency management for global careers</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Shoppers</h3>
            <p className="text-sm">Secure online and onsite international payments</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Freelancers</h3>
            <p className="text-sm">Receive payments from global clients with low fees</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Online Sellers</h3>
            <p className="text-sm">Expand market reach with multi-currency support</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Affiliate Marketers</h3>
            <p className="text-sm">Collect commissions from international programs</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Travelers</h3>
            <p className="text-sm">Access funds globally with competitive exchange rates</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-medium">Global Coverage</td>
                <td className="py-3 px-4">180+ countries, 120+ currencies supported</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="py-3 px-4 font-medium">Payment Solutions</td>
                <td className="py-3 px-4">For individuals, businesses, freelancers, shoppers, students</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-medium">Security</td>
                <td className="py-3 px-4">PCI DSS, KYC/AML, encrypted transactions</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="py-3 px-4 font-medium">Digital Wallets</td>
                <td className="py-3 px-4">Multi-currency, virtual and physical cards</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-medium">Crypto Integration</td>
                <td className="py-3 px-4">Cryptocurrency swaps as an alternative to traditional ACH transfers</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="py-3 px-4 font-medium">Customer Support</td>
                <td className="py-3 px-4">24/7 via multiple channels</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-medium">Mobile App</td>
                <td className="py-3 px-4">Fast, convenient payments (coming soon)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />
    </main>
  )
}
