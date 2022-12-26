import { createSlice } from "@reduxjs/toolkit";
import { StatusesHelper } from "../../helpers/statusesHelper";
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
        state.status = StatusesHelper.LOADING
        state.error = null
      },
      [fetchSupport.fulfilled]: (state) => {
        state.status = StatusesHelper.COMPLETED
        state.error = null
      },
      [fetchSupport.rejected]: (state, action) => {
        state.status = StatusesHelper.ERROR
        state.error = action.error;
      }
    }
  }
)
export const supportActions = supportSlice.actions
export default supportSlice