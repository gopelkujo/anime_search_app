import { SearchX } from "lucide-react";

export default function SearchResultNotFound({ keyword }: { keyword: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <SearchX className="mb-4" size={60} />
      <span className="font-medium text-neutral-500 max-w-md text-center">
        Anime with "{keyword}" identities was not found.
      </span>
    </div>
  );
}
