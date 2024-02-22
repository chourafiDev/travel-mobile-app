import { apiSlice } from "./apiSlice";

const BOOKING_URL = "booking";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["booking"],
});

export const bookingApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => {
        return {
          url: `${BOOKING_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["booking"],
    }),
    createBooking: builder.mutation({
      query: (data) => {
        return {
          url: `${BOOKING_URL}`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["booking"],
    }),
    bookingCheckOut: builder.mutation({
      query: (data) => {
        return {
          url: `${BOOKING_URL}/checkout`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useBookingCheckOutMutation,
  useCreateBookingMutation,
} = bookingApiSlice;
