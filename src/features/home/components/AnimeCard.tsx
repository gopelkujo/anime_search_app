import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnimeCard({poster, index}: {poster: string, index: number}) {
  return (
    <Card
      className="hover:scale-110 hover:bg-neutral-200 transition-all duration-300 cursor-pointer border-none shadow-none"
    >
      <CardHeader>
        <CardTitle className="flex flex-col">
          <div className="w-full h-64 rounded-2xl overflow-hidden relative bg-red-300 mb-4">
            <img src={poster} width="100%" className="object-contain w-full" />
          </div>
          <span>Berserk {index}</span>
        </CardTitle>
        <CardDescription>On going</CardDescription>
      </CardHeader>
    </Card>
  );
}
