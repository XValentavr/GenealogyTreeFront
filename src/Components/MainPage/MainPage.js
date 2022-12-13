import React from "react";
import AboutUs from "./Content/AboutUs/AboutUs";
import Homepage from "./Content/Homepage/Homepage";
import FeedbackOrAuthForm from "./Content/FeedbackOrAuth/FeedbackOrAuthForm";
import { useSelector } from "react-redux";
import { getAuthFormIsOpened } from "../../slices/authFormSlices/authFormSelectors";
import { Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./Content/Navbar/MainNav";

const MainPage = props => {
  const authFormIsOpened = useSelector(getAuthFormIsOpened)
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
        </Switch>
      }
    </MainNav>
  );
}
export default MainPage