import React, {Fragment} from "react";
import classes from './styles/Button.module.css'
import PropTypes from "prop-types";

const Button = ({label, type, disabled, buttonText}) => {
    return (
        <Fragment>
            <label>{label}</label>
            <button className={classes.created_button} type={type} disabled={disabled}>
                {buttonText}</button>
        </Fragment>
    );
}
Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string
}
export default Button