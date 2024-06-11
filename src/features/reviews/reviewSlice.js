import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pubReviews: [],
  allReviews: [],
};

const reviewslice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setPubReviews: (state, { payload }) => {
      state.pubReviews = payload || [];
    },
    setAllReview: (state, { payload }) => {
      state.allReviews = payload;
    },
    updateReveiwStatus: (state, { payload }) => {
      const { _id, status } = payload;
      state.allReviews = state.allReviews.map((item) => {
        if (item._id === _id) {
          return { ...item, status };
        }
        return item;
      });
    },
  },
});

const { reducer, actions } = reviewslice;

export const { setPubReviews, setAllReview, updateReveiwStatus } = actions;
export default reducer;
