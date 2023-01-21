import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import getOrderingForGenealogist from "../../common/handlers/orderingHandlers/getOrderingForGenealogist";
import { getOrderingForCurrentGenealogist } from "../../common/selectors/treeSelectors/orderingGenealogistSelectors";
import classes from "./styles/GenealogistGetOrdering.module.css";

const GenealogistOrders = ({}) => {
  const dispatch = useDispatch()
  const genealogist = useParams()

  useEffect(() => {
    dispatch(getOrderingForGenealogist(genealogist.treeId))
  }, [dispatch])

  const orderingForGenealogist = useSelector(getOrderingForCurrentGenealogist)

  if (orderingForGenealogist) {
    return (
      <>
        {orderingForGenealogist.map((order) => {
          return (
            <div className={classes.order} key={order.id}>
              <div className={classes.info}>
                {order.userName}
              </div>
              <Link to={`/tree/${order.rootTreeId}`}>Дерево клієнта</Link>
            </div>
          )
        })}
      </>
    );
  }
}
export default GenealogistOrders