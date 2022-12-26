import { fetchResetPassword } from "../../slices/registerSlices/thunks/fetchResetThunk";

const resetHandler = (reset) => async (dispatch) => {
  await dispatch(fetchResetPassword({ reset }))
}

export default resetHandler;