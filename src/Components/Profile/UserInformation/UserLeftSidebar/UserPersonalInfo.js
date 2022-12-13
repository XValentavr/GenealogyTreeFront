import React, {Fragment} from "react";
import classes from './UserPersonalInfo.module.css'

const UserPersonalInfo = props => {
    return (
        <Fragment>
            <input type="file"/>
            <input type="text" className={classes.userInformation}/>
            <div>Имя</div>
            <input type="text" className={classes.userInformation}/>
            <div>Фамилия</div>
            <input type="text" className={classes.userInformation}/>
            <div>Отчество</div>
            <input type="date" className={classes.userInformation}/>
            <div>Год рождения</div>
            <input type="email" className={classes.userInformation}/>
            <div>Почта</div>

        </Fragment>
    )
        ;
}
export default UserPersonalInfo;
