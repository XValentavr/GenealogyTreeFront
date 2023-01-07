import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./thunks/fetchUserDataThunk";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: null,
    error: null
  },
  reducers: {
    deleteUser(state) {
      state.user = null
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },
  }
});

export const userActions = userSlice.actions
export default userSlice