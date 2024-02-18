import { apiSlice } from "./apiSlice";

const AUTH_URL = "auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: `${AUTH_URL}/login`,
          method: "POST",
          body: data,
        };
      },
    }),
    register: builder.mutation({
      query: (data) => {
        return {
          url: `${AUTH_URL}/register`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
