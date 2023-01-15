import { fetchGettingOrdering } from "../../slices/orderingSlices/thunks/fetchGettingOrdering";

const getOrderingHandler = (status=null) => async (dispatch) => {
  await dispatch(fetchGettingOrdering({status}))
}

export default getOrderingHandler;