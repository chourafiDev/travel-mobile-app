import { apiSlice } from "./apiSlice";

const CATEGORIES_URL = "categories";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["categories"],
});

export const categoriesApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return {
          url: `${CATEGORIES_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["categories"],
    }),
    createCatgorie: builder.mutation({
      query: (data) => {
        return {
          url: `${CATEGORIES_URL}/create`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCatgorieMutation } =
  categoriesApiSlice;
