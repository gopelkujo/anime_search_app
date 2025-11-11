import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AnimeCardSkeleton() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex flex-col">
          <Skeleton className="w-full h-64 rounded-2xl mb-4" />
          <Skeleton className="w-full h-4 rounded-2xl" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-1/2 h-4 rounded-2xl" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
