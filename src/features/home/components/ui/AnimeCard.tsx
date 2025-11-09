import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AnimeSearchModel } from "@/types/api";
import Poster from "@/assets/dummy-poster.jpg";

export default function AnimeCard({ item }: { item: AnimeSearchModel }) {
  const url = `/detail/${item.mal_id}`;

  return (
    <a href={url}>
      <Card className="hover:scale-110 hover:bg-neutral-200 transition-all duration-300 cursor-pointer border-none shadow-none">
        <CardHeader>
          <CardTitle className="flex flex-col">
            <div className="w-full h-64 rounded-2xl overflow-hidden relative mb-4 flex items-center">
              <img
                src={item.images.jpg.image_url ?? Poster}
                width="100%"
                className="object-contain w-full"
              />
            </div>
            <span>{item.title}</span>
          </CardTitle>
          <CardDescription>{item.status}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}
