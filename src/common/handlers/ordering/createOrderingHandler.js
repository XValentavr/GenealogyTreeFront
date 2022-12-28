import { fetchCreateOrdering } from "../../slices/ordering/thunks/fetchCreateOrdering";

const createOrderingHandler = (userId) => async (dispatch) => {
  await dispatch(fetchCreateOrdering({ userId }))
}

export default createOrderingHandler;