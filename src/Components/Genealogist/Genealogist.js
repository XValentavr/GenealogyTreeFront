import { useDispatch, useSelector } from "react-redux";
import { getOrdering } from "../../common/selectors/treeSelectors/orderingSelector";
import getOrderingHandler from "../../common/handlers/ordering/getOrderingHandler";
import { useEffect, useState } from "react";
import classes from './styles/getOrdering.module.css'
import GenealogistList from "./GenealogistList";

const Genealogist = props => {
  const dispatch = useDispatch()
  const [isOnModal, setIsOnModal] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const ordering = useSelector(getOrdering)

  useEffect(() => {
    dispatch(getOrderingHandler())
  }, [isOnModal])


  const modalHandler = (order) => {
    setOrderId(order)
    setIsOnModal(!isOnModal)
  }
  if (ordering) {
    return (
      ordering.map((order) => {
        return (
          <div className={classes.order} key={order.id}>
            <div className={classes.innerOrderClass}>
              <div className={classes.info}>
                {order.email}
              </div>
              <div className={classes.info}>
                {order.userName}
              </div>
              <div className={classes.info}>
                {order.lastName}
              </div>
              <div className={classes.info}>Генеалог: {order.genealogistLastName}
              </div>
              <div className={classes.info}>
                {order.genealogistName}
              </div>
              {!order.genealogistName &&
                <button onClick={() => modalHandler(order.id)}>Вибрати генеалога</button>}
              {order.genealogistName &&
                <button onClick={() => modalHandler(order.id)}>Змінити генеалога</button>}
              {isOnModal &&
                <GenealogistList onClose={modalHandler} orderId={orderId}
                                 isOnModal={isOnModal}
                                 setIsOnModal={setIsOnModal}/>}
            </div>
          </div>
        )
      })
    );
  }
}
export default Genealogist