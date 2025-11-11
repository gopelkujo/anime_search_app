
# LIST OF PROMPTS

I mostly use ChatGPT (Web) for asking and understanding the problem. If I'm not satisfied with the answer, I'll compare the answer to other AI such as Claude, Deepseek, Gemini, etc until I understand and satisfied.

1. Understanding the basic of Redux

```
I want to understand the basic of the usage of redux in React JS. Explain to me about the basic redux file requirement, best practice of redux with React JS folder structure, and the example of simple usage of redux.
```

  For understanding basic redux implementation for React JS. It'll affect the state management in this project.

2. Problem at @/lib/utils import in Shadcn UI component

```
i have tsconfig.json:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

And when i implemented it at one of my component like this:
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

it's trigger an error:
Cannot find module '@/lib/utils' or its corresponding type declarations.ts(2307)

But if i import it like this:
import { cn } from "../../lib/utils"

it's works like charm. Why my tsconfig doesn't work?
```

This fix the import of @/lib/utils in all Shadcn UI components.

3. Difference usage of RTK Query from official documentation and referenced video tutorial from official documentation.

```
I'm using rtk query for retrieving my data from live endpoint in my React JS website, i'm implement the fetch like this:
export default function Home() {
  const { data: result, isFetching, isSuccess } = useGetAnimeSearchQuery("");

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
        {isFetching ? (
          <span>Loading</span>
        ) : isSuccess ? (
          <>
            <span>Result for keyword...</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {result.data.length == 0 ? (
                <div>Not found</div>
              ) : (
                Array.from(result.data).map((item, index) => (
                  <AnimeCard
                    key={index}
                    item={item}
                  />
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

I implement like this because i follow the official documentation, the official documentation case is when the page route has the id, then the id used to initiate the useGetAnimeSearchQuery for arguments. My problem is, I need the user input to pass the argument data, my case is i have search field, so when user type the keyword then the useGetAnimeSearchQuery arguments will be filled with user input field
```

This affect how I retrieve data from Jikan API with RTK Query.

4. Create debounce function without additional dependencies

```
can you create debounce function so i do not have to install other dependencies?
```

The debounce used in Home.tsx file for prevent fetch data when user not finished typing the keyword yet.

5. Implement Next JS Image for improved image load

```
i want to implement NextJS image in my plan React JS project, what i mean is not exatcly NextJS image but just resemble the NextJS image, how can i do it?
```

The implementation can be found at src/components/ui/image.tsx

6. Problem when deploying apps to Netlify

```
how to deploy react js + vite web app to netlify? I already did the deployment there was no error but when i visited the site there was only blank page and console log error:
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec.
```

So when first I deployed the app to Netlify, it went success no error but the page shows blank (nothing), so I fix it by set up the build configuration on Netlify.

