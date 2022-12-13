import React from "react";
import classes from './Nav.module.css'
import {useDispatch} from "react-redux";
import {authActions} from "../../../../slices/authFormSlices/authFormSlice";

const Nav = props => {
    const dispatch = useDispatch()
    const openFeedbackOrAuthHandler = event => {
        dispatch(authActions.setFormType(event.target.id))
        dispatch(authActions.openOrCloseForm())

    }
    return (
        <div className={classes.wrapper}>
            <ul>
                <li><a href="#homepage">Домашня</a></li>
                <li><a href="#aboutUs">Про нас</a></li>
                <li id='feedback' onClick={openFeedbackOrAuthHandler}>Зв'язок з нами</li>
                <li id='auth' onClick={openFeedbackOrAuthHandler}>Авторизація</li>
            </ul>
        </div>
    );
}
export default Nav