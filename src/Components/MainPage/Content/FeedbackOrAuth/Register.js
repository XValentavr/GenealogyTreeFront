import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from "./styles/Feedback.module.css";
import Button from "../../UI/Button";
import ShowPassword from "../../UI/ShowPassword";

const Register = props => {
  const [show, setShow] = useState(false)
  const togglePassword = () => setShow(!show)


  return (
    <form onSubmit={props.submitHandler}>
      <div>
        <Input id="password" inputClass={classes["user-box"]}
               type={!show ? "password" : "text"}
               name="Password"
               label="Ваш пароль"
        />
        <ShowPassword label={!show ? "show" : "hide"} togglePassword={togglePassword}/>
      </div>
      <Input id="re_password" inputClass={classes["user-box"]}
             type={!show ? "password" : "text"}
             name="RepPassword"
             label="Повторіть пароль"
      />
      <Input id="email" inputClass={classes["user-box"]}
             type="text" label="Пошта" name="Email"
      />
      <Input id="username" inputClass={classes["user-box"]}
             type="text"
             name="username"
             label="Введіть ФІО"
      />
      <Button type="submit" buttonText="Зареєструватися">
      </Button>
    </form>
  )
}
export default Register