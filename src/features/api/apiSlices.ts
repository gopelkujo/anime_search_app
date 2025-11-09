// Import the RTK Query methods from the React-specific entry point
import type {
  DefaultJikanResponse,
  AnimeSearchModel,
  AnimeDetailModel,
} from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use the `Post` type we've already defined in `postsSlice`,
// and then re-export it for ease of use
// import type { Post } from '@/features/posts/postsSlice'
// export type { Post }

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data.
    // The return value is a `Post[]` array, and it takes no arguments.
    getAnimeSearch: builder.query<
      DefaultJikanResponse<AnimeSearchModel[]>,
      string
    >({
      query: (query) => `/anime?q=${query}&limit=10`,
    }),
    getAnimeDetail: builder.query<
      DefaultJikanResponse<AnimeDetailModel>,
      string
    >({
      query: (id) => `/anime/${id}`,
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAnimeSearchQuery, useGetAnimeDetailQuery } = apiSlice;
