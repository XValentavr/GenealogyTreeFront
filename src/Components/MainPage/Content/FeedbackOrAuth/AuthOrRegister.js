import React, { Fragment, useCallback } from "react";
import classes from "./styles/Feedback.module.css";
import Modal from "../../UI/Modal";
import FormCard from "../../Card/FormCard";
import Auth from "./Auth";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import PropTypes from "prop-types";
import fetchRegisterThunk from "../../../../common/slices/register/thunks/fetchRegisterThunk";
import fetchAuthThunk from "../../../../common/slices/register/thunks/fetchAuthThunk";
import { useDispatch, useSelector } from "react-redux";
import { authorizeActions } from "../../../../common/slices/register/authorizeSlice";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import fetchResetThunk from "../../../../common/slices/register/thunks/fetchResetThunk";


const AuthOrRegister = ({ formType, onClose, onChangeFormType, onCheckIsValidHandler, formIsValid }) => {
  const dispatch = useDispatch()

  const formSubmitHandler = async event => {
    event.preventDefault()

    switch (formType) {
      case "register":
        const register = {
          username: event.target.username.value,
          password: event.target.password.value,
          re_password: event.target.re_password.value,
          email: event.target.email.value
        }
        await fetchRegisterThunk(register)
        dispatch(authFormActions.openOrCloseForm())
        break

      case "auth":
        const auth = {
          email: event.target.email.value,
          password: event.target.password.value
        }
        const authResponse = await fetchAuthThunk(auth)
        dispatch(authorizeActions.login(authResponse.auth_token))
        dispatch(authFormActions.openOrCloseForm())
        break

      case "reset":
        const reset = {
          email: event.target.email.value,
        }
        await fetchResetThunk(reset)
        dispatch(authFormActions.openOrCloseForm())
        break
    }

  }
  return (
    <Modal onClose={onClose}>
      <FormCard innerClass={classes["login-box"]}>
        {formType === "auth" ?
          <Fragment>
            <h2>Увійти</h2>
            <button onClick={() => onChangeFormType('register')}>Зареєструватися</button>
          </Fragment> :
          formType === "register" ?
            <Fragment>
              <h2>Зареєструватися</h2>
              <button onClick={() => onChangeFormType('auth')}>Увійти</button>
              <button onClick={() => onChangeFormType('reset')}>Змінити пароль</button>

            </Fragment> :
            <Fragment>
              <h2>Змінити пароль</h2>
              <button onClick={() => onChangeFormType('auth')}>Назад</button>
            </Fragment>
        }
        {formType === "register" &&
          <Register submitHandler={formSubmitHandler}
                    onCheckIsValidHandler={onCheckIsValidHandler}
                    formIsValid={formIsValid}/>}

        {formType === "auth" &&
          <Auth submitHandler={formSubmitHandler}
                onCheckIsValidHandler={onCheckIsValidHandler}
                formIsValid={formIsValid}/>}

        {formType === "reset" &&
          <ResetPassword submitHandler={formSubmitHandler}
                         onCheckIsValidHandl1er={onCheckIsValidHandler}
                         formIsValid={formIsValid}
          />}
      </FormCard>
    </Modal>
  );
}
AuthOrRegister.propTypes = {
  formType: PropTypes.string,
  onClose: PropTypes.func,
  onChangeFormType: PropTypes.func,
  onCheckIsValidHandler: PropTypes.func,
  formIsValid: PropTypes.bool,
  submitHandler: PropTypes.func
}
export default AuthOrRegister