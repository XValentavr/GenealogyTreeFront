import authClient from "../../../clients/authClient/authClient";

const fetchResetThunk = async value => {
  return await authClient.reset(value);
}

export default fetchResetThunk;
