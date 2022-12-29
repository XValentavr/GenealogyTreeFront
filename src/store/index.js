import { configureStore } from "@reduxjs/toolkit";
import authFormActions from "../common/slices/authFormSlices/authFormSlice";
import authorizeActions from "../common/slices/registerSlices/authorizeSlice";
import userActions from "../common/slices/userSlices/userSlice";
import userInformationActions from "../common/slices/userSlices/userInformationSlice";
import supportActions from "../common/slices/registerSlices/supportSlice";
import orderingActions from "../common/slices/orderingSlices/orderingSlice";
import usersActions from "../common/slices/usersSlices/usersSlice";
import initialTreeActions from "../common/slices/treeSlices/initialTreeSlice";


const store = configureStore({
  reducer: {
    authForm: authFormActions.reducer,
    authorize: authorizeActions.reducer,
    user: userActions.reducer,
    userInformation: userInformationActions.reducer,
    support: supportActions.reducer,
    ordering: orderingActions.reducer,
    users: usersActions.reducer,
    tree: initialTreeActions.reducer
  }
})
export default store