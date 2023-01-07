import { createSlice } from "@reduxjs/toolkit";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";
import { fetchSupport } from "./thunks/fetchSupport";

const supportSlice = createSlice({
    name: 'support',
    initialState: {
      status: null,
      error: null
    },
    reducers: {},
    extraReducers: {
      [fetchSupport.pending]: (state) => {
        state.status = StatusesOfFetchingHelper.LOADING
        state.error = null
      },
      [fetchSupport.fulfilled]: (state) => {
        state.status = StatusesOfFetchingHelper.COMPLETED
        state.error = null
      },
      [fetchSupport.rejected]: (state, action) => {
        state.status = StatusesOfFetchingHelper.ERROR
        state.error = action.error;
      }
    }
  }
)
export const supportActions = supportSlice.actions
export default supportSlice