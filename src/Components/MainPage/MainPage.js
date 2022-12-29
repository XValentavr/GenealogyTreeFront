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
import GenealogistRegister from "../Genealogist/GenealogistRegister";
import { getIsMainGenealogist } from "../../common/selectors/userSelectors/userDataSelector";
import Genealogist from "../Genealogist/Genealogist";
import TreeArea from "../Tree/TreeArea";

const MainPage = props => {
  const authFormIsOpened = useSelector(getAuthFormIsOpened)
  const isLoggedIn = useSelector(getIsLoggedIn)
  const isGenealogist = useSelector(getIsMainGenealogist)
  return (
    <MainNav isLoggedIn={isLoggedIn} isGenealogist={isGenealogist}>
      {authFormIsOpened ?
        <FeedbackOrAuthForm/> :
        <Switch>
          <Route path='/' exact>
            <Redirect to="/homepage"/>
          </Route>
          {!isLoggedIn && (
            <>
              <Route path="/homepage">
                <Homepage/>
              </Route>
              <Route path="/about">
                <AboutUs/>
              </Route>
              <Route path="/genealogist/register" exact>
                <GenealogistRegister/>
              </Route>
            </>)}
          {isGenealogist && <Route path="/genealogist" exact>
            <Genealogist/>
          </Route>}
          {isLoggedIn && <Route path="/profile/:userId" exact>
            <Profile/>
          </Route>}
          {isLoggedIn && <Route path="/tree/:treeId" exact>
            <TreeArea/>
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