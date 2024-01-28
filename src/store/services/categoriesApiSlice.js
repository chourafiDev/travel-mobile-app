import { apiSlice } from "./apiSlice";

const CATEGORIES_URL = "categories";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatgories: builder.query({
      query: () => {
        return {
          url: `${CATEGORIES_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGetCatgoriesQuery } = categoriesApiSlice;
