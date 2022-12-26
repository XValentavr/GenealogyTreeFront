import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./thunks/fetchUserDataThunk";
import { StatusesHelper } from "../../helpers/statusesHelper";

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
      state.status = StatusesHelper.LOADING
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload
      state.status = StatusesHelper.COMPLETED
      state.error = null
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = StatusesHelper.ERROR
      state.error = action.error;
    },
  }
});

export const userActions = userSlice.actions
export default userSlice