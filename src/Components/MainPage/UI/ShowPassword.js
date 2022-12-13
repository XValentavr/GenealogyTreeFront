import React from "react";
import PropTypes from "prop-types";

const ShowPassword = ({togglePassword, label}) => {
    return (
        <button type="button" onClick={togglePassword}>{label}</button>
    );

}
ShowPassword.propTypes = {togglePassword: PropTypes.func, label: PropTypes.string}
export default ShowPassword