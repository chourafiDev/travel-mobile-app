import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterQuery: {},
};

const filterDestinationsSlice = createSlice({
  name: "filterQuery",
  initialState: initialState,
  reducers: {
    setFilterQuery: (state, action) => {
      state.filterQuery = { ...state.filterQuery, ...action.payload };
    },

    clearFilterQuery: (state) => {
      state.filterQuery = {};
    },
  },
});

export const { setFilterQuery, clearFilterQuery } =
  filterDestinationsSlice.actions;
export default filterDestinationsSlice.reducer;
