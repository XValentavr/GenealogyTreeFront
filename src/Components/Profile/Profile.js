import React, { Fragment } from "react";
import UserLeftSidebar from "./UserInformation/UserLeftSidebar/UserLeftSidebar";
import UserRightSidebar from "./UserInformation/UserRightSidebar/UserRightSidebar";
import classes from './Profile.module.css'
import UserStory from "./UserStory/UserStory";
import { useHistory, useParams } from "react-router-dom";
import { getUser } from "../../common/selectors/userSelectors/userDataSelector";
import { useSelector } from "react-redux";


const userFragment = <Fragment>
  <div className={classes.profile}>
    <UserLeftSidebar/>
    <UserStory/>
    <UserRightSidebar/>
  </div>
</Fragment>

const Profile = props => {
  const params = useParams()
  const user = useSelector(getUser)
  const history = useHistory()
  if (user) {
    if (params.userUUID === user?.id) {
      return userFragment
    }
    history.push(`/profile${user}`)
    return userFragment
  }
}
export default Profile