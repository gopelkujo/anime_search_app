import type { AnimeSearchModel } from "@/types/api";
import AnimeCard from "../ui/AnimeCard";

export default function SearchResult({
  items,
  isLoading,
  isSuccess,
}: {
  items: AnimeSearchModel[];
  isLoading: boolean;
  isSuccess: boolean;
}) {
  return (
    <div className="mt-10 flex flex-col">
      {isLoading ? (
        <span>Loading</span>
      ) : isSuccess ? (
        <>
          <span>Result for keyword...</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {items.length == 0 ? (
              <div>Not found</div>
            ) : (
              Array.from(items).map((item, index) => (
                <AnimeCard key={index} item={item} />
              ))
            )}
          </div>
        </>
      ) : (
        <span>Error...</span>
      )}
    </div>
  );
}
