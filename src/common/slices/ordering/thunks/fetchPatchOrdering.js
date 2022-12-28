import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchPatchOrdering = createAsyncThunk(
  'ordering/fetchPatchOrdering',
  async ({ client, genealogist, }, { rejectWithValue }) => {
    try {
      await treeApiClient.orderPatchTree(client, genealogist)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
