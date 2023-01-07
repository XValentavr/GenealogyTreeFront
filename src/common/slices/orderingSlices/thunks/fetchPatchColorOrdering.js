import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchPatchColorOrdering = createAsyncThunk(
  'orderingHandlers/fetchPatchOrdering',
  async ({ client, colorCode, }, { rejectWithValue }) => {
    try {
      await treeApiClient.orderPatchColorTree(client, colorCode)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)