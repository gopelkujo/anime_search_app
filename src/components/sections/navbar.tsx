import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="w-[90vw] m-auto py-4 flex justify-between items-center">
      <a href="/">
        <Button variant="ghost" className="p-0">
          <h1 className="font-bold">Anime Search App</h1>
        </Button>
      </a>

      <ul className="">
        <li>
          <a href="https://github.com/gopelkujo/anime_search_app">
            <Button variant="link" className="p-0">
              Github
            </Button>
          </a>
        </li>
      </ul>
    </div>
  );
}
