import { fetchUser } from "../../slices/userSlices/thunks/fetchUserDataThunk";

const getUserHandler = () => async (dispatch) => {
  await dispatch(fetchUser())
}

export default getUserHandler;