import { fetchSupport } from "../../slices/registerSlices/thunks/fetchSupport";

const supportHandler = (support) => async (dispatch) => {
  await dispatch(fetchSupport({ support }))
}

export default supportHandler;