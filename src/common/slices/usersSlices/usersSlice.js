import { createSlice } from "@reduxjs/toolkit";
import { StatusesHelper } from "../../helpers/statusesHelper";
import { fetchUsers } from "./thunks/fetchUsers";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    status: null,
    error: null
  },
  reducers: {
    deleteUser(state) {
      state.user = null
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = StatusesHelper.LOADING
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
      state.status = StatusesHelper.COMPLETED
      state.error = null
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = StatusesHelper.ERROR
      state.error = action.error;
    },
  }
});

export const usersActions = usersSlice.actions
export default usersSlice