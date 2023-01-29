import {fetchPostTreeLine} from "../../slices/treeSlices/thunks/fetchPostTreeLine";

const postTreeLines = (treeId, data) => async (dispatch) => {
    console.log('1234',treeId)
    await dispatch(fetchPostTreeLine({treeId, data}))
}

export default postTreeLines;