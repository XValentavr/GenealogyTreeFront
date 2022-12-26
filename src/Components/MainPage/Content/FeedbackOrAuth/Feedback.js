import React from "react";
import Modal from "../../UI/Modal";
import FormCard from "../../Card/FormCard";
import classes from "./styles/Feedback.module.css";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import supportHandler from "../../../../common/handlers/userHandlers/supportHandler";
import moment from "moment";

const Feedback = () => {
  const dispatch = useDispatch()
  const onCloseFormHandler = () => {
    dispatch(authFormActions.openOrCloseForm())
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const support = {
      name: event.target.name.value,
      context: event.target.context.value,
      phone: event.target.phone.value,
      date: moment(new Date()).format('YYYY-MM-DD'),
      email: event.target.email.value
    }
    dispatch(supportHandler(support))
    dispatch(authFormActions.openOrCloseForm())
  }
  return (
    <Modal onClose={onCloseFormHandler}>
      <FormCard innerClass={classes["login-box"]}>
        <h2>Зв'язок з нами</h2>
        <form onSubmit={submitHandler}>
          <Input id="name" inputClass={classes["user-box"]}
                 type="text"
                 name="Full name"
                 label="Ваші дані" isRequired={true}/>
          <Input id="phone" inputClass={classes["user-box"]}
                 type="text"
                 name="phone"
                 label="Ваш номер (опціонально)" isRequired={false}/>
          <Input id="email" inputClass={classes["user-box"]}
                 type="text" label="Пошта" name="Email" isRequired={true}/>
          <Textarea inputClass={classes["user-box"]} id="context" label="Ваше зверненя"
                    name="Entered text" isRequired={true}/>
          <Button type="submit" buttonText="Відправити">
          </Button>
        </form>
      </FormCard>
    </Modal>
  );
}

export default Feedback