import { fetchUserInformation } from "../../slices/userSlices/thunks/fetchUserInformationThunk";

const getUserInformation = (uuid) => async (dispatch) => {
  await dispatch(fetchUserInformation({ uuid }))
}

export default getUserInformation;