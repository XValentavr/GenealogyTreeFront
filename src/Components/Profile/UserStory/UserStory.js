import React from "react";
import classes from './styles/UserStory.module.css'
import { useDispatch, useSelector } from "react-redux";
import {
  getIsGenealogist,
  getIsMainGenealogist,
  getUser
} from "../../../common/selectors/userSelectors/userDataSelector";
import createOrderingHandler from "../../../common/handlers/orderingHandlers/createOrderingHandler";
import { getOrdering } from "../../../common/selectors/treeSelectors/orderingSelector";

const UserStory = props => {

  const ordering = useSelector(getOrdering)
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const buttonPressedHandler = event => {
    event.preventDefault()
    dispatch(createOrderingHandler(user?.id))
  }
  const isGenealogist = useSelector(getIsGenealogist)

  return (
    <div className={classes.userStory}>
      {!ordering && !isGenealogist && <button onClick={buttonPressedHandler}>Замовити дослідження</button>}
    </div>
  );
}
export default UserStory