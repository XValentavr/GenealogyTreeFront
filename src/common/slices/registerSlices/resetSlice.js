import { createSlice } from "@reduxjs/toolkit";
import { fetchResetPassword } from "./thunks/fetchResetThunk";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";

const resetSlice = createSlice({
    name: 'reset',
    initialState: {
      status: null,
      error: null
    },
    reducers: {},
    extraReducers: {
      [fetchResetPassword.pending]: (state) => {
        state.status = StatusesOfFetchingHelper.LOADING
        state.error = null
      },
      [fetchResetPassword.fulfilled]: (state) => {
        state.status = StatusesOfFetchingHelper.COMPLETED
        state.error = null
      },
      [fetchResetPassword.rejected]: (state, action) => {
        state.status = StatusesOfFetchingHelper.ERROR
        state.error = action.error;
      }
    }
  }
)
export const resetActions = resetSlice.actions
export default resetActions