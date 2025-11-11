import { Skeleton } from "@/components/ui/skeleton";

export default function SearchResultPaginationSkeleton() {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <Skeleton className="h-9 w-[100px] rounded-[10px]" />
      <Skeleton className="h-9 w-[100px] rounded-[10px]" />
    </div>
  );
}
