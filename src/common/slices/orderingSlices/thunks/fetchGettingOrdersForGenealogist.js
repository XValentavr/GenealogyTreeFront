import { createAsyncThunk } from "@reduxjs/toolkit";
import treeApiClient from "../../../clients/treeApiClient";

export const fetchGettingOrdersForGenealogist = createAsyncThunk(
  'orderingHandlers/fetchGettingOrdersForGenealogist',
  async ({ client }, { rejectWithValue }) => {
    try {
      const response = await treeApiClient.getOrdersForGenealogist(client)
      if (response) return response
      throw new Error('An error occurred')
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
