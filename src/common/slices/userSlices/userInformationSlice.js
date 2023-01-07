import { createSlice } from "@reduxjs/toolkit";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";
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
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchUserInformation.fulfilled]: (state, action) => {
      state.information = action.payload
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchUserInformation.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },
  }
});

export const userInformationActions = userInformationSlice.actions
export default userInformationSlice