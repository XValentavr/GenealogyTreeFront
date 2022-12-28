import Modal from "./UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import getUsersHandler from "../../common/handlers/userHandlers/getAllUsers";
import { getUsersIsGenealogist } from "../../common/selectors/usersSelectors/usersSelectors";
import FormCard from "../MainPage/Card/FormCard";
import classes from "./styles/GenealogistInListStyle.module.css"
import patchOrderingHandler from "../../common/handlers/ordering/patchOrderingHandler";


const GenealogistList = ({ onClose, orderId, setIsOnModal, isOnModal }) => {
  const dispatch = useDispatch()
  const [isOnRadio, setIsOnRadio] = useState(false)
  const [genealogistId, setGenealogistId] = useState('')
  const users = useSelector(getUsersIsGenealogist)

  useEffect(() => {
      dispatch(getUsersHandler())
  }, [genealogistId, dispatch])

  const submitHandler = async event => {
    event.preventDefault()
    await dispatch(patchOrderingHandler(orderId, genealogistId))
    setIsOnModal(!isOnModal)
  }

  const setIsOnRadioHandler = (genealogistId) => {
    setIsOnRadio(true)
    setGenealogistId(genealogistId)
  }


  if (users) {
    return (
      <Modal onClose={onClose}>
        <FormCard innerClass={classes["login-box"]}>
          {users.map((user) => {
            return <div key={user.id}>
              <div className={classes.genealogist}>
                {user.userName}
              </div>
              <div className={classes.genealogist}>
                {user.email}
              </div>
              <div className={classes.genealogist}>
                {user.lastName}
              </div>
              <input name='radio' onClick={() => setIsOnRadioHandler(user.id)} type={"radio"}/>
            </div>
          })}
          {isOnRadio && <button onClick={submitHandler}>Підтвердити</button>}
        </FormCard>
      </Modal>
    );
  }
}
export default GenealogistList