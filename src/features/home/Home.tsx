import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimeCard from "./components/ui/AnimeCard";
import { useGetAnimeSearchQuery } from "@/features/api/apiSlices";
import { decreasePage, increasePage, modifyKeyword } from "./homeSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect, useMemo, type FormEvent } from "react";
import { debounce } from "@/lib/debounce";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const keyword = useAppSelector((state) => state.home.keyword);
  const page = useAppSelector((state) => state.home.page);
  const dispatch = useAppDispatch();

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
      }, 600),
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
      <InputGroup className="px-2 py-8">
        <InputGroupInput
          placeholder="Enter anime title..."
          className="pl-1!"
          onChange={handleChange}
        />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <Search />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              No need to press button or enter to search
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>

      <div className="mt-10 flex flex-col">
        {!keyword ? (
          <div></div>
        ) : isFetching ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex flex-col">
                    <div className="w-full h-64 rounded-2xl overflow-hidden relative bg-gray-200 mb-4"></div>
                    <span className="bg-gray-200 rounded-2xl text-transparent">
                      title
                    </span>
                  </CardTitle>
                  <CardDescription className="bg-gray-200 rounded-2xl text-transparent">
                    Description
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : isSuccess ? (
          <>
            <span>
              Result for {keyword}{" "}
              {result.pagination.items.total != 0
                ? `(${result.pagination.items.total})`
                : ""}
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {result.data.length == 0 ? (
                <div>Not found</div>
              ) : (
                Array.from(result.data).map((item, index) => (
                  <AnimeCard key={index} item={item} />
                ))
              )}
            </div>
          </>
        ) : (
          <span>Error...</span>
        )}

        {isSuccess && result?.pagination.last_visible_page > 1 && !isFetching ? (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={
                    result.pagination.current_page == 1
                      ? undefined
                      : () => dispatch(decreasePage())
                  }
                  className={`
                        ${
                          result.pagination.current_page == 1
                            ? "pointer-events-none opacity-50 cursor-not-allowed"
                            : ""
                        }
                      `}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={
                    result.pagination.has_next_page
                      ? () => dispatch(increasePage())
                      : undefined
                  }
                  className={`
                        ${
                          !result.pagination.has_next_page
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      `}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ) : isFetching ? (
          <div className="flex space-x-2 justify-center items-center">
            <Skeleton className="h-9 w-[100px] rounded-full" />
            <Skeleton className="h-9 w-[100px] rounded-full" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
