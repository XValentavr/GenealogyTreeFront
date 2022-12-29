import { createAsyncThunk } from "@reduxjs/toolkit";
import TreeApiClient from "../../../clients/treeApiClient";
import { initialTreeError } from "../../../errors/treeError";

export const fetchInitialTree = createAsyncThunk(
  'tree/fetchInitialTree',
  async ({ currentUserId }, { rejectWithValue }) => {
    try {
      const response = await TreeApiClient.getInitialTree(currentUserId);
      if (!response) {
        throw new Error(initialTreeError())
      }
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
