import React from "react";
import classes from './styles/Input.module.css'
import LabelCard from "../Card/LabelCard";
import useInput from "../hooks/use-input";


const Input = props => {
  const {
    value,
    isValid,
    errorDetected,
    valueInputHandler,
    valueBlurHandler,
  } = useInput(props.type)

  const finalClassCss = errorDetected ? classes.invalid_input : classes.created_input
  return (
    <div className={props.inputClass}>
      <input onChange={valueInputHandler} onBlur={valueBlurHandler} id={props.id} className={finalClassCss}
             value={value} name={props.name} type={props.type} required/>
      <LabelCard htmlFor={props.id}>{props.label}</LabelCard>
      {errorDetected && <p className={classes['error-text']}>Please enter valid data!</p>}
    </div>
  );
};
export default Input