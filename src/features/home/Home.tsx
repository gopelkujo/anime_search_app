import AnimeCard from "./components/ui/AnimeCard";
import { useGetAnimeSearchQuery } from "@/features/api/apiSlices";
import { decreasePage, increasePage, modifyKeyword } from "./homeSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect, useMemo, type FormEvent } from "react";
import { debounce } from "@/lib/debounce";
import SearchField from "./components/ui/SearchField";
import AnimeCardSkeleton from "./components/ui/AnimeCardSkeleton";
import SearchResultNotFound from "./components/ui/SearchResultNotFound";
import SearchResultPagination from "./components/ui/SearchResultPagination";
import SearchResultPaginationSkeleton from "./components/ui/SearchResultPaginationSkeleton";
import ErrorCard from "../../components/ui/error-card";

export default function Home() {
  const keyword = useAppSelector((state) => state.home.keyword);
  const page = useAppSelector((state) => state.home.page);
  const dispatch = useAppDispatch();
  const DEBOUNCE_DURATION: number = 250;

  const {
    data: result,
    isFetching,
    isSuccess,
  } = useGetAnimeSearchQuery(
    { keyword: keyword, page: page },
    { skip: !keyword }
  );

  const debouncedSetKeyword = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(modifyKeyword(value.trim()));
      }, DEBOUNCE_DURATION),
    []
  );

  const handleChange = (e: FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    debouncedSetKeyword(value);
  };

  useEffect(() => {
    return () => {
      // clean up debounce timer when component unmounts
      debouncedSetKeyword.cancel?.();
    };
  }, [debouncedSetKeyword]);

  return (
    <div className="flex flex-col m-auto h-full justify-center">
      <SearchField handleChange={handleChange} />

      <div className="mt-10 flex flex-col">
        {!keyword ? (
          <div></div>
        ) : isFetching ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <AnimeCardSkeleton key={index} />
            ))}
          </div>
        ) : isSuccess ? (
          <>
            {result.pagination.items.total != 0 ? (
              <span className="mb-4">
                Result for {keyword} ({result.pagination.items.total})
              </span>
            ) : null}

            {result.pagination.items.total == 0 ? (
              <SearchResultNotFound keyword={keyword} />
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Array.from(result.data).map((item, index) => (
                  <AnimeCard key={index} item={item} />
                ))}
              </div>
            )}
          </>
        ) : (
          <ErrorCard />
        )}

        {isSuccess &&
        result?.pagination.last_visible_page > 1 &&
        !isFetching ? (
          <SearchResultPagination
            result={result}
            handlePrev={() => dispatch(decreasePage())}
            handleNext={() => dispatch(increasePage())}
          />
        ) : isFetching ? (
          <SearchResultPaginationSkeleton />
        ) : null}
      </div>
    </div>
  );
}
