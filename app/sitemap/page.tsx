import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | Omolade Jordan Odetara",
  description: "A visual sitemap of Omolade Jordan Odetara's portfolio website",
}

export default function SitemapPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-primary hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-primary hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Pages</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc pl-5">
            <li>
              <Link href="/projects/stellarxplora" className="text-primary hover:underline">
                StellarXplora
              </Link>
            </li>
            <li>
              <Link href="/projects/bossbusworld" className="text-primary hover:underline">
                BossBusWorld
              </Link>
            </li>
            <li>
              <Link href="/projects/ash-b" className="text-primary hover:underline">
                Ash-B
              </Link>
            </li>
            <li>
              <Link href="/projects/moneybase" className="text-primary hover:underline">
                MoneyBase
              </Link>
            </li>
            <li>
              <Link href="/projects/nesthub" className="text-primary hover:underline">
                NestHub
              </Link>
            </li>
            <li>
              <Link href="/projects/monizoom" className="text-primary hover:underline">
                MoniZoom
              </Link>
            </li>
            <li>
              <Link href="/projects/zyleme" className="text-primary hover:underline">
                Zyleme
              </Link>
            </li>
            <li>
              <Link href="/projects/blockchain-africa-summit" className="text-primary hover:underline">
                Blockchain Africa Summit
              </Link>
            </li>
            <li>
              <Link href="/projects/space-convention" className="text-primary hover:underline">
                Space Convention
              </Link>
            </li>
            <li>
              <Link href="/projects/africanftart" className="text-primary hover:underline">
                AfricaNFT Art
              </Link>
            </li>
            <li>
              <Link href="/projects/harvest-credit" className="text-primary hover:underline">
                Harvest Credit
              </Link>
            </li>
            <li>
              <Link href="/projects/founders-and-innovators" className="text-primary hover:underline">
                Founders and Innovators
              </Link>
            </li>
            <li>
              <Link href="/projects/talahive" className="text-primary hover:underline">
                TalaHive
              </Link>
            </li>
            <li>
              <Link href="/projects/artention-magazine" className="text-primary hover:underline">
                Artention Magazine
              </Link>
            </li>
            <li>
              <Link href="/projects/folktoon" className="text-primary hover:underline">
                Folktoon
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <p>Individual blog posts are dynamically generated and not included in this sitemap.</p>
        </section>
      </div>

      <div className="mt-12 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">XML Sitemap</h3>
        <p>
          For search engines, an XML version of this sitemap is available at:{" "}
          <Link href="/sitemap.xml" className="text-primary hover:underline">
            /sitemap.xml
          </Link>
        </p>
      </div>
    </div>
  )
}
