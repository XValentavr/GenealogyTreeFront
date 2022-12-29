import React from "react";
import classes from './styles/FormCardTree.module.css'
const TreeFormCard = props => {
  return (
    <div className={classes.treeCardBox}>
      {props.children}
    </div>
  );
}
export default TreeFormCard