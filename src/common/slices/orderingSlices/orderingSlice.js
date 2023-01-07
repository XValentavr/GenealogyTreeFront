import { createSlice } from "@reduxjs/toolkit";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";
import { fetchCreateOrdering } from "./thunks/fetchCreateOrdering";
import { fetchGettingOrdering } from "./thunks/fetchGettingOrdering";
import { fetchPatchOrdering } from "./thunks/fetchPatchOrdering";

const orderingSlice = createSlice({
  name: "ordering",
  initialState: {
    orderingData: null,
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchCreateOrdering.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchCreateOrdering.fulfilled]: (state) => {
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchCreateOrdering.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },

    [fetchGettingOrdering.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchGettingOrdering.fulfilled]: (state, action) => {
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.orderingData = action.payload
      state.error = null
    },
    [fetchGettingOrdering.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },

    [fetchPatchOrdering.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchPatchOrdering.fulfilled]: (state) => {
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchPatchOrdering.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },
  }
});

export const orderingActions = orderingSlice.actions
export default orderingSlice