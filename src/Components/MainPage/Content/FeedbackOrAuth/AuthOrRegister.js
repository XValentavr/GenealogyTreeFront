import React, {Fragment} from "react";
import classes from "./styles/Feedback.module.css";
import Modal from "../../UI/Modal";
import FormCard from "../../Card/FormCard";
import Auth from "./Auth";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import PropTypes from "prop-types";

const AuthOrRegister = ({formType, onClose, onChangeFormType, onCheckIsValidHandler, formIsValid, submitHandler}) => {

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
                    <Register submitHandler={submitHandler}
                              onCheckIsValidHandler={onCheckIsValidHandler}
                              formIsValid={formIsValid}/>}

                {formType === "auth" &&
                    <Auth submitHandler={submitHandler}
                          onCheckIsValidHandler={onCheckIsValidHandler}
                          formIsValid={formIsValid}/>}

                {formType === "reset" &&
                    <ResetPassword submitHandler={submitHandler}
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