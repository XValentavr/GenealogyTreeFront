import { createSlice } from "@reduxjs/toolkit";
import { fetchRegister } from "./thunks/fetchRegisterThunk";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
      status: null,
      error: null
    },
    reducers: {},
    extraReducers: {
      [fetchRegister.pending]: (state) => {
        state.status = StatusesOfFetchingHelper.LOADING
        state.error = null
      },
      [fetchRegister.fulfilled]: (state) => {
        state.status = StatusesOfFetchingHelper.COMPLETED
        state.error = null
      },
      [fetchRegister.rejected]: (state, action) => {
        state.status = StatusesOfFetchingHelper.ERROR
        state.error = action.error;
      }
    }
  }
)
export const registerActions = registerSlice.actions
export default registerSlice