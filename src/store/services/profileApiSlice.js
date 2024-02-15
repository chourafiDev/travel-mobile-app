import { apiSlice } from "./apiSlice";

const PROFILE_URL = "profile";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["profile"],
});

export const profileApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: `${PROFILE_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["profile"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `${PROFILE_URL}`,
          method: "PUT",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["profile"],
    }),
    updateImageProfile: builder.mutation({
      query: (data) => {
        return {
          url: `${PROFILE_URL}/edit-image`,
          method: "PATCH",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["profile"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `${PROFILE_URL}/change-password`,
          method: "PATCH",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateImageProfileMutation,
  useChangePasswordMutation,
} = profileApiSlice;
