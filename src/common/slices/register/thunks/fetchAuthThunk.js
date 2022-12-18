import authClient from "../../../clients/authClient/authClient";

const fetchAuthThunk = async value => {
  return await authClient.auth(value);
}

export default fetchAuthThunk;
