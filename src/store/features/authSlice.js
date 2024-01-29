import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getStoredData,
  removeStoredData,
  storeData,
} from "../../../utils/asyncStorageService";

// Define an async thunk to fetch authentication data
export const fetchAuthData = createAsyncThunk(
  "auth/fetchAuthData",
  async () => {
    try {
      const access_token = await getStoredData("@access_token");
      const userString = await getStoredData("@user");
      const user = userString ? JSON.parse(userString) : {};

      return {
        access_token: access_token || "",
        user: user,
        isSignedIn: true,
        status: "idle",
        error: null,
      };
    } catch (e) {
      console.error("Error fetching authentication data from async storage", e);
      throw e;
    }
  }
);

const initialState = {
  access_token: "",
  user: {},
  isSignedIn: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { access_token, user } = action.payload;

      state.access_token = access_token;
      state.user = user;
      state.isSignedIn = true;

      storeData("@access_token", access_token);
      storeData("@user", JSON.stringify(user));
    },

    clearCredentials: (state) => {
      state.access_token = "";
      state.user = {};
      state.isSignedIn = false;
      removeStoredData("@access_token");
      removeStoredData("@user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.access_token = action.payload.access_token;
        state.user = action.payload.user;
        state.isSignedIn = true;
      })
      .addCase(fetchAuthData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isSignedIn = false;
      });
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
