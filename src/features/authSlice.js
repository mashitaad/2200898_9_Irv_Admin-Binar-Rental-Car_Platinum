import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

export const login = createAsyncThunk(
  "user/login",
  async (params = {}, { rejectWithValue }) => {
    try {
      const apiUrl = config.apiBaseUrl;
      const response = await axios.post(apiUrl + "/admin/auth/login", params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: {},
    loading: "idle",
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
        state.errorMessage = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "rejected";
        state.errorMessage = action.payload;
      });
  },
});

export const authSelector = {
  selectToken: (state) => state.auth.data,
  loading: (state) => state.auth.loading,
  errorMessage: (state) => state.auth.errorMessage,
};


export default authSlice.reducer;