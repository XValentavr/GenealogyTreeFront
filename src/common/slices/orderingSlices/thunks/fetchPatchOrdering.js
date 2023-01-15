import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchPatchOrdering = createAsyncThunk(
  'orderingHandlers/fetchPatchOrdering',
  async ({ client, status=null, genealogist=null}, { rejectWithValue }) => {
    try {
      await treeApiClient.orderPatchTree(client, status, genealogist)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
