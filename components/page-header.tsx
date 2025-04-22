interface PageHeaderProps {
  heading: string
  subheading?: string
}

export function PageHeader({ heading, subheading }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 pb-10 pt-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{heading}</h1>
      {subheading && <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{subheading}</p>}
    </div>
  )
}

// Add default export
export default PageHeader
