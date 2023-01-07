import PropTypes from "prop-types";
import classes from './styles/InputTree.module.css'
import React from "react";

const TreeInput = React.forwardRef(({ readOnly, type, id, text, value, defaultValue, checked }, ref) => {
  return (
    <>
      <input checked={checked} id={id} type={type} readOnly={readOnly} className={classes.input}
             value={value ? value : undefined} defaultValue={defaultValue} ref={ref}/>
      <label htmlFor={id}>{text}</label>
    </>
  );
})
TreeInput.propTypes = {
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.bool,
  checked: PropTypes.bool
}

export default TreeInput