import { Skeleton } from '@/components/ui/skeleton';

export default function WineLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <Skeleton className="h-[60vh] min-h-[500px] w-full bg-gray-200" />

      {/* Recommendations Skeleton */}
      <div className="py-24 bg-[#722F37]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Skeleton className="h-4 w-32 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-12 w-64 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-1 w-16 mx-auto bg-white/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg bg-white/10" />
            ))}
          </div>
        </div>
      </div>

      {/* Wine List Skeleton */}
      <div className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Skeleton className="h-4 w-24 mx-auto mb-4 bg-gray-200" />
            <Skeleton className="h-12 w-48 mx-auto bg-gray-200" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full bg-gray-200" />
            ))}
          </div>

          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-lg bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
