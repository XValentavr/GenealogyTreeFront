import Input from "../MainPage/UI/Input";
import ShowPassword from "../MainPage/UI/ShowPassword";
import React, { useState } from "react";
import classes from "../MainPage/Content/FeedbackOrAuth/styles/Feedback.module.css";
import Button from "../MainPage/UI/Button";
import Modal from "../MainPage/UI/Modal";
import FormCard from "../MainPage/Card/FormCard";
import { useHistory } from "react-router-dom";
import registerHandler from "../../common/handlers/registerHandlers/registerHandler";
import { useDispatch } from "react-redux";

const GenealogistRegister = props => {
  const [show, setShow] = useState(false)
  const togglePassword = () => setShow(!show)
  const history = useHistory()
  const dispatch = useDispatch()
  const submitHandler = event => {
    event.preventDefault()

    const register = {
      username: event.target.username.value,
      password: event.target.password.value,
      re_password: event.target.re_password.value,
      email: event.target.email.value,
      is_genealogist: true
    }
    dispatch(registerHandler(register))
    history.push('/homepage')
  }

  return (
    <Modal>
      <FormCard innerClass={classes["login-box"]}>
        <h2>Зареєструватися</h2>
        <form onSubmit={submitHandler}>
          <div>
            <Input id="password" inputClass={classes["user-box"]}
                   type={!show ? "password" : "text"}
                   name="Password"
                   label="Ваш пароль"/>
            <ShowPassword label={!show ? "show" : "hide"} togglePassword={togglePassword}/>
          </div>
          <div>
            <Input id="re_password" inputClass={classes["user-box"]}
                   type={!show ? "password" : "text"}
                   name="Password"
                   label="Повторіть пароль"/>
          </div>
          <Input id="email" inputClass={classes["user-box"]}
                 type="text" label="Пошта" name="Email"/>
          <Input id="username" inputClass={classes["user-box"]}
                 type="text"
                 name="username"
                 label="Введіть ФІО"
          />
          <Button type="submit" buttonText="Увійти">
          </Button>
        </form>
      </FormCard>
    </Modal>
  )
    ;
}
export default GenealogistRegister
