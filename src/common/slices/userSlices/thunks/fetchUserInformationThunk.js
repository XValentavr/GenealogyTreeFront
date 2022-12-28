import { createAsyncThunk } from "@reduxjs/toolkit";
import userInformationApiClient from "../../../clients/usersApiClient";

export const fetchUserInformation = createAsyncThunk(
  'information/fetchUserInformation',
  async ({ uuid }, { rejectWithValue }) => {
    try {
      const response = await userInformationApiClient.getPersonalInfo(uuid)
      if (response) {
        return response[0]
      }
      throw new Error("No data")
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
