import { fetchPatchColorOrdering } from "../../slices/orderingSlices/thunks/fetchPatchColorOrdering";

const patchOrderingColorHandler = (client, colorCode) => async (dispatch) => {
  console.log(client)
  await dispatch(fetchPatchColorOrdering({ client, colorCode }))
}

export default patchOrderingColorHandler;