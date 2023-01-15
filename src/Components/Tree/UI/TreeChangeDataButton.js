import classes from './styles/TreeChangeDataButton.module.css'
const TreeChangeDataButton = ({onChangeData})=>{
  return(
  <button className={classes.change} onClick={onChangeData}></button>
  );
}
export default TreeChangeDataButton