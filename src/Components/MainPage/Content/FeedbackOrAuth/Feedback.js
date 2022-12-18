import React from "react";
import Modal from "../../UI/Modal";
import FormCard from "../../Card/FormCard";
import classes from "./styles/Feedback.module.css";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import Button from "../../UI/Button";
import {useDispatch} from "react-redux";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import PropTypes from "prop-types";

const Feedback = ({onCheckIsValidHandler, formIsValid, submitHandler}) => {
    const dispatch = useDispatch()
    const onCloseFormHandler = () => {
        dispatch(authFormActions.openOrCloseForm())
    }
    return (
        <Modal onClose={onCloseFormHandler}>
            <FormCard innerClass={classes["login-box"]}>
                <h2>Зв'язок з нами</h2>
                <form onSubmit={submitHandler}>
                    <Input onCheckIsValid={onCheckIsValidHandler} id="Full name" inputClass={classes["user-box"]}
                           type="text"
                           name="Full name"
                           label="Ваші дані"/>
                    <Input onCheckIsValid={onCheckIsValidHandler} id="Email" inputClass={classes["user-box"]}
                           type="text" label="Пошта" name="Email"/>
                    <Textarea inputClass={classes["user-box"]} id="Entered text" label="Ваше зверненя"
                              name="Entered text"/>
                    <Button disabled={!formIsValid} type="submit" buttonText="Відправити">
                    </Button>
                </form>
            </FormCard>
        </Modal>
    );
}
Feedback.propTypes = {
    onCheckIsValidHandler: PropTypes.func,
    formIsValid: PropTypes.bool,
    submitHandler: PropTypes.func
}
export default Feedback