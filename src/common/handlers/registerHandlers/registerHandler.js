import { fetchRegister } from "../../slices/registerSlices/thunks/fetchRegisterThunk";

const registerHandler = (register) => async (dispatch) => {
  await dispatch(fetchRegister({ register }))
}

export default registerHandler;