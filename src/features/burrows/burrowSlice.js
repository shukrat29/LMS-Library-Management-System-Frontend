import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
  selectedBurrow: {},
};

const burrowlice = createSlice({
  name: "burrows",
  initialState,
  reducers: {
    setBurrows: (state, { payload }) => {
      state.burrows = payload || [];
    },
    setSelectedBurrow: (state, { payload }) => {
      state.selectedBurrow = payload;
    },
  },
});

const { reducer, actions } = burrowlice;

export const { setBurrows, setSelectedBurrow } = actions;
export default reducer;
