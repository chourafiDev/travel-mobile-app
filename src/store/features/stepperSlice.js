import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  title: "",
  description: "",
  destination: "",
  categoryId: "",
  price: "",
  duration: "",
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState: initialState,
  reducers: {
    setImageValues: (state, action) => {
      state.images = action.payload.images;
    },
    setTitleValue: (state, action) => {
      state.title = action.payload.title;
    },
    setDescriptionValue: (state, action) => {
      state.description = action.payload.description;
    },
    setDestinationValue: (state, action) => {
      state.destination = action.payload.destination;
    },
    setCategoryValue: (state, action) => {
      state.categoryId = action.payload.categoryId;
    },
    setPriceValue: (state, action) => {
      state.price = action.payload.price;
    },
    setDurationValue: (state, action) => {
      state.duration = action.payload.duration;
    },

    clearStepperValues: (state) => {
      state.images = "";
      state.title = "";
      state.description = "";
      state.destination = "";
      state.categoryId = "";
      state.price = "";
      state.duration = "";
    },
  },
});

export const {
  setImageValues,
  setTitleValue,
  setDescriptionValue,
  setDestinationValue,
  setCategoryValue,
  setPriceValue,
  setDurationValue,
  clearStepperValues,
} = stepperSlice.actions;
export default stepperSlice.reducer;
