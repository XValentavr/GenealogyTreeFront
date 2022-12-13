import React from "react";
import classes from './styles/Textarea.module.css'
import LabelCard from "../Card/LabelCard";
import PropTypes from "prop-types";

const Textarea = ({inputClass, id, label}) => {
    return (
        <div className={inputClass}>
            <textarea rows="10" cols="50" id="Інформація" className={classes.created_textarea}/>
            <LabelCard htmlFor={id}>{label}</LabelCard>
        </div>
    );
}

Textarea.propTypes = {
    inputClass: PropTypes.string,
    id: PropTypes.number,
    label: PropTypes.string
}
export default Textarea