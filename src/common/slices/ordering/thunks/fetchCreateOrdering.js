import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchCreateOrdering = createAsyncThunk(
  'ordering/fetchCreateOrdering',
  async ({ userId }, { rejectWithValue }) => {
    try {
      await treeApiClient.orderCreatingTree(userId)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
