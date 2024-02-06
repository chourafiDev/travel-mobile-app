import { apiSlice } from "./apiSlice";

const DESTINATIONS_URL = "destinations";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["destinations"],
});

export const destinationsApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getDestinations: builder.query({
      query: () => {
        return {
          url: `${DESTINATIONS_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["destinations"],
    }),
    getTopDestinations: builder.query({
      query: () => {
        return {
          url: `${DESTINATIONS_URL}/top`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["destinations"],
    }),
    getDestination: builder.query({
      query: (id) => {
        return {
          url: `${DESTINATIONS_URL}/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["destinations"],
    }),
    createDestination: builder.mutation({
      query: (data) => {
        return {
          url: `${DESTINATIONS_URL}/create`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["destinations"],
    }),
    updateDestination: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `${DESTINATIONS_URL}/${id}`,
          method: "PATCH",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["destinations"],
    }),
    deleteDestination: builder.mutation({
      query: (id) => {
        return {
          url: `${DESTINATIONS_URL}/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ["destinations"],
    }),
  }),
});

export const {
  useGetDestinationsQuery,
  useGetTopDestinationsQuery,
  useGetDestinationQuery,
  useCreateDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationsApiSlice;
