import { fetchGettingOrdering } from "../../slices/orderingSlices/thunks/fetchGettingOrdering";

const getOrderingHandler = () => async (dispatch) => {
  await dispatch(fetchGettingOrdering({}))
}

export default getOrderingHandler;