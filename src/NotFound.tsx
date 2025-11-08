import { ArrowLeft } from "lucide-react";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-neutral-500 mb-4">
        Page Not Found
      </h1>
      <h5>
        Your destinatio maybe already gone... or it was not exists from the
        start.
      </h5>

      <a href="/" className="mt-10">
        <Button>
          <ArrowLeft />
          <span>Back to dashboard</span>
        </Button>
      </a>
    </div>
  );
}
