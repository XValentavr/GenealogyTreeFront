import classes from './styles/TreeArea.module.css'
import TreeRootElement from "./TreeRootElement";
import React, { useState } from "react";

const TreeArea = props => {
  const [scale, setScale] = useState(1)
  const zoom = event => {
    if (event.nativeEvent.wheelDelta > 0) {
      setScale(scale * 2)
    } else {
      setScale(scale / 2)
    }
  }
  return (
    <div className={classes.wrapperArea} onWheel={zoom}>
      <div className={classes.area} style={{ 'transform': `scale(${scale})` }}>
        <TreeRootElement/>
      </div>
    </div>
  );
}
export default TreeArea