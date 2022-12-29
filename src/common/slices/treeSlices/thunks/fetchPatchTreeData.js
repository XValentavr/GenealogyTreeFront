import { createAsyncThunk } from "@reduxjs/toolkit";
import TreeApiClient from "../../../clients/treeApiClient";
import { initialTreeError } from "../../../errors/treeError";

export const fetchPatchTreeData = createAsyncThunk(
  'tree/fetchPatchTreeData',
  async ({ currentTreeId, data }, { rejectWithValue }) => {
    try {
      const response = await TreeApiClient.patchTreeData(currentTreeId, data);
      if (!response) {
        throw new Error(initialTreeError())
      }
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
