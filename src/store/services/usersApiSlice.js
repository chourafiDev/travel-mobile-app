import { apiSlice } from "./apiSlice";

const USERS_URL = "users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: `${USERS_URL}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
