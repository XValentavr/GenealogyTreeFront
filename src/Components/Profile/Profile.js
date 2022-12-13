import React, {Fragment} from "react";
import UserLeftSidebar from "./UserInformation/UserLeftSidebar/UserLeftSidebar";
import UserRightSidebar from "./UserInformation/UserRightSidebar/UserRightSidebar";
import classes from './Profile.module.css'
import UserStory from "./UserStory/UserStory";
const Profile = props => {
    return (
        <Fragment>
            <div className={classes.profile}>
                <UserLeftSidebar/>
                <UserStory/>
                <UserRightSidebar/>
            </div>
        </Fragment>
    );
}
export default Profile