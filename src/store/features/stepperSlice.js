import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {},
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState: initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },

    clearStepperValues: (state) => {
      state.formData = {};
      state.currentStep = 1;
    },
  },
});

export const { setCurrentStep, setFormData, clearStepperValues } =
  stepperSlice.actions;
export default stepperSlice.reducer;
