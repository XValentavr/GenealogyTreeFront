import { createSlice } from "@reduxjs/toolkit";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";
import { fetchGettingOrdersForGenealogist } from "./thunks/fetchGettingOrdersForGenealogist";

const orderingGenealogistSlice = createSlice({
  name: "orderingGenealogist",
  initialState: {
    orderingDataGenealogist: null,
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchGettingOrdersForGenealogist.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchGettingOrdersForGenealogist.fulfilled]: (state, action) => {
      state.orderingDataGenealogist = action.payload
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchGettingOrdersForGenealogist.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },
  }
});

export const orderingGenealogistActions = orderingGenealogistSlice.actions
export default orderingGenealogistSlice