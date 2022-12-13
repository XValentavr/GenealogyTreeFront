import React from "react";
import classes from './styles/Nav.module.css'
import { useDispatch } from "react-redux";
import { authActions } from "../../../../slices/authFormSlices/authFormSlice";
import { NavLink } from "react-router-dom";

const Nav = props => {
  const dispatch = useDispatch()
  const openFeedbackOrAuthHandler = event => {
    dispatch(authActions.setFormType(event.target.id))
    dispatch(authActions.openOrCloseForm())

  }
  return (
    <div className={classes.wrapper}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/homepage">Домашня</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/about">Про нас</NavLink>
        </li>
        <li id='feedback' onClick={openFeedbackOrAuthHandler}>Зв'язок з нами</li>
        <li id='auth' onClick={openFeedbackOrAuthHandler}>Авторизація</li>
      </ul>
    </div>
  );
}
export default Nav