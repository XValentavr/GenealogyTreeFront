import {createAsyncThunk} from "@reduxjs/toolkit";
import TreeApiClient from "../../../clients/treeApiClient";

export const fetchPostTreeLine = createAsyncThunk(
    'tree/fetchPostTreeLine',
    async ({treeId, data}, {rejectWithValue}) => {
        try {
            await TreeApiClient.createTreeLine(treeId, data);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
