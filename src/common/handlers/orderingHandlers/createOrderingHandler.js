import { fetchCreateOrdering } from "../../slices/orderingSlices/thunks/fetchCreateOrdering";

const createOrderingHandler = (userId) => async (dispatch) => {
  await dispatch(fetchCreateOrdering({ userId }))
}

export default createOrderingHandler;