import { Skeleton } from '@/components/ui/skeleton';

export default function ReservationLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <Skeleton className="h-[40vh] min-h-[300px] w-full bg-gray-200" />

      {/* Form Skeleton */}
      <div className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            {/* Steps */}
            <div className="flex justify-center gap-8 mb-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full bg-gray-200" />
                  <Skeleton className="h-4 w-20 bg-gray-200" />
                </div>
              ))}
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Skeleton className="h-4 w-20 mb-2 bg-gray-200" />
                  <Skeleton className="h-12 w-full bg-gray-200" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2 bg-gray-200" />
                  <Skeleton className="h-12 w-full bg-gray-200" />
                </div>
              </div>
              <div>
                <Skeleton className="h-4 w-24 mb-2 bg-gray-200" />
                <Skeleton className="h-64 w-full bg-gray-200" />
              </div>
              <Skeleton className="h-12 w-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
