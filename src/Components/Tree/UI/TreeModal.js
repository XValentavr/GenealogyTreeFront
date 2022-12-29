import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './styles/ModalTree.module.css'

const portalFeedback = document.getElementById('overlays')
const Overlay = props => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  );
}
const TreeModal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<div className={classes.backdrop} onClick={props.onClose}/>, portalFeedback)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalFeedback)}
    </Fragment>
  );
}

export default TreeModal