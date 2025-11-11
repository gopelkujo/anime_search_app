import { CloudAlert } from "lucide-react";

export default function ErrorCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <CloudAlert className="mb-4" size={60} />
      <span className="font-medium text-neutral-500 max-w-md text-center">
        There was something wrong with the system.
        <br /> Check your connection and try again later.
      </span>
    </div>
  );
}
