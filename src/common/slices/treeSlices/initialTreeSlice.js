import { createSlice } from "@reduxjs/toolkit";
import { StatusesOfFetchingHelper } from "../../helpers/statusesOfFetchingHelper";
import { fetchInitialTree } from "./thunks/fetchInitialTree";
import { fetchPatchTreeData } from "./thunks/fetchPatchTreeData";
import {fetchPostTreeLine} from "./thunks/fetchPostTreeLine";

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
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchInitialTree.fulfilled]: (state, action) => {
      state.treeData = action.payload
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchInitialTree.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },

    [fetchPatchTreeData.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchPatchTreeData.fulfilled]: (state) => {
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchPatchTreeData.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },

    [fetchPostTreeLine.pending]: (state) => {
      state.status = StatusesOfFetchingHelper.LOADING
      state.error = null;
    },
    [fetchPostTreeLine.fulfilled]: (state) => {
      state.status = StatusesOfFetchingHelper.COMPLETED
      state.error = null
    },
    [fetchPostTreeLine.rejected]: (state, action) => {
      state.status = StatusesOfFetchingHelper.ERROR
      state.error = action.error;
    },
  }
});

export const initialTreeActions = initialTreeSlice.actions
export default initialTreeSlice