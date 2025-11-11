import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { AnimeSearchModel, DefaultJikanResponse } from "@/types/api";
import type { MouseEventHandler } from "react";

interface SearchResultPaginationArgs {
  result: DefaultJikanResponse<AnimeSearchModel[]>;
  handlePrev: MouseEventHandler<HTMLAnchorElement>;
  handleNext: MouseEventHandler<HTMLAnchorElement>;
}

export default function SearchResultPagination({
  result,
  handlePrev,
  handleNext,
}: SearchResultPaginationArgs) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={
              result.pagination.current_page == 1 ? undefined : handlePrev
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
            onClick={result.pagination.has_next_page ? handleNext : undefined}
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
  );
}
