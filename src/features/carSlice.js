import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

export const admingetAllCars = createAsyncThunk(
  "car/getAllCars",
  async (params = {}) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    const apiUrl = config.apiBaseUrl;

    try {
      const response = await axios.get(apiUrl + "/admin/v2/car", {
        params,
        headers: {
          access_token: token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const adminGetCarById = createAsyncThunk("car/getCar", async (id) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const apiUrl = config.apiBaseUrl;
  try {
    const response = await axios.get(apiUrl + `/admin/car/${id}`, {
      headers: {
        access_token: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const adminAddCar = createAsyncThunk(
  "car/add",
  async (params = {}, { rejectWithValue }) => {
    const apiUrl = config.apiBaseUrl;
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    try {
      const response = await axios.post(apiUrl + "/admin/car", params, {
        headers: {
          "content-type": "multipart/form-data",
          access_token: token,
        },
      });
      
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const adminUpdateCar = createAsyncThunk(
  "car/update",
  async ({ id, params }, { rejectWithValue }) => {
    const apiUrl = config.apiBaseUrl;
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    try {
      const response = await axios.put(apiUrl + `/admin/car/${id}`, params, {
        headers: {
          "content-type": "multipart/form-data",
          access_token: token,
        },
      });

      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const adminDeleteCar = createAsyncThunk(
  "car/delete",
  async (id, { rejectWithValue }) => {
    const apiUrl = config.apiBaseUrl;
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    try {
      await axios.delete(apiUrl + `/admin/car/${id}`, {
        headers: {
          access_token: token,
        },
      });

      return id;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState: {
    data: {},
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(admingetAllCars.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(admingetAllCars.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(adminGetCarById.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(adminGetCarById.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(adminAddCar.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(adminAddCar.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(adminUpdateCar.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(adminUpdateCar.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(adminDeleteCar.fulfilled, (state, action) => {
        const deletedCarId = action.payload;
        delete state.data[deletedCarId];
        state.loading = false;
      })
      .addCase(adminDeleteCar.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(adminDeleteCar.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export const carSelectors = {
  selectAllCars: (state) => state.car.data,
  selectCars: (state) => state.car.data,
  loading: (state) => state.car.loading,
};
export default carSlice.reducer;
