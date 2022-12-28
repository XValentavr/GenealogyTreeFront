import { fetchUsers } from "../../slices/usersSlices/thunks/fetchUsers";

const getUsersHandler = () => async (dispatch) => {
  await dispatch(fetchUsers())
}

export default getUsersHandler;