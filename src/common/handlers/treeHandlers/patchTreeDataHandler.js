import { fetchPatchTreeData } from "../../slices/treeSlices/thunks/fetchPatchTreeData";

const patchTreeDataHandler = (currentTreeId, data) => async (dispatch) => {
  await dispatch(fetchPatchTreeData({ currentTreeId, data }))
}

export default patchTreeDataHandler;