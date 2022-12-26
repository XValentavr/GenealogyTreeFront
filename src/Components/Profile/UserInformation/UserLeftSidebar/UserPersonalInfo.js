import React, { Fragment, useCallback, useEffect } from "react";
import classes from './styles/UserPersonalInfo.module.css'
import getUserInformation from "../../../../common/handlers/userHandlers/getUserInformation";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfileInformation
} from "../../../../common/selectors/userSelectors/userDataSelector";
import { useParams } from "react-router-dom";

const UserPersonalInfo = props => {
  const dispatch = useDispatch()
  const readonly = false
  const uuid = useParams()


  useEffect(() => {
    dispatch(getUserInformation(uuid?.userUUID))

  }, [dispatch])
  const data = useSelector(getUserProfileInformation)
  return (
    <Fragment>
      <input type="file"/>
      <input type="text" className={classes.userInformation} readOnly={readonly} defaultValue={data?.userName}/>
      <div>Имя</div>
      <input type="text" className={classes.userInformation} readOnly={readonly}/>
      <div>Фамилия</div>
      <input type="text" className={classes.userInformation} readOnly={readonly} defaultValue={data?.lastName}/>
      <div>Отчество</div>
      <input type="date" className={classes.userInformation} readOnly={readonly}/>
      <div>Год рождения</div>
      <input type="email" className={classes.userInformation} readOnly={readonly} defaultValue={data?.email}/>
      <div>Почта</div>

    </Fragment>
  )
    ;
}
export default UserPersonalInfo;
