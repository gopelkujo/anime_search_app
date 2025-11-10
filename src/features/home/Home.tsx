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
import { modify } from "./homeSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect, useMemo, type FormEvent } from "react";
import { debounce } from "@/lib/debounce";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const keyword = useAppSelector((state) => state.home.value);
  const dispatch = useAppDispatch();

  const {
    data: result,
    isFetching,
    isSuccess,
  } = useGetAnimeSearchQuery(keyword, { skip: !keyword });

  const debouncedSetKeyword = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(modify(value.trim()));
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
            <TooltipContent>No need to press button or enter to search</TooltipContent>
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
            <span>Result for {keyword}...</span>
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
      </div>
    </div>
  );
}
