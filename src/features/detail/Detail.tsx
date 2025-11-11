import { useParams, useNavigate } from "react-router-dom";
import { useGetAnimeDetailQuery } from "../api/apiSlices";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import Image from "@/components/ui/image";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorCard from "../../components/ui/error-card";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const {
    data: result,
    isFetching,
    isSuccess,
  } = useGetAnimeDetailQuery(id ?? "0");

  return (
    <div className="flex flex-col items-start">
      <Button variant="outline" className="mb-10" onClick={handleGoBack}>
        <ArrowLeft />
        <span>Back</span>
      </Button>

      {isFetching ? (
        <>
          <div className="flex flex-col sm:flex-row mb-4 w-full">
            <Skeleton className="w-[170px] h-[235px] rounded-2xl mb-4 sm:mb-0 sm:mr-4 self-center" />
            <div className="flex flex-col items-start space-y-2">
              <Skeleton className="w-[300px] h-10 rounded-2xl" />
              <Skeleton className="w-[500px] h-6 rounded-2xl" />
              <Skeleton className="w-[250px] h-6 rounded-2xl" />
              <Skeleton className="w-[250px] h-6 rounded-2xl" />
            </div>
          </div>

          <Skeleton className="w-[97px] h-8 rounded-2xl mb-2" />
          <Skeleton className="w-full h-[150px] rounded-2xl" />
        </>
      ) : isSuccess ? (
        <>
          <div className="flex flex-col sm:flex-row mb-4 text-neutral-600 w-full">
            <div className="w-[170px] h-[235px] relative rounded-2xl overflow-hidden mb-4 sm:mb-0 sm:mr-4 self-center">
              <Image
                src={result.data.images.jpg.image_url}
                alt="Nature"
                fill
                placeholder="https://via.placeholder.com/300x200?text=Loading..."
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-2xl sm:text-4xl font-semibold mb-2 text-black">
                {result.data.title}
              </h1>
              <h4 className="px-3 py-1 rounded-2xl bg-zinc-100 mb-2">
                {result.data.status}
              </h4>
              <div className="flex">
                <Star fill="black" color="black" className="mr-2" />
                <span>
                  {result.data.score} ({result.data.scored_by} users)
                </span>
              </div>
              <span>
                Aired {result.data.aired.from.toLocaleString().split("T")[0]}
              </span>
              <span>{result.data.rating}</span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-medium mb-2">Synopsis</h2>
          <span className="text-neutral-600">{result.data.synopsis}</span>
        </>
      ) : (
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ErrorCard />
        </div>
      )}
    </div>
  );
}
