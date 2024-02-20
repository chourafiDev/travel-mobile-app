import { apiSlice } from "./apiSlice";

const DESTINATIONS_URL = "destinations";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["destinations"],
});

export const destinationsApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getDestinationsWithFilter: builder.query({
      query: (filterQuery) => {
        const { search, destination, minPrice, maxPrice, duration, category } =
          filterQuery;
        let url = DESTINATIONS_URL;

        if (search) {
          url += `?search=${search}`;
        }

        if (destination) {
          url += `${search ? "&" : "?"}destination=${destination}`;
        }

        if (minPrice) {
          url += `${search || destination ? "&" : "?"}minPrice=${minPrice}`;
        }

        if (maxPrice) {
          url += `${
            search || destination || minPrice ? "&" : "?"
          }maxPrice=${maxPrice}`;
        }

        if (duration) {
          url += `${
            search || destination || minPrice || maxPrice ? "&" : "?"
          }duration=${duration}`;
        }

        if (category) {
          url += `${
            search || destination || minPrice || maxPrice || duration
              ? "&"
              : "?"
          }category=${category}`;
        }

        return {
          url,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["destinations"],
    }),
    getAllDestinations: builder.query({
      query: () => {
        return {
          url: `${DESTINATIONS_URL}/all`,
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
      query: (body) => {
        return {
          url: `${DESTINATIONS_URL}/create`,
          method: "POST",
          body: body,
          credentials: "include",
        };
      },
      invalidatesTags: ["destinations"],
    }),
    updateDestination: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `${DESTINATIONS_URL}/${id}`,
          method: "PATCH",
          body: body,
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
  useGetDestinationsWithFilterQuery,
  useGetAllDestinationsQuery,
  useGetTopDestinationsQuery,
  useGetDestinationQuery,
  useCreateDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationsApiSlice;
