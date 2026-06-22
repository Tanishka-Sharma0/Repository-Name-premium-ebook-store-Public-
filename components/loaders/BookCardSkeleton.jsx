// components/loaders/BookCardSkeleton.jsx
import { Skeleton } from '@/components/ui/skeleton';

export default function BookCardSkeleton() {
    return (
        <div className="glass rounded-3xl overflow-hidden h-full">
            {/* Image Skeleton */}
            <div className="relative h-72 bg-card">
                <Skeleton className="absolute inset-0" />

                {/* Fake Price Tag */}
                <div className="absolute top-4 right-4">
                    <Skeleton className="w-16 h-7 rounded-full" />
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="p-5 space-y-4">
                <Skeleton className="h-4 w-20" /> {/* Category */}

                <Skeleton className="h-6 w-full" />  {/* Title Line 1 */}
                <Skeleton className="h-6 w-4/5" />  {/* Title Line 2 */}

                <Skeleton className="h-4 w-32" />   {/* Author */}

                <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-5 w-16" />   {/* Rating */}
                    <Skeleton className="h-9 w-28 rounded-2xl" /> {/* Button */}
                </div>
            </div>
        </div>
    );
}