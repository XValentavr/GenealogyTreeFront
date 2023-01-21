import { fetchGettingOrdersForGenealogist } from "../../slices/orderingSlices/thunks/fetchGettingOrdersForGenealogist";

const getOrderingForGenealogist = (client) => async (dispatch) => {
  await dispatch(fetchGettingOrdersForGenealogist({ client }))
}

export default getOrderingForGenealogist;