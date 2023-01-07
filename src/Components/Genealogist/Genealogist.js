import { useDispatch, useSelector } from "react-redux";
import { getOrdering } from "../../common/selectors/treeSelectors/orderingSelector";
import getOrderingHandler from "../../common/handlers/orderingHandlers/getOrderingHandler";
import { useEffect, useRef, useState } from "react";
import classes from './styles/GenealogistGetOrdering.module.css'
import GenealogistList from "./GenealogistList";
import GenealogistDropdownStatuses from "./GenealogistDropdownStatuses";
import patchOrderingColorHandler from "../../common/handlers/orderingHandlers/patchOrderingColorHandler";

const Genealogist = props => {
  const dispatch = useDispatch()
  const colorRef = useRef()
  const [isOnModal, setIsOnModal] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [color, setColor] = useState(null)

  const ordering = useSelector(getOrdering)

  useEffect(() => {
    dispatch(getOrderingHandler())
  }, [isOnModal, color])


  const modalHandler = (order) => {
    setOrderId(order)
    setIsOnModal(!isOnModal)
  }
  const colorOnChangeHandler = async clientId => {
    await dispatch(patchOrderingColorHandler(clientId, colorRef.current.value))
    setColor(colorRef.current.value)
  }

  if (ordering) {
    return (
      <>
        <GenealogistDropdownStatuses/>
        {ordering.map((order) => {
          return (
            <div className={classes.order} key={order.id}>
              <div style={{ backgroundColor: order?.colorCode }}>
                <input type="color" id="colorGenealogist"
                       defaultValue={"#0000ff"} ref={colorRef} onChange={() => colorOnChangeHandler(order.id)}/>
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
                <div className={classes.info}>Статус:
                  {order.status}
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
        }
      </>
    );

  }
}
export default Genealogist