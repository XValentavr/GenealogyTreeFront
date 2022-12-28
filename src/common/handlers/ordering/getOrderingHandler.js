import { fetchGettingOrdering } from "../../slices/ordering/thunks/fetchGettingOrdering";

const getOrderingHandler = () => async (dispatch) => {
  await dispatch(fetchGettingOrdering())
}

export default getOrderingHandler;