import React from "react";
import Input from "../../UI/Input";
import classes from "./styles/Feedback.module.css";
import Button from "../../UI/Button";

const ResetPassword = props => {
    return (
        <form onSubmit={props.submitHandler}>
            <Input onCheckIsValid={props.onCheckIsValidHandler} id="Email" inputClass={classes["user-box"]}
                   type="email" label="Пошта" name="Email"/>
            <Button disabled={!props.formIsValid} type="submit" buttonText="Змінити пароль">
            </Button>
        </form>
    );
}
export default ResetPassword