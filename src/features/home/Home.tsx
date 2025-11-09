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

import Poster from "@/assets/dummy-poster.jpg";
import AnimeCard from "./components/AnimeCard";

export default function Home() {
  return (
    <div className="flex flex-col m-auto h-full justify-center">
      <InputGroup className="px-6 py-6">
        <InputGroupInput placeholder="example.com" className="pl-1!" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <Search />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>

      <div className="mt-10 flex flex-col">
        <span>Result for keyword...</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <AnimeCard key={index} poster={Poster} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
