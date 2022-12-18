import React, { useCallback } from "react";
import classes from './styles/Nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import { NavLink } from "react-router-dom";
import { getAuthToken } from "../../../../common/selectors/authorizationSelectors/authorizeSelector";
import { authorizeActions } from "../../../../common/slices/register/authorizeSlice";

const Nav = props => {
  const dispatch = useDispatch()

  const openFeedbackOrAuthHandler = event => {
    dispatch(authFormActions.setFormType(event.target.id))
    dispatch(authFormActions.openOrCloseForm())
  }

  const logoutHandler = useCallback(() => {
    dispatch(authorizeActions.logout())
  }, [dispatch])

  const isLoggedIn = useSelector(getAuthToken)
  return (
    <div className={classes.wrapper}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/homepage">Домашня</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/about">Про нас</NavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavLink activeClassName={classes.active} to="/profile">Профіль</NavLink>
            </li>
            <li id='logout' onClick={logoutHandler}>Вийти з акаунту</li>
          </>
        )}
        <li id='feedback' onClick={openFeedbackOrAuthHandler}>Зв'язок з нами</li>
        {!isLoggedIn &&
          <li id='auth' onClick={openFeedbackOrAuthHandler}>Авторизація</li>}

      </ul>
    </div>
  );
}
export default Nav