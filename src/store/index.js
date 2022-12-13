import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../slices/authFormSlices/authFormSlice";


const store = configureStore({
    reducer: {auth: authSlice.reducer}
})
export default store