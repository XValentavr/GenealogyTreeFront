import React from "react";
import classes from './styles/SectionCard.module.css'

const SectionCard = props => {
    return (
            <section id={props.id} className={classes[props.cssClass]}>{props.children}</section>
    );
}
export default SectionCard