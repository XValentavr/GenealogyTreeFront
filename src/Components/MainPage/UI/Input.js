import React from "react";
import classes from './styles/Input.module.css'
import LabelCard from "../Card/LabelCard";


const Input = props => {

  return (
    <div className={props.inputClass}>
      <input id={props.id} className={classes.created_input}
             value={props.value} name={props.name} type={props.type} required={props.isRequired}/>
      <LabelCard htmlFor={props.id}>{props.label}</LabelCard>
    </div>
  );
};
export default Input