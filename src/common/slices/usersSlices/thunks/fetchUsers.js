import { createAsyncThunk } from "@reduxjs/toolkit";
import usersApiClient from "../../../clients/usersApiClient";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await usersApiClient.getAllUsers()
      if (response) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
