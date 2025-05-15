import fs from "fs"
import path from "path"

const domain = "https://omoladeodetara.me"
const currentDate = new Date().toISOString().split("T")[0] // YYYY-MM-DD format

// Main pages
const mainPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/projects", priority: "0.9", changefreq: "weekly" },
  { url: "/blog", priority: "0.9", changefreq: "weekly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/sitemap", priority: "0.5", changefreq: "monthly" },
]

// Project pages
const projectPages = [
  "/projects/stellarxplora",
  "/projects/bossbusworld",
  "/projects/ash-b",
  "/projects/moneybase",
  "/projects/nesthub",
  "/projects/monizoom",
  "/projects/zyleme",
  "/projects/blockchain-africa-summit",
  "/projects/space-convention",
  "/projects/africanftart",
  "/projects/harvest-credit",
  "/projects/founders-and-innovators",
  "/projects/talahive",
  "/projects/artention-magazine",
  "/projects/folktoon",
]

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

// Add main pages
xml += "  <!-- Home Page -->\n"
xml += `  <url>\n    <loc>${domain}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`

// Add other main pages
xml += "  \n  <!-- Main Pages -->\n"
mainPages.slice(1).forEach((page) => {
  xml += `  <url>\n    <loc>${domain}${page.url}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`
})

// Add project pages
xml += "  \n  <!-- Project Pages -->\n"
projectPages.forEach((page) => {
  xml += `  <url>\n    <loc>${domain}${page}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`
})

xml += "</urlset>"
const outputPath = path.join(process.cwd(), "public", "sitemap.xml")

fs.writeFileSync(outputPath, xml)
console.log(`Sitemap generated at ${outputPath}`)
