import { createAsyncThunk } from "@reduxjs/toolkit";
import authClient from "../../../clients/authClient";


export const fetchResetPassword = createAsyncThunk(
  'reset/fetchResetPassword',
  async ({ reset }, { rejectWithValue }) => {
    try {
      const response = await authClient.reset(reset);
      if (!response.ok)
        throw new Error('Cant registerSlices. Please try again')
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)