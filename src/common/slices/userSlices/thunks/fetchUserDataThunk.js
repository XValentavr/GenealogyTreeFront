import { createAsyncThunk } from "@reduxjs/toolkit";
import authClient from "../../../clients/authClient";

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authClient.getDataByToken()
      if (response.length === 1) {
        return response[0];
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
