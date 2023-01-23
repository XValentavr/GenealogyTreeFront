import React from "react";
import AboutUs from "./Content/AboutUs/AboutUs";
import Homepage from "./Content/Homepage/Homepage";
import FeedbackOrAuthForm from "./Content/FeedbackOrAuth/FeedbackOrAuthForm";
import {useSelector} from "react-redux";
import {getAuthFormIsOpened} from "../../common/selectors/authFormSelectors/authFormSelectors";
import {Redirect, Route, Switch} from "react-router-dom";
import MainNav from "./Content/Navbar/MainNav";
import Profile from "../Profile/Profile";
import {getIsLoggedIn} from "../../common/selectors/authorizationSelectors/authorizeSelector";
import GenealogistRegister from "../Genealogist/GenealogistRegister";
import {getIsGenealogist, getIsMainGenealogist} from "../../common/selectors/userSelectors/userDataSelector";
import Genealogist from "../Genealogist/Genealogist";
import TreeArea from "../Tree/TreeArea";
import GenealogistOrders from "../Genealogist/GenealogistOrders";

const MainPage = props => {
    const authFormIsOpened = useSelector(getAuthFormIsOpened)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const isMainGenealogist = useSelector(getIsMainGenealogist)
    const isGenealogist = useSelector(getIsGenealogist)
    return (
        <MainNav isLoggedIn={isLoggedIn} isMainGenealogist={isMainGenealogist} isGenealogist={isGenealogist}>
            {authFormIsOpened ?
                <FeedbackOrAuthForm/> :
                <Switch>
                    <Route path='/' exact>
                        <Redirect to="/homepage"/>
                    </Route>
                    {isLoggedIn && (
                        <>
                            <Route path="/homepage">
                                <Homepage/>
                            </Route>
                            <Route path="/about">
                                <AboutUs/>
                            </Route>
                            {isMainGenealogist &&
                                <>
                                    <Route path="/orders" exact>
                                        <Genealogist/>
                                    </Route>
                                    <Route path="/genealogist/register" exact>
                                        <GenealogistRegister/>
                                    </Route>
                                </>}
                            {(isGenealogist || isMainGenealogist) &&
                                <Route path="/tree/:treeId" exact>
                                    <TreeArea/>
                                </Route>}
                            {isGenealogist &&
                                <Route path="/orders/:treeId" exact>
                                    <GenealogistOrders/>
                                </Route>}

                            {!isMainGenealogist && <Route path="/profile/:userId" exact>
                                <Profile/>
                            </Route>}
                        </>)
                    }
                    {!isLoggedIn && (
                        <Route path='*' exact>
                            <Redirect to="/homepage"/>
                        </Route>
                    )}
                </Switch>
            }
        </MainNav>
    );
}
export default MainPage