import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config";
import { getStoredData } from "../../../utils/asyncStorageService";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers) => {
    const access_token = await getStoredData("@access_token");
    if (access_token) {
      headers.set("Authorization", `Bearer ${access_token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
