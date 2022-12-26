import React from "react";
import classes from './styles/UserLeftSidebar.module.css'
import UserAvatar from "./UserAvatar";
import UserPersonalInfo from "./UserPersonalInfo";

const UserLeftSidebar = props => {
    return (
        <div className={classes.leftSidebar}>
            <UserAvatar/>
            <UserPersonalInfo/>
        </div>
    );
}
export default UserLeftSidebar