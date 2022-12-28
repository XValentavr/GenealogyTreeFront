import React, { Fragment, useCallback } from "react";
import classes from "./styles/Feedback.module.css";
import Modal from "../../UI/Modal";
import FormCard from "../../Card/FormCard";
import Auth from "./Auth";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import registerHandler from "../../../../common/handlers/registerHandlers/registerHandler";
import authHandler from "../../../../common/handlers/registerHandlers/authHandler";
import resetHandler from "../../../../common/handlers/registerHandlers/resetHandler";

const AuthOrRegister = ({ formType, onClose, onChangeFormType }) => {
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
        dispatch(registerHandler(register))
        dispatch(authFormActions.openOrCloseForm())
        break

      case "auth":
        const authData = {
          email: event.target.email.value,
          password: event.target.password.value
        }
        dispatch(authHandler(authData))
        dispatch(authFormActions.openOrCloseForm())
        break

      case "reset":
        const reset = {
          email: event.target.email.value,
        }
        dispatch(resetHandler(reset))
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
          <Register submitHandler={formSubmitHandler}/>}

        {formType === "auth" &&
          <Auth submitHandler={formSubmitHandler}/>}

        {formType === "reset" &&
          <ResetPassword submitHandler={formSubmitHandler}/>}
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