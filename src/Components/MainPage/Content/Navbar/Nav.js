import React, { useCallback, useEffect } from "react";
import classes from './styles/Nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { authFormActions } from "../../../../common/slices/authFormSlices/authFormSlice";
import { NavLink } from "react-router-dom";
import { authorizeActions } from "../../../../common/slices/registerSlices/authorizeSlice";
import getUserHandler from "../../../../common/handlers/userHandlers/getUserHandler";
import { getIsGenealogist, getUser } from "../../../../common/selectors/userSelectors/userDataSelector";
import { userInformationActions } from "../../../../common/slices/userSlices/userInformationSlice";
import { userActions } from "../../../../common/slices/userSlices/userSlice";
import getUserInformation from "../../../../common/handlers/userHandlers/getUserInformation";
import treeInitialHandler from "../../../../common/handlers/treeHandlers/treeInitialHandler";
import { getInitialTreeId } from "../../../../common/selectors/treeSelectors/treeSelectors";

let link = '/homepage'

const Nav = props => {
  const dispatch = useDispatch()

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
  }, [props.isLoggedIn, dispatch])

  const user = useSelector(getUser)
  const initialTree = useSelector(getInitialTreeId)

  if (user) {
    link = `/profile/${user?.id}`
  }
  useEffect(() => {
    if (user) {
      dispatch(getUserInformation(user.id))
      dispatch(treeInitialHandler(user.id))
    }

  }, [user])
  const isGenealogist = useSelector(getIsGenealogist)
  return (
    <div className={classes.wrapper}>
      <ul>
        {!props.isLoggedIn &&
          <>
            <li>
              <NavLink activeClassName={classes.active} to="/homepage">Домашня</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/about">Про нас</NavLink>
            </li>
          </>
        }
        {props.isLoggedIn && (
          <>
            {isGenealogist &&
              <li>
                <NavLink activeClassName={classes.active} to="/genealogist">Замовлення</NavLink>
              </li>
            }
            {initialTree &&
              <li>
                <NavLink activeClassName={classes.active} to={`/tree/${initialTree}`}>Ваше дерево</NavLink>
              </li>
            }
            <li>
              <NavLink activeClassName={classes.active} to={link}>Профіль</NavLink>
            </li>
            <li id='logout' onClick={logoutHandler}>Вийти з акаунту</li>
          </>
        )}
        {!props.isLoggedIn &&
          <>
            <li id='auth' onClick={openFeedbackOrAuthHandler}>Авторизація</li>
            <li id='feedback' onClick={openFeedbackOrAuthHandler}>Зв'язок з нами</li>
          </>
        }
      </ul>
    </div>
  );
}
export default Nav