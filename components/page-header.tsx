interface PageHeaderProps {
  heading?: string
  title?: string
  subheading?: string
  description?: string
}

// Accepts both the heading/subheading and title/description names, because
// pages were written with both and the unmatched ones rendered no title.
export function PageHeader({ heading, title, subheading, description }: PageHeaderProps) {
  const h = heading ?? title
  const sub = subheading ?? description
  return (
    <div className="flex flex-col items-center text-center space-y-4 pb-10 pt-6">
      {h && <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{h}</h1>}
      {sub && <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{sub}</p>}
    </div>
  )
}

export default PageHeader
