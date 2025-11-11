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
import { Search } from "lucide-react";
import type { ChangeEventHandler } from "react";

export default function SearchField({
  handleChange,
}: {
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
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
  );
}
