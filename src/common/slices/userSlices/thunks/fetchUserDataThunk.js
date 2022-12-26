import { createAsyncThunk } from "@reduxjs/toolkit";
import authClient from "../../../clients/authClient";

export const fetchUser = createAsyncThunk(
  'user/fetchUserDataThunk',
  async (_, { rejectWithValue }) => {
    try {
      console.log('here')
      const response =  await authClient.getDataByToken()
      console.log(response,"response")
      if (response.length===1){
        return response[0];
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
