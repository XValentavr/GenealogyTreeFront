import { createAsyncThunk } from "@reduxjs/toolkit";
import authClient from "../../../clients/authClient";
import { authError } from "../../../errors/authError";

export const fetchAuth = createAsyncThunk(
  'authorize/fetchAuth',
  async ({ authData }, { rejectWithValue }) => {
    try {
      const response = await authClient.authorize(authData);
      if (!response.ok && !response.auth_token) {
        throw new Error(authError())
      }
      return response.auth_token
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)