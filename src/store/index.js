import { configureStore } from "@reduxjs/toolkit";
import authFormActions from "../common/slices/authFormSlices/authFormSlice";
import authorizeActions from "../common/slices/register/authorizeSlice";


const store = configureStore({
  reducer: {
    authForm: authFormActions.reducer,
    authorize: authorizeActions.reducer
  }
})
export default store