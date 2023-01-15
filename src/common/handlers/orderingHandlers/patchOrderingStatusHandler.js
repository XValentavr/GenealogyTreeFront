import { fetchPatchOrdering } from "../../slices/orderingSlices/thunks/fetchPatchOrdering";

const patchOrderingStatusHandler = (client, status) => async (dispatch) => {
  await dispatch(fetchPatchOrdering({ client, status }))
}

export default patchOrderingStatusHandler;