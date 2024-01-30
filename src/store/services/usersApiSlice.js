import { apiSlice } from "./apiSlice";

const USERS_URL = "users";

const apiSliceWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["users"],
});

export const usersApiSlice = apiSliceWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: `${USERS_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["users"],
    }),
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: `${USERS_URL}/create`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `${USERS_URL}/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation } =
  usersApiSlice;
