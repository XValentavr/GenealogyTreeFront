import React from "react";
import classes from './styles/Textarea.module.css'
import LabelCard from "../Card/LabelCard";
import PropTypes from "prop-types";

const Textarea = ({ inputClass, id, label, isRequired }) => {
  return (
    <div className={inputClass}>
      <textarea rows="10" cols="50" id={id} className={classes.created_textarea} required={isRequired}/>
      <LabelCard htmlFor={id}>{label}</LabelCard>
    </div>
  );
}

Textarea.propTypes = {
  inputClass: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool
}
export default Textarea