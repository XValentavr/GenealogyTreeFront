import classes from './styles/TreeArea.module.css'
import TreeRootElement from "./TreeRootElement";

const TreeArea = props => {

  return (
    <div className={classes.area}>
      <TreeRootElement/>
    </div>
  );
}
export default TreeArea