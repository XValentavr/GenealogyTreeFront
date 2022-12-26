import { createAsyncThunk } from "@reduxjs/toolkit";
import authClient from "../../../clients/authClient";
import { RegisterError } from "../../../errors/registerError";

export const fetchRegister = createAsyncThunk(
  'registerSlices/fetchRegister',
  async ({ register }, { rejectWithValue }) => {
    try {
      const response = await authClient.register(register);
      if (!response.ok)
        throw new Error(RegisterError(response))
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);