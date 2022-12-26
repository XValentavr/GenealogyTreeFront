import React, { useCallback, useEffect } from "react";
import classes from './styles/Nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import { NavLink, useParams, useRouteMatch } from "react-router-dom";
import { getAuthToken } from "../../../../common/selectors/authorizationSelectors/authorizeSelector";
import { authorizeActions } from "../../../../common/slices/registerSlices/authorizeSlice";
import getUserHandler from "../../../../common/handlers/userHandlers/getUserHandler";
import { getUser } from "../../../../common/selectors/userSelectors/userDataSelector";
import { userInformationActions } from "../../../../common/slices/userSlices/userInformationSlice";
import { userActions } from "../../../../common/slices/userSlices/userSlice";

const Nav = props => {
  const dispatch = useDispatch()
  let link = '/homepage'
  const isLoggedIn = useSelector(getAuthToken)

  const openFeedbackOrAuthHandler = event => {
    dispatch(authFormActions.setFormType(event.target.id))
    dispatch(authFormActions.openOrCloseForm())
  }

  const logoutHandler = useCallback(() => {
    dispatch(authorizeActions.logout())
    dispatch(userInformationActions.deleteInformation())
    dispatch(userActions.deleteUser())

  }, [dispatch])
  useEffect(() => {
    dispatch(getUserHandler())

  }, [isLoggedIn])

  const user = useSelector(getUser)
  if (user) {
    link = `/profile/${user?.id}`
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
        {isLoggedIn && (
          <>
            <li>
              <NavLink activeClassName={classes.active} to={link}>Профіль</NavLink>
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