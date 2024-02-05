import { apiSlice } from "./apiSlice";

const FAVORITES_URL = "favorites";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["favorites"],
});

export const favoritesApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => {
        return {
          url: `${FAVORITES_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["favorites"],
    }),
    favorite: builder.mutation({
      query: (data) => {
        return {
          url: `${FAVORITES_URL}`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["favorites"],
    }),
    unfavorite: builder.mutation({
      query: (id) => {
        return {
          url: `${FAVORITES_URL}/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ["favorites"],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useFavoriteMutation,
  useUnfavoriteMutation,
} = favoritesApiSlice;
