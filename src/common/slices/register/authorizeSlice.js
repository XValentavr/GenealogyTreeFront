import { createSlice } from "@reduxjs/toolkit";


const authorizeSlice = createSlice({
  name: "authorize",
  initialState: {
    token: localStorage.getItem('token'),
    uuid: null,
    isLoggedIn: !!localStorage.getItem('token'),
  },
  reducers: {
    login(state, action) {
      if (!state.token) {
        state.token = action.payload
        localStorage.setItem('token', action.payload)
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = true
      }
    },

    logout(state) {
      state.token = null
      localStorage.removeItem('token')
      state.isLoggedIn = false
    },

    setUUID(state, action) {
      state.uuid = action.payload
    },

    deleteUUID(state) {
      state.uuid = null
    }
  }
});

export const authorizeActions = authorizeSlice.actions
export default authorizeSlice