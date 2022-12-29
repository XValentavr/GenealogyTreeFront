import PropTypes from "prop-types";
import classes from './styles/ButtonTree.module.css'

const TreeButton = ({ id, type, text, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} id={id} type={type} className={classes.button}>{text}</button>
  );
}
TreeButton.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  onClickHandler: PropTypes.func
}
export default TreeButton