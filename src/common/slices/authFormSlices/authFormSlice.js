import { createSlice } from "@reduxjs/toolkit";


const authFormSlice = createSlice({
  name: "authForm",
  initialState: {
    formType: 'auth',
    isShown: false
  },
  reducers: {
    setFormType(state, action) {
      state.formType = action.payload
    },
    openOrCloseForm(state) {
      state.isShown = !state.isShown
    },
  }
});

export const authFormActions = authFormSlice.actions
export default authFormSlice