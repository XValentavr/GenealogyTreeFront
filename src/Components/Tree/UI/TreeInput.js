import PropTypes from "prop-types";
import classes from './styles/InputTree.module.css'

const TreeInput = ({ readOnly, type, id, text, value, checked }) => {
  return (
    <>
      <input checked={checked} id={id} type={type} readOnly={readOnly} className={classes.input}
             value={value ? value : undefined}/>
      <label htmlFor={id}>{text}</label>
    </>
  );
}
TreeInput.propTypes = {
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.bool
}

export default TreeInput