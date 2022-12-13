import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "authForm",
    initialState: {
        formType: 'auth',
        isShown: false
    },
    reducers: {
        setFormType(state, action) {
            state.formType = action.payload
        },
        openOrCloseForm(state){
            state.isShown=!state.isShown
        },
    }
});

export const authActions = authSlice.actions
export default authSlice