import React, {Fragment} from "react";
import Nav from "./Content/Navbar/Nav";
import AboutUs from "./Content/AboutUs/AboutUs";
import Homepage from "./Content/Homepage/Homepage";
import FeedbackOrAuthForm from "./Content/FeedbackOrAuth/FeedbackOrAuthForm";
import {useSelector} from "react-redux";
import {getAuthFormIsOpened} from "../../slices/authFormSlices/authFormSelectors";

const MainPage = props => {
    const authFormIsOpened = useSelector(getAuthFormIsOpened)
    return (
        <Fragment>
            <Nav/>
            {authFormIsOpened ?
                <FeedbackOrAuthForm /> :
                <React.Fragment>
                    <Homepage/>
                    <AboutUs/>
                </React.Fragment>
            }
        </Fragment>
    );
}
export default MainPage