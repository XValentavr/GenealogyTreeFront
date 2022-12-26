import { createAsyncThunk } from "@reduxjs/toolkit";
import authClient from "../../../clients/authClient";

export const fetchSupport = createAsyncThunk(
  'support/fetchSupport',
  async ({ support }, { rejectWithValue }) => {
    try {
      const response = await authClient.support(support)
      if (response.status !== 200) {
        throw new Error('Виникла помилка, спробуйте ще раз')
      }
      return response
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
)