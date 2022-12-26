import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from "./styles/Feedback.module.css";
import Button from "../../UI/Button";
import ShowPassword from "../../UI/ShowPassword";
import PropTypes from "prop-types";

const Auth = ({ submitHandler }) => {
  const [show, setShow] = useState(false)
  const togglePassword = () => setShow(!show)

  return (
    <form onSubmit={submitHandler}>
      <div>
        <Input id="password" inputClass={classes["user-box"]}
               type={!show ? "password" : "text"}
               name="Password"
               label="Ваш пароль"/>
        <ShowPassword label={!show ? "show" : "hide"} togglePassword={togglePassword}/>
      </div>
      <Input id="email" inputClass={classes["user-box"]}
             type="text" label="Пошта" name="Email"/>
      <Button type="submit" buttonText="Увійти">
      </Button>
    </form>
  )
}
Auth.propTypes = {
  submitHandler: PropTypes.func,
}
export default Auth