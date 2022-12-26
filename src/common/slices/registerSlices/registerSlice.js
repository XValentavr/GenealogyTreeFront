import { createSlice } from "@reduxjs/toolkit";
import { fetchRegister } from "./thunks/fetchRegisterThunk";
import { StatusesHelper } from "../../helpers/statusesHelper";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
      status: null,
      error: null
    },
    reducers: {},
    extraReducers: {
      [fetchRegister.pending]: (state) => {
        state.status = StatusesHelper.LOADING
        state.error = null
      },
      [fetchRegister.fulfilled]: (state) => {
        state.status = StatusesHelper.COMPLETED
        state.error = null
      },
      [fetchRegister.rejected]: (state, action) => {
        state.status = StatusesHelper.ERROR
        state.error = action.error;
      }
    }
  }
)
export const registerActions = registerSlice.actions
export default registerSlice