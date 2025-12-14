import { Skeleton } from '@/components/ui/skeleton';

export default function GalleryLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <Skeleton className="h-[60vh] min-h-[500px] w-full bg-gray-200" />

      {/* Gallery Grid Skeleton */}
      <div className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Skeleton className="h-4 w-24 mx-auto mb-4 bg-gray-200" />
            <Skeleton className="h-12 w-48 mx-auto mb-6 bg-gray-200" />
            <Skeleton className="h-1 w-16 mx-auto bg-gray-200" />
          </div>

          {/* Filters Skeleton */}
          <div className="flex justify-center gap-2 mb-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full bg-gray-200" />
            ))}
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton
                key={i}
                className={`rounded-lg bg-gray-200 ${
                  i % 5 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
