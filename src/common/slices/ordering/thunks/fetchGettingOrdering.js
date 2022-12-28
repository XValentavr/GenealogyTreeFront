import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchGettingOrdering = createAsyncThunk(
  'ordering/fetchGettingOrdering',
  async (_, { rejectWithValue }) => {
    try {
      const response = await treeApiClient.orderGettingTree()
      if (response) return response
      throw new Error('An error occurred')
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
