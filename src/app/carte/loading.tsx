import { Skeleton } from '@/components/ui/skeleton';

export default function CarteLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <Skeleton className="h-[60vh] min-h-[500px] w-full bg-gray-200" />

      {/* Content Skeleton */}
      <div className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Skeleton className="h-4 w-32 mx-auto mb-4 bg-gray-200" />
            <Skeleton className="h-12 w-64 mx-auto mb-6 bg-gray-200" />
            <Skeleton className="h-1 w-16 mx-auto bg-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6">
                <Skeleton className="h-48 w-full rounded-lg mb-4 bg-gray-200" />
                <Skeleton className="h-6 w-3/4 mb-2 bg-gray-200" />
                <Skeleton className="h-4 w-full mb-4 bg-gray-200" />
                <Skeleton className="h-4 w-20 bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
