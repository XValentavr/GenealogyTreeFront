import authClient from "../../../clients/authClient/authClient";

const fetchRegisterThunk = async value => {
  return await authClient.register(value);
}

export default fetchRegisterThunk;
