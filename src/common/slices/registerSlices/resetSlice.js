import { createSlice } from "@reduxjs/toolkit";
import { fetchResetPassword } from "./thunks/fetchResetThunk";
import { StatusesHelper } from "../../helpers/statusesHelper";

const resetSlice = createSlice({
    name: 'reset',
    initialState: {
      status: null,
      error: null
    },
    reducers: {},
    extraReducers: {
      [fetchResetPassword.pending]: (state) => {
        state.status = StatusesHelper.LOADING
        state.error = null
      },
      [fetchResetPassword.fulfilled]: (state) => {
        state.status = StatusesHelper.COMPLETED
        state.error = null
      },
      [fetchResetPassword.rejected]: (state, action) => {
        state.status = StatusesHelper.ERROR
        state.error = action.error;
      }
    }
  }
)
export const resetActions = resetSlice.actions
export default resetActions