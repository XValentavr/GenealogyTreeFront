import { fetchPatchOrdering } from "../../slices/ordering/thunks/fetchPatchOrdering";

const patchOrderingHandler = (client, genealogist) => async (dispatch) => {
  await dispatch(fetchPatchOrdering({ client, genealogist }))
}

export default patchOrderingHandler;