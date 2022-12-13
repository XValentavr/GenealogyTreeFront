import React, {useCallback, useState} from "react";
import Feedback from "./Feedback";
import AuthOrRegister from "./AuthOrRegister";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../../../slices/authFormSlices/authFormSlice";
import {getAuthFormType} from "../../../../slices/authFormSlices/authFormSelectors";

const FeedbackOrAuthForm = props => {
    const [formIsValid, setFormIsValid] = useState(false)

    const onCheckIsValidHandler = flag => setFormIsValid(flag)


    const dispatch = useDispatch()
    const authFormType = useSelector(getAuthFormType)

    const closeFeedbackOrAuthHandler = useCallback(() => {
            dispatch(authActions.openOrCloseForm())
        }, [dispatch]
    );

    const changeFormTypeHandler = useCallback(formType => {
            dispatch(authActions.setFormType(formType))
        }, [dispatch]
    );

    if (authFormType === "feedback") {
        return (
            <Feedback
                onCheckIsValidHandler={onCheckIsValidHandler}
                formIsValid={formIsValid}
            />)
    } else {
        return (
            <AuthOrRegister
                onClose={closeFeedbackOrAuthHandler}
                onChangeFormType={changeFormTypeHandler}
                formType={authFormType}
                onCheckIsValidHandler={onCheckIsValidHandler}
                formIsValid={formIsValid}
            />)
    }
}
export default FeedbackOrAuthForm