import { createSlice } from "@reduxjs/toolkit";
import { StatusesHelper } from "../../helpers/statusesHelper";
import { fetchInitialTree } from "./thunks/fetchInitialTree";
import { fetchPatchTreeData } from "./thunks/fetchPatchTreeData";

const initialTreeSlice = createSlice({
  name: "tree",
  initialState: {
    treeData: [],
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchInitialTree.pending]: (state) => {
      state.status = StatusesHelper.LOADING
      state.error = null;
    },
    [fetchInitialTree.fulfilled]: (state, action) => {
      state.treeData = action.payload
      state.status = StatusesHelper.COMPLETED
      state.error = null
    },
    [fetchInitialTree.rejected]: (state, action) => {
      state.status = StatusesHelper.ERROR
      state.error = action.error;
    },

    [fetchPatchTreeData.pending]: (state) => {
      state.status = StatusesHelper.LOADING
      state.error = null;
    },
    [fetchPatchTreeData.fulfilled]: (state, action) => {
      state.treeData = action.payload
      state.status = StatusesHelper.COMPLETED
      state.error = null
    },
    [fetchPatchTreeData.rejected]: (state, action) => {
      state.status = StatusesHelper.ERROR
      state.error = action.error;
    },
  }
});

export const initialTreeActions = initialTreeSlice.actions
export default initialTreeSlice