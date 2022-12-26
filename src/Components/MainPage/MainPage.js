import React from "react";
import AboutUs from "./Content/AboutUs/AboutUs";
import Homepage from "./Content/Homepage/Homepage";
import FeedbackOrAuthForm from "./Content/FeedbackOrAuth/FeedbackOrAuthForm";
import { useSelector } from "react-redux";
import { getAuthFormIsOpened } from "../../common/selectors/authFormSelectors/authFormSelectors";
import { Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./Content/Navbar/MainNav";
import Profile from "../Profile/Profile";
import { getIsLoggedIn } from "../../common/selectors/authorizationSelectors/authorizeSelector";

const MainPage = props => {
  const authFormIsOpened = useSelector(getAuthFormIsOpened)
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <MainNav>
      {authFormIsOpened ?
        <FeedbackOrAuthForm/> :
        <Switch>
          <Route path='/' exact>
            <Redirect to="/homepage"/>
          </Route>
          <Route path="/homepage">
            <Homepage/>
          </Route>
          <Route path="/about">
            <AboutUs/>
          </Route>
          {isLoggedIn && <Route path="/profile/:userUUID" exact>
            <Profile/>
          </Route>}
          {!isLoggedIn && <Redirect to="/homepage"/>}
          <Route path='*' exact>
            <Redirect to="/homepage"/>
          </Route>
        </Switch>

      }
    </MainNav>
  );
}
export default MainPage