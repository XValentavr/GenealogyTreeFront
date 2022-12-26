import { configureStore } from "@reduxjs/toolkit";
import authFormActions from "../common/slices/authFormSlices/authFormSlice";
import authorizeActions from "../common/slices/registerSlices/authorizeSlice";
import userActions from "../common/slices/userSlices/userSlice";
import userInformationActions from "../common/slices/userSlices/userInformationSlice";
import supportActions from "../common/slices/registerSlices/supportSlice";


const store = configureStore({
  reducer: {
    authForm: authFormActions.reducer,
    authorize: authorizeActions.reducer,
    users: userActions.reducer,
    userInformation: userInformationActions.reducer,
    support: supportActions.reducer
  }
})
export default store