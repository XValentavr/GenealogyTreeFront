import classes from './styles/TreeArea.module.css'
import TreeRootElement from "./TreeRootElement";
import React, { useState } from "react";
import useMousePositionHook from "../../hooks/useMousePositionHook";
import ScrollContainer from "react-indiana-drag-scroll";

const TreeArea = props => {
  const [scale, setScale] = useState(1)
  const zoom = event => {
    if (event.nativeEvent.wheelDelta > 0) {
      setScale(scale * 2)
    } else {
      setScale(scale / 2)
    }
  }
  const mousePosition = useMousePositionHook();
  return (
    <div className={classes.area} onWheel={zoom}>
      <ScrollContainer className={classes.area}>
        <TreeRootElement style={{ 'transform': `scale(${scale})` }}/>
      </ScrollContainer>
    </div>
  );
}
export default TreeArea