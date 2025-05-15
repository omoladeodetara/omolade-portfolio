import type React from "react"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Omolade Jordan Odetara | Product Professional",
  description: "Product Professional specializing in Deep Tech and Interoperability",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Suspense>
              <Navigation />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          function highlightConnections(id) {
            const elements = document.querySelectorAll('[data-connection="' + id + '"]');
            elements.forEach(el => {
              el.classList.add('ring-2');
              el.classList.add('ring-offset-2');
              
              // Add specific ring color based on timeline
              if (el.closest('.md\\\\:col-span-6')) {
                el.style.setProperty('--tw-ring-color', 'rgba(97, 95, 255, 0.5)');
              } else if (el.closest('.md\\\\:col-span-3:nth-of-type(1)')) {
                el.style.setProperty('--tw-ring-color', 'rgba(0, 213, 190, 0.5)');
              } else if (el.closest('.md\\\\:col-span-3:nth-of-type(2)')) {
                el.style.setProperty('--tw-ring-color', 'rgba(255, 184, 106, 0.5)');
              }
            });
            
            // Create visual connection lines
            if (elements.length > 1) {
              const positions = Array.from(elements).map(el => {
                const rect = el.getBoundingClientRect();
                return {
                  left: rect.left,
                  top: rect.top + window.scrollY + rect.height / 2,
                  width: rect.width
                };
              });
              
              // Sort positions from left to right
              positions.sort((a, b) => a.left - b.left);
              
              // Create connection lines
              for (let i = 0; i < positions.length - 1; i++) {
                const line = document.createElement('div');
                line.className = 'connection-highlight active';
                line.style.left = (positions[i].left + positions[i].width) + 'px';
                line.style.top = positions[i].top + 'px';
                line.style.width = (positions[i+1].left - (positions[i].left + positions[i].width)) + 'px';
                line.dataset.connectionFor = id;
                document.body.appendChild(line);
              }
            }
          }
          
          function removeHighlight() {
            document.querySelectorAll('.ring-2').forEach(el => {
              el.classList.remove('ring-2');
              el.classList.remove('ring-offset-2');
              el.style.removeProperty('--tw-ring-color');
            });
            
            document.querySelectorAll('.connection-highlight').forEach(el => {
              el.remove();
            });
          }
        `,
          }}
        />
      </body>
    </html>
  )
}
