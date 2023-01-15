import { fetchPatchOrdering } from "../../slices/orderingSlices/thunks/fetchPatchOrdering";

const patchOrderingGenealogistHandler = (client, genealogist) => async (dispatch) => {
  await dispatch(fetchPatchOrdering({ client, genealogist }))
}

export default patchOrderingGenealogistHandler;