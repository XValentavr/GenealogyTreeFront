import { createSlice } from "@reduxjs/toolkit";
import { StatusesHelper } from "../../helpers/statusesHelper";
import { fetchUserInformation } from "./thunks/fetchUserInformationThunk";

const userInformationSlice = createSlice({
  name: "information",
  initialState: {
    information: null,
    status: null,
    error: null
  },
  reducers: {
    deleteInformation(state) {
      state.information = null
    }
  },
  extraReducers: {
    [fetchUserInformation.pending]: (state) => {
      state.status = StatusesHelper.LOADING
      state.error = null;
    },
    [fetchUserInformation.fulfilled]: (state, action) => {
      state.information = action.payload
      state.status = StatusesHelper.COMPLETED
      state.error = null
    },
    [fetchUserInformation.rejected]: (state, action) => {
      state.status = StatusesHelper.ERROR
      state.error = action.error;
    },
  }
});

export const userInformationActions = userInformationSlice.actions
export default userInformationSlice