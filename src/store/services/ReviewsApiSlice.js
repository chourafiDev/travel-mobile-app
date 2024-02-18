import { apiSlice } from "./apiSlice";

const REVIEWS_URL = "reviews";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["reviews"],
});

export const ReviewsApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (destinationId) => {
        return {
          url: `${REVIEWS_URL}?destinationId=${destinationId}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["reviews"],
    }),
    createReview: builder.mutation({
      query: (data) => {
        return {
          url: `${REVIEWS_URL}`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useCreateReviewMutation } = ReviewsApiSlice;
