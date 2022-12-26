import { fetchAuth } from "../../slices/registerSlices/thunks/fetchAuthThunk";

const authHandler = (authData) => async (dispatch) => {
  await dispatch(fetchAuth({ authData }))
}

export default authHandler;