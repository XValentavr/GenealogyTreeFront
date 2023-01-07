import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchGettingOrdering = createAsyncThunk(
  'orderingHandlers/fetchGettingOrdering',
  async ({ status = null }, { rejectWithValue }) => {
    try {
      const response = await treeApiClient.orderGettingTree(status)
      if (response) return response
      throw new Error('An error occurred')
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
