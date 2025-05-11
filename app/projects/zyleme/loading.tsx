import { Skeleton } from "@/components/ui/skeleton"

export default function ZylemeLoading() {
  return (
    <div className="container py-10">
      <Skeleton className="h-8 w-32 mb-2" />
      <Skeleton className="h-12 w-3/4 mb-8" />
      <Skeleton className="h-[400px] w-full mb-12 rounded-lg" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-24 w-full mb-4" />
          <Skeleton className="h-24 w-full mb-4" />
          <Skeleton className="h-24 w-full mb-4" />
        </div>
        <div>
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
      </div>

      <Skeleton className="h-8 w-48 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
        ))}
      </div>

      <Skeleton className="h-8 w-48 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[150px] w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
