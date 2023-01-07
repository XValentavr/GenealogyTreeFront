import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth } from "./thunks/fetchAuthThunk";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";

const authorizeSlice = createSlice({
  name: "authorize",
  initialState: {
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token'),
    status: null,
    error: null
  },
  reducers: {
    logout(state) {
      state.token = null
      localStorage.removeItem('token')
      state.isLoggedIn = false
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.state = StatusesOfFetchingHelper.LOADING
      state.error = null
    },
    [fetchAuth.fulfilled]: (state, action) => {
      if (!state.token) {
        state.token = action.payload
        localStorage.setItem('token', action.payload)
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = true
      }
      state.error = null
      state.state = StatusesOfFetchingHelper.COMPLETED
    },
    [fetchAuth.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    }
  }
});

export const authorizeActions = authorizeSlice.actions
export default authorizeSlice
