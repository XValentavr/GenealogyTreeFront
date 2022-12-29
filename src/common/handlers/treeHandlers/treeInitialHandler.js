import { fetchInitialTree } from "../../slices/treeSlices/thunks/fetchInitialTree";

const treeInitialHandler = (currentUserId) => async (dispatch) => {
  await dispatch(fetchInitialTree({ currentUserId }))
}

export default treeInitialHandler;